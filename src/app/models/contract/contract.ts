import {MetamaskService} from '../../services/web3/web3.service';
import {ContractConstants} from './constants';
import BigNumber from 'bignumber.js';


const dividendsKeys = ['ETH', 'HXY', 'HEX', 'USDC'];

export class Contract {

  private HEXTokenContract: any;
  private HXYTokenContract: any;
  private USDCTokenContract: any;
  private DividendsContract: any;
  private HEXExchangeContract: any;
  private USDCExchangeContract: any;
  private ETHExchangeContract: any;
  private uniswapContract: any;
  private uniswapUSDCContract: any;

  private coinsDecimals: any;

  constructor(
    private network: string,
    private web3Service: MetamaskService
  ) {

    this.HEXTokenContract = this.web3Service.getContract(
      ContractConstants.ABIs.HEX,
      ContractConstants.ADDRESSES[this.network].HEX
    );

    this.HXYTokenContract = this.web3Service.getContract(
      ContractConstants.ABIs.HXY,
      ContractConstants.ADDRESSES[this.network].HXY
    );


    this.USDCTokenContract = this.web3Service.getContract(
      ContractConstants.ABIs.USDC,
      ContractConstants.ADDRESSES[this.network].USDC
    );

    this.DividendsContract = this.web3Service.getContract(
      ContractConstants.ABIs.DIVIDENDS,
      ContractConstants.ADDRESSES[this.network].DIVIDENDS
    );

    this.HEXExchangeContract = this.web3Service.getContract(
      ContractConstants.ABIs.HEX_EXCHANGE,
      ContractConstants.ADDRESSES[this.network].HEX_EXCHANGE
    );

    this.ETHExchangeContract = this.web3Service.getContract(
      ContractConstants.ABIs.ETH_EXCHANGE,
      ContractConstants.ADDRESSES[this.network].ETH_EXCHANGE
    );

    this.USDCExchangeContract = this.web3Service.getContract(
      ContractConstants.ABIs.USDC_EXCHANGE,
      ContractConstants.ADDRESSES[this.network].USDC_EXCHANGE
    );

    this.uniswapContract = this.web3Service.getContract(
      ContractConstants.ABIs.UNISWAP,
      ContractConstants.ADDRESSES[this.network].UNISWAP
    );

    this.uniswapUSDCContract = this.web3Service.getContract(
      ContractConstants.ABIs.UNISWAP_USDC,
      ContractConstants.ADDRESSES[this.network].UNISWAP_USDC
    );
  }

  public secondsOfDay() {
    return ContractConstants[this.network].SECONDS_OF_DAY;
  }

  private checkTx(tx, resolve, reject) {
    this.web3Service.Web3.eth.getTransaction(tx.transactionHash).then((txInfo) => {
      if (txInfo.blockNumber) {
        console.log(txInfo);
        resolve(tx);
      } else {
        setTimeout(() => {
          this.checkTx(tx, resolve, reject);
        }, 2000);
      }
    }, reject);
  }

  private checkTransaction(tx) {
    return new Promise((resolve, reject) => {
      this.checkTx(tx, resolve, reject);
    });
  }




  public getCoinsDecimals() {
    const promises = [
      this.HEXTokenContract.methods.decimals().call().then((result: any) => {
        return {
          key: 'HEX',
          value: parseInt(result, 10)
        };
      }),
      this.HXYTokenContract.methods.decimals().call().then((result: any) => {
        return {
          key: 'HXY',
          value: parseInt(result, 10)
        };
      }),
      this.USDCTokenContract.methods.decimals().call().then((result: any) => {
        return {
          key: 'USDC',
          value: parseInt(result, 10)
        };
      })
    ];

    return Promise.all(promises).then((result) => {
      const decimals = {
        ETH: 18
      };
      result.forEach((coinItem) => {
        decimals[coinItem.key] = coinItem.value;
      });
      this.coinsDecimals = decimals;
      return decimals;
    });
  }

