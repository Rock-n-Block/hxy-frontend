import { Component, EventEmitter, NgZone } from '@angular/core';
import { MetamaskService } from './services/web3/web3.service';

import BigNumber from 'bignumber.js';
import {Contract} from './models/contract/contract';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})

export class AppComponent {

  public form1Progress: boolean;
  public form2Progress: boolean;
  public form3Progress: boolean;

  public metaMaskAuth = false;
  public userAddress: string;
  public metaMaskError: string;
  public network: string;
  public formData: {
    send: {
      coin: any;
      amount?: string
    },
    want: {
      method: string;
      amount?: string;
      freezeDate?: any;
    }
  };

  public latestFreeze: number;

  public coinsDecimals: {
    ETH: number;
    HEX: number;
    HXY: number;
    USDC: number;
  };

  public coinsIcons = {
    ETH: './assets/img/eth-logo.png',
    HEX: './assets/img/hex-logo.png',
    HXY: './assets/img/hxy-logo.png',
    USDC: './assets/img/usdc-logo.svg'
  };

  public dividendsState: any;

  public dividends: any[];
  public freezings: any[];
  public expiredIn: any;

  public expireTimes: {
    hours?: number;
    minutes?: number;
    seconds?: number;
  };

  private timerStart: number;

  public balances: {
    key: string;
    decimalsValue: BigNumber;
    value: string;
  }[];

  public amountLimits: {
    HEX: any;
    ETH: any;
    USDC: any;
  };

  public totalInfo: any;

  private rates: any;
  public prices: any[];

  public onChangeCoinEmitter: EventEmitter<any>;
  private contract;

  public currentRound: number;

  private claimChecker: any;

  constructor(
    private web3Service: MetamaskService,
    private ngZone: NgZone
  ) {
    this.onChangeCoinEmitter = new EventEmitter();
    this.formData = {
      send: {
        coin: 'HEX'
      },
      want: {
        method: 'freeze'
      }
    };
    this.rates = {};
    this.expireTimes = {};
    setTimeout(() => {
      this.connectMetaMask(true);
    });
  }

  public changeCoin() {
    setTimeout(() => {
      this.onChangeCoinEmitter.emit('');
    });
  }



  private setAccount(result) {

    if (this.network !== result.network) {
      this.network = result.network;
      this.contract = new Contract(this.network, this.web3Service);
      this.getStaticParams();
      this.updateDynamicInfo();
      this.getDividends();
    }

    this.getAccountBalances();
    this.updateRemainingTime();
    this.updateUserFreezings();
    this.getUserDividends();

    this.metaMaskAuth = true;
    this.userAddress = result.account;
    this.metaMaskError = '';
  }


  private getUserDividends() {
    return this.contract.getAvailableDividends().then((dividends) => {
      if (dividends === null) {
        this.dividends = null;
        return;
      }

      const notZero = dividends.find((d) => {
        return +d.value > 0;
      });

      if (notZero) {
        this.dividends = this.dividends || [];
        dividends.forEach((div) => {
          div.value = new BigNumber(div.value);
          const oldDiv =  this.dividends.find((old) => {
            return div.coin === old.coin;
          });
          if (oldDiv) {
            oldDiv.value = div.value;
          } else {
            this.dividends.push(div);
          }
        });
      } else {
        this.dividends = null;
      }

    });
  }


  public connectMetaMask(ignoreErrors?, checkAccount?) {
    const getAccountObserver = this.web3Service.getAccounts(ignoreErrors);
    if (ignoreErrors) {
      getAccountObserver.toPromise().then((res: any) => {
        if (res.account) {
          this.connectMetaMask(false, true);
          this.setAccount(res);
        }
      });
    } else {
      getAccountObserver.subscribe((res) => {
        if (!checkAccount) {
          this.ngZone.run(() => {
            this.setAccount(res);
          });
        }
        checkAccount = false;
      }, (err) => {
        this.metaMaskAuth = false;
        this.metaMaskError = !ignoreErrors ? err.msg : '';
      });
    }
  }







  private getAccountBalances() {
    const newBalances = this.balances || [];
    this.contract.getCoinsBalances().then((balances: any[]) => {
      balances.forEach((balanceValue) => {
        const existsBalance = newBalances.find((currBalance) => {
          return currBalance.key === balanceValue.key;
        });
        if (existsBalance) {
          existsBalance.value = balanceValue.value;
        } else {
          newBalances.push(balanceValue);
        }
      });
      this.balances = newBalances;
    });
  }


  private checkExpiredIn() {
    if (this.claimChecker) {
      clearTimeout(this.claimChecker);
      this.claimChecker = false;
    }
    const leftDateTime = this.expiredIn.left - Math.round((new Date().getTime() - this.timerStart) / 1000);
    if (leftDateTime >= 0) {
      this.expireTimes.hours = Math.floor(leftDateTime / 3600);
      this.expireTimes.minutes = Math.floor(leftDateTime % 3600 / 60);
      this.expireTimes.seconds = leftDateTime % 60;
      this.claimChecker = setTimeout(() => {
        this.checkExpiredIn();
      }, 400);
    } else {
      this.updateRemainingTime().then(() => {
        this.getDividends();
        this.updateUserFreezings();
        this.updateRoundInfo();
        this.updateDynamicInfo();
      });
    }
  }


  private updateDynamicInfo() {
    this.contract.getTotalInfo().then((totalInfo) => {
      this.totalInfo = totalInfo;
    });
  }