  public getCoinsBalances() {
      const promises = [
        this.HEXTokenContract.methods.balanceOf(this.HEXTokenContract.givenProvider.selectedAddress).call().then((res) => {
          return {
            key: 'HEX',
            value: res
          };
        }),
        this.HXYTokenContract.methods.actualBalanceOf(this.HXYTokenContract.givenProvider.selectedAddress).call().then((res) => {
          return {
            key: 'HXY',
            value: res
          };
        }),
        this.USDCTokenContract.methods.balanceOf(this.USDCTokenContract.givenProvider.selectedAddress).call().then((res) => {
          return {
            key: 'USDC',
            value: res
          };
        }),
        this.web3Service.getBalance(this.HXYTokenContract.givenProvider.selectedAddress).then((res) => {
          return {
            key: 'ETH',
            value: res
          };
        })
      ];
      return Promise.all(promises);
  }

  public getAmountsLimits() {
    const promises = [
      this.HEXExchangeContract.methods.getMinAmount().call().then((result: any) => {
        return {
          key: 'HEX',
          type: 'min',
          value: result
        };
      }),
      this.HEXExchangeContract.methods.getMaxAmount().call().then((result: any) => {
        return {
          key: 'HEX',
          type: 'max',
          value: result
        };
      }),
      this.USDCExchangeContract.methods.getMinAmount().call().then((result: any) => {
        return {
          key: 'USDC',
          type: 'min',
          value: result
        };
      }),
      this.USDCExchangeContract.methods.getMaxAmount().call().then((result: any) => {
        return {
          key: 'USDC',
          type: 'max',
          value: result
        };
      }),
      this.ETHExchangeContract.methods.getMinAmount().call().then((result: any) => {
        return {
          key: 'ETH',
          type: 'min',
          value: result
        };
      }),
      this.ETHExchangeContract.methods.getMaxAmount().call().then((result: any) => {
        return {
          key: 'ETH',
          type: 'max',
          value: result
        };
      }),
    ];
    return Promise.all(promises).then((result) => {
      return result.reduce((val, limit) => {
        val[limit.key] = val[limit.key] || {};
        val[limit.key][limit.type] = limit.value;
        return val;
      }, {});
    });
  }



  public sendETH(amount, referralAddress?) {

    const txParams = {
      value: amount,
      from: this.ETHExchangeContract.givenProvider.selectedAddress,
      to: this.ETHExchangeContract.options.address
    };
    const exchangeTokens = () => {
      return this.ETHExchangeContract.methods.exchangeEth().send(txParams).then((res) => {
        return this.checkTransaction(res);
      });
    };

    const exchangeTokensWthReferral = () => {
      return this.ETHExchangeContract.methods.exchangeEthWithReferral(referralAddress).send(txParams).then((res) => {
        return this.checkTransaction(res);
      });
    };

    return (referralAddress ? exchangeTokensWthReferral() : exchangeTokens()).then((res) => {
      return this.checkTransaction(res);
    });
  }

  private checkHXYApproval(amount, address): Promise<any> {
    return new Promise((resolve, reject) => {
      this.HXYTokenContract.methods.allowance(
        this.HXYTokenContract.givenProvider.selectedAddress,
        address
      ).call().then((allowance: string) => {
        const allow = new BigNumber(allowance);
        const allowed = allow.minus(amount);
        allowed.isNegative() ? reject() : resolve();
      });
    });
  }


  private checkHEXApproval(amount, address?): Promise<any> {
    return new Promise((resolve, reject) => {
      this.HEXTokenContract.methods.allowance(
        this.HEXTokenContract.givenProvider.selectedAddress,
        address || this.HEXExchangeContract.options.address
      ).call().then((allowance: string) => {
        const allow = new BigNumber(allowance);
        const allowed = allow.minus(amount);
        allowed.isNegative() ? reject() : resolve();
      });
    });
  }

  public sendHEX(amount, referralAddress?) {
    const fromAccount = this.HEXTokenContract.givenProvider.selectedAddress;

    const exchangeTokens = () => {
      return this.HEXExchangeContract.methods.exchangeHex(amount).send({
        from: fromAccount
      }).then((res) => {
        return this.checkTransaction(res);
      });
    };

    const exchangeTokensWthReferral = () => {
      return this.HEXExchangeContract.methods.exchangeHexWithReferral(amount, referralAddress).send({
        from: fromAccount
      }).then((res) => {
        return this.checkTransaction(res);
      });
    };

    return new Promise((resolve, reject) => {
      const method = !referralAddress ? exchangeTokens : exchangeTokensWthReferral;
      this.checkHEXApproval(amount).then(() => {
        method().then(resolve, reject);
      }, () => {
        this.HEXTokenContract.methods.approve(this.HEXExchangeContract.options.address, amount).send({
          from: fromAccount
        }).then(() => {
          method().then(resolve, reject);
        }, reject);
      });
    });
  }



  private checkUSDCApproval(amount, address?): Promise<any> {
    return new Promise((resolve, reject) => {
      this.USDCTokenContract.methods.allowance(
        this.USDCTokenContract.givenProvider.selectedAddress,
        address || this.USDCExchangeContract.options.address
      ).call().then((allowance: string) => {
        const allow = new BigNumber(allowance);
        const allowed = allow.minus(amount);
        console.log(allowance, amount);
        allowed.isNegative() ? reject() : resolve();
      });
    });
  }

  public sendUSDC(amount, referralAddress?) {
    const fromAccount = this.USDCExchangeContract.givenProvider.selectedAddress;
    const exchangeTokens = () => {
      return this.USDCExchangeContract.methods.exchangeUsdc(amount).send({
        from: fromAccount
      }).then((res) => {
        return this.checkTransaction(res);
      });
    };

    const exchangeTokensWthReferral = () => {
      return this.USDCExchangeContract.methods.exchangeUsdcWithReferral(amount, referralAddress).send({
        from: fromAccount
      }).then((res) => {
        return this.checkTransaction(res);
      });
    };


    return new Promise((resolve, reject) => {
      const method = !referralAddress ? exchangeTokens : exchangeTokensWthReferral;
      this.checkUSDCApproval(amount).then(() => {
        method().then(resolve, reject);
      }, () => {
        this.USDCTokenContract.methods.approve(this.USDCExchangeContract.options.address, amount).send({
          from: fromAccount
        }).then(() => {
          method().then(resolve, reject);
        }, reject);
      });
    });
  }




  public getHXYPrices() {
    const getPrices = () => {
      return this.getHxyRate().then((hexRate: string) => {
        const rates: any = {};
        rates.HEX = new BigNumber(1).div(hexRate);

        return this.getHexPrice().then((hexPrice: string) => {
          rates.ETH = rates.HEX.times(new BigNumber(hexPrice).div(Math.pow(10, this.coinsDecimals.HEX)));
          return this.getUSDCPrice().then((usdcPrice: string) => {
            console.log(this.coinsDecimals.USDC);
            rates.USDC = rates.ETH.div(new BigNumber(usdcPrice).div(Math.pow(10, this.coinsDecimals.USDC)));
            const prices = [];
            for (const coin in rates) {
              prices.push({coin, rate: new BigNumber(1).div(rates[coin]).toString(10)});
            }
            return {prices, rates};
          });
        });
      });
    };
    if (!this.coinsDecimals) {
      return this.getCoinsDecimals().then(getPrices);
    }
    return getPrices();
  }


  public getUSDCPrice() {
    return this.uniswapUSDCContract.methods.getEthToTokenInputPrice((10 ** 18).toString()).call();
  }

  public getHexPrice() {
    return this.uniswapContract.methods.getEthToTokenInputPrice((10 ** 18).toString()).call();
  }

  public getHxyRate() {
    return this.HXYTokenContract.methods.getCurrentHxyRate().call();
  }


  public getRemainingRecordTime() {
    return this.DividendsContract.methods.getRecordTime().call().then((r: any) => {
      r = +r;
      const now = Math.round(new Date().getTime() / 1000);
      let leftSeconds = r % ContractConstants[this.network].SECONDS_OF_DAY - now % ContractConstants[this.network].SECONDS_OF_DAY;
      if (leftSeconds < 0) {
        leftSeconds += ContractConstants[this.network].SECONDS_OF_DAY;
      }

      return this.DividendsContract.methods.getUserLastClaim(
        this.DividendsContract.givenProvider.selectedAddress
      ).call().then((lastClaim) => {
        return {
          left: leftSeconds,
          latest: +lastClaim,
          next: now + leftSeconds,
          period: ContractConstants[this.network].SECONDS_OF_DAY,
          requireRequest: now > r
        };
      });
    });
  }