  private updateRemainingTime() {
    return this.contract.getRemainingRecordTime().then((res) => {
      this.timerStart = new Date().getTime();
      this.expiredIn = res;
      this.checkExpiredIn();
    });
  }

  private getStaticParams() {
    this.contract.getAmountsLimits().then((limits) => {
      this.amountLimits = limits;
    });
    this.contract.getCoinsDecimals().then((res: any) => {
      this.coinsDecimals = res;
      this.updateRoundInfo();
    });
  }


  private updateRoundInfo() {
    this.contract.getRound().then((round: string) => {
      this.currentRound = +round + 1;
    });

    this.contract.getHXYPrices().then((result: any) => {
      this.prices = result.prices;
      this.rates = result.rates;
    });

  }


  private getDividends() {
    this.contract.getDividendsState().then((res: any) => {
      res.previousDividendsTotal.forEach((val, index) => {
        let profit = 0;
        const claimed = res.beforePreviousDividendsTotal[index].value;
        if (claimed) {
          const onePercent = claimed / 100;
          profit = val.value / onePercent - 100;
        } else if (val.value) {
          profit = 100;
        }
        val.profit = profit;
      });
      this.dividendsState = res;
    });
  }


  private updateUserFreezings() {
    return this.contract.getUserFreezings().then((res) => {
      this.freezings = res.map((freez) => {
        const founded = this.freezings ? this.freezings.find(fr => freez.id === fr.id) as any : false;
        this.latestFreeze = Math.max(this.latestFreeze || 0, freez.startDate);
        if (founded) {
          return {...founded, ...freez};
        } else {
          return freez;
        }
      });
      return this.freezings;
    });
  }


  get todayFreezed() {
    if (!(this.latestFreeze && this.expiredIn)) {
      return;
    }
    return this.latestFreeze > (this.expiredIn.next - this.expiredIn.period);
  }


  private hexExchange() {
    return this.contract.sendHEX(this.formData.send.amount);
  }

  private ethExchange() {
    return this.contract.sendETH(this.formData.send.amount);
  }

  private usdcExchange() {
    return this.contract.sendUSDC(this.formData.send.amount);
  }

  public exchangeAmount() {
    let transactionPromise;
    switch (this.formData.send.coin) {
      case 'HEX':
        transactionPromise = this.hexExchange();
        break;
      case 'ETH':
        transactionPromise = this.ethExchange();
        break;
      case 'USDC':
        transactionPromise = this.usdcExchange();
        break;
    }
    this.form1Progress = true;
    transactionPromise.then(() => {
      this.updateDynamicInfo();
      this.getAccountBalances();
      this.formData.send.amount = '';
    }).finally(() => {
      this.form1Progress = false;
    });
  }



  public freezeHXY() {
    let transactionPromise;
    transactionPromise = this.contract.freezeHXY(this.formData.want.amount);
    this.form2Progress = true;
    transactionPromise.then(() => {
      this.updateDynamicInfo();
      this.updateUserFreezings();
      this.getAccountBalances();
    }).finally(() => {
      this.form2Progress = false;
    });
  }

  public unFreeze(freezing) {
    freezing.inProgress = true;
    this.contract.unfreeze(freezing.startDate).then(() => {
      this.updateUserFreezings().then(() => {
        this.updateDynamicInfo();
        this.getAccountBalances();
      });
    }).catch(() => {
      freezing.inProgress = false;
    });
  }


  public refreezeHxy(freezing) {
    freezing.inProgressRefreeze = true;
    this.contract.refreezeHxy(freezing.startDate).then(() => {
      this.updateUserFreezings().then(() => {
        this.updateDynamicInfo();
        this.getAccountBalances();
        const currentFreeze = this.freezings.find((fr) => {
          return freezing.id === fr.id;
        });
        if (currentFreeze) {
          currentFreeze.inProgressRefreeze = false;
        }
      });
    }).catch(() => {
      freezing.inProgressRefreeze = false;
    });
  }


  public claimDividends() {
    this.form3Progress = true;

    const callClaim = () => {
      this.contract.claimDividends().then(() => {
        this.updateDynamicInfo();
        this.getAccountBalances();
        this.getUserDividends().then(() => {
          if (this.expiredIn.requireRequest) {
            this.updateRemainingTime().then(() => {
              this.getUserDividends();
              this.expiredIn.latest = Math.round((new Date().getTime()) / 1000);
              this.form3Progress = false;
            });
          } else {
            this.expiredIn.latest = Math.round((new Date().getTime()) / 1000);
            this.form3Progress = false;
          }
          this.getDividends();
        }).catch(() => {
          this.form3Progress = false;
        });
      }).catch(() => {
        this.form3Progress = false;
      });
    };

    if (this.expiredIn.requireRequest) {
      this.updateRemainingTime().then(() => {
        if (!this.expiredIn.requireRequest) {
          this.getUserDividends();
        }
        callClaim();
      });
    } else {
      callClaim();
    }
  }


  public toDecimals(val, decimals) {
    return new BigNumber(val).div(Math.pow(10, decimals)).toString(10);
  }

  get hxyAmount() {
    if (this.formData.send.amount) {
      return this.rates[this.formData.send.coin].times(this.formData.send.amount)
        .div(Math.pow(10, this.coinsDecimals[this.formData.send.coin])).toString(10);
    }
    return 0;
  }

  get HXYBalance() {
    return this.balances.find((balance) => {
      return balance.key === 'HXY';
    }).value;
  }

  get now() {
    return new Date().getTime();
  }


  get isActiveClaim() {
    return this.expiredIn ? this.expiredIn.next - this.expiredIn.latest < this.expiredIn.period : false;
  }

}