  public getAvailableDividends() {
    return this.DividendsContract.methods.getAvailableDividends(
      this.DividendsContract.givenProvider.selectedAddress
    ).call().then((result) => {
      return result.map((dividend, index) => {
        return {
          coin: dividendsKeys[index],
          value: dividend
        };
      });
    }).catch((err) => {
      return null;
    });
  }

  public getRound() {
    return this.HXYTokenContract.methods.getCurrentHxyRound().call();
  }


  public freezeHXY(amount) {
    const fromAccount = this.HEXTokenContract.givenProvider.selectedAddress;
    return this.HXYTokenContract.methods.freezeHxy(amount).send({
      from: fromAccount
    }).then((res) => {
      return this.checkTransaction(res);
    });
  }


  public getTotalInfo() {
    const promises = [
      this.HXYTokenContract.methods.cap().call().then((res) => {
        return {key: 'maxSupply', value: res};
      }),
      Promise.resolve({key: 'locked', value: '600000000000000'}),
      this.HXYTokenContract.methods.getTotalHxyMinted().call().then((res) => {
        return {key: 'totalSupply', value: res};
      }),
      this.HXYTokenContract.methods.getTotalFrozen().call().then((res) => {
        return {key: 'frozen', value: res};
      }),
      this.HXYTokenContract.methods.getCirculatingSupply().call().then((res) => {
        return {key: 'circulating', value: res};
      })
    ];
    return Promise.all(promises).then((res) => {
      const convertedResult = {};
      res.forEach((coinItem) => {
        convertedResult[coinItem.key] = coinItem.value;
      });
      return convertedResult;
    });
  }


  public getUserFreezings() {
    const account = this.HXYTokenContract.givenProvider.selectedAddress;

    return this.getBlock().then((block) => {
      const timeRange = new Date().getTime() - block.timestamp * 1000;

      return this.HXYTokenContract.methods.getUserFreezings(account).call().then((res) => {
        const allFreezingsPromises = res.map((freezId) => {
          return this.HXYTokenContract.methods.getFreezingById(freezId).call().then((freezing: any) => {
            freezing.id = freezId;
            freezing.endDateTime =
              (+freezing.startDate + freezing.freezeDays * ContractConstants[this.network].SECONDS_OF_DAY) * 1000 + timeRange;

            freezing.forCapEndDateTime = freezing.capitalized ?
              (+freezing.startDate + ContractConstants[this.network].SECONDS_OF_DAY) * 1000 + timeRange : freezing.endDateTime;

            return this.HXYTokenContract.methods.getCurrentInterestAmount(account, freezing.startDate).call().then((interest) => {
              freezing.interest = interest;
              return freezing;
            });
          });
        });
        return Promise.all(allFreezingsPromises).then((freezings) => {
          return freezings.filter((freezing: any) => {
            return +freezing.freezeAmount > 0;
          }).sort((a: any, b: any) => {
            return +a.endDateTime > +b.endDateTime ? 1 : -1;
          });
        });
      });
    });
  }

  public unfreeze(freezingDate) {
    return this.HXYTokenContract.methods.releaseFrozen(freezingDate).send({
      from: this.HXYTokenContract.givenProvider.selectedAddress
    }).then((res) => {
      return this.checkTransaction(res);
    });
  }

  public refreezeHxy(freezingDate) {
    return this.HXYTokenContract.methods.refreezeHxy(freezingDate).send({
      from: this.HXYTokenContract.givenProvider.selectedAddress
    }).then((res) => {
      return this.checkTransaction(res);
    });
  }

  public claimDividends() {
    return this.DividendsContract.methods.claimDividends().send({
      from: this.HXYTokenContract.givenProvider.selectedAddress
    }).then((res) => {
      return this.checkTransaction(res);
    });
  }

  private getBlock() {
    return this.web3Service.getBlock();
  }


  public getDividendsState() {
    const promises = [
      this.DividendsContract.methods.getTodayDividendsTotal().call().then((ret) => {
        return {
          key: 'todayDividendsTotal',
          val: ret
        };
      }),
      this.DividendsContract.methods.getPreviousDividendsTotal().call().then((ret) => {
        return {
          key: 'previousDividendsTotal',
          val: ret
        };
      }),
      this.DividendsContract.methods.getBeforePreviousDividendsTotal().call().then((ret) => {
        return {
          key: 'beforePreviousDividendsTotal',
          val: ret
        };
      }),
      this.DividendsContract.methods.getClaimedDividendsTotal().call().then((ret) => {
        return {
          key: 'claimedDividendsTotal',
          val: ret
        };
      })
    ];


    return Promise.all(promises).then((res) => {
      const convertedResult = {} as any;
      res.forEach((coinItem) => {
        convertedResult[coinItem.key] = coinItem.val.map((oneCoinValue, index) => {
          return {
            coin: dividendsKeys[index],
            value: new BigNumber(oneCoinValue)
          };
        });
      });
      convertedResult.claimedDividendsTotal.forEach((oneItem, index) => {
        oneItem.value = oneItem.value.plus(convertedResult.previousDividendsTotal[index].value.times(0.1));
      });
      return convertedResult;
    });

  }


  public recordDividendsHEX(amount) {
    const fromAccount = this.DividendsContract.givenProvider.selectedAddress;

    const sendTokens = () => {
      return this.DividendsContract.methods.recordDividendsHEX(amount).send({
        from: fromAccount
      }).then((res) => {
        return this.checkTransaction(res);
      });
    };

    return new Promise((resolve, reject) => {
      const method = sendTokens;
      this.checkHEXApproval(amount, this.DividendsContract.options.address).then(() => {
        method().then(resolve, reject);
      }, () => {
        this.HEXTokenContract.methods.approve(this.DividendsContract.options.address, amount).send({
          from: fromAccount
        }).then(() => {
          method().then(resolve, reject);
        }, reject);
      });
    });
  }

  public recordDividendsUSDC(amount) {
    const fromAccount = this.DividendsContract.givenProvider.selectedAddress;

    const sendTokens = () => {
      return this.DividendsContract.methods.recordDividendsUSDC(amount).send({
        from: fromAccount
      }).then((res) => {
        return this.checkTransaction(res);
      });
    };

    return new Promise((resolve, reject) => {
      const method = sendTokens;
      this.checkUSDCApproval(amount, this.DividendsContract.options.address).then(() => {
        method().then(resolve, reject);
      }, () => {
        this.USDCTokenContract.methods.approve(this.DividendsContract.options.address, amount).send({
          from: fromAccount
        }).then(() => {
          method().then(resolve, reject);
        }, reject);
      });
    });
  }

  public recordDividendsHXY(amount) {
    const fromAccount = this.DividendsContract.givenProvider.selectedAddress;

    const sendTokens = () => {
      return this.DividendsContract.methods.recordDividendsHXY(amount).send({
        from: fromAccount
      }).then((res) => {
        return this.checkTransaction(res);
      });
    };

    return new Promise((resolve, reject) => {
      const method = sendTokens;
      this.checkHXYApproval(amount, this.DividendsContract.options.address).then(() => {
        method().then(resolve, reject);
      }, () => {
        this.HXYTokenContract.methods.approve(this.DividendsContract.options.address, amount).send({
          from: fromAccount
        }).then(() => {
          method().then(resolve, reject);
        }, reject);
      });
    });
  }


  public recordDividendsETH(amount) {

    const txParams = {
      value: amount,
      from: this.DividendsContract.givenProvider.selectedAddress,
      to: this.DividendsContract.options.address
    };
    const exchangeTokens = () => {
      return this.DividendsContract.methods.recordDividendsETH().send(txParams).then((res) => {
        return this.checkTransaction(res);
      });
    };
    return exchangeTokens().then((res) => {
      return this.checkTransaction(res);
    });
  }


}






