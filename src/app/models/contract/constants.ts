export const ContractConstants = {
  kovan: {
    SECONDS_OF_DAY: 300
  },
  mainnet: {
    SECONDS_OF_DAY: 86400
  },
  ADDRESSES: {
    kovan: {
      HEX: '0x19C165F2093f2CF5F26b9b2F3393271f63c745DF',
      HXY: '0xBB00dDEaEA05347d88B2851B319f2a2046C1c24e',
      USDC: '0x05F0a875C881D90D3cC7464c9d914678572FDa1A',
      ETH_EXCHANGE: '0xb726087788CBf2C6D705DE66Bd298Ce0Ec6D0F33',
      HEX_EXCHANGE: '0x1dA4fF418Ef57A45981d0f651d273F6b19Be4D35',
      USDC_EXCHANGE: '0x643FD2F497C76471a464531D1D9ddc553dC23E86',
      DIVIDENDS: '0x72c50097fD9C2978B71C72C6BcBc1484F438380B',
      UNISWAP: '0xa602D95f7DCF54fb684De992028A177eE4b445c5',
      UNISWAP_USDC: '0x4380B1644BBAAb540f661B61e0dcbC2983089f9D'
    },
    mainnet: {
      HEX: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
      HXY: '0x0FFF95D5ab18c763c42C209F137C47354af104a8',
      USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      ETH_EXCHANGE: '0xadDFba84E2dF72DD80586891bA2702ba7e9208AD',
      HEX_EXCHANGE: '0xba0d1A0cfB68fd6e1bB3299EADdDA111b4e15d1A',
      USDC_EXCHANGE: '0x58FB06D2A2BFE9ceEd68A7D8fa051D18335F8aA0',
      DIVIDENDS: '0xc3a6842458FA68Ce01AE9fe68d206755dBEd3Dc0',
      UNISWAP: '0xe6379C6CDdF7aa2254eE1f70Ef44991bFAbD28E9',
      UNISWAP_USDC: '0xe68D8D9bFB289a732ed4E202ba042Ddfbd689e7C'
    }
  },
  ABIs: {
    UNISWAP: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'exchangeAddress',
            type: 'address'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        inputs: [],
        name: 'exchange',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'ethSold',
            type: 'uint256'
          }
        ],
        name: 'getEthToTokenInputPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokensBought',
            type: 'uint256'
          }
        ],
        name: 'getEthToTokenOutputPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokensSold',
            type: 'uint256'
          }
        ],
        name: 'getTokenToEthInputPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'ethBought',
            type: 'uint256'
          }
        ],
        name: 'getTokenToEthOutputPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      }
    ],
    UNISWAP_USDC: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'exchangeAddress',
            type: 'address'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        inputs: [],
        name: 'exchange',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'ethSold',
            type: 'uint256'
          }
        ],
        name: 'getEthToTokenInputPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokensBought',
            type: 'uint256'
          }
        ],
        name: 'getEthToTokenOutputPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'tokensSold',
            type: 'uint256'
          }
        ],
        name: 'getTokenToEthInputPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'ethBought',
            type: 'uint256'
          }
        ],
        name: 'getTokenToEthOutputPrice',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      }
    ],
    HEX: [
        {
          constant: true,
          inputs: [],
          name: 'name',
          outputs: [
            {
              name: '',
              type: 'string'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: false,
          inputs: [
            {
              name: '_spender',
              type: 'address'
            },
            {
              name: '_value',
              type: 'uint256'
            }
          ],
          name: 'approve',
          outputs: [
            {
              name: '',
              type: 'bool'
            }
          ],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: true,
          inputs: [],
          name: 'totalSupply',
          outputs: [
            {
              name: '',
              type: 'uint256'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: false,
          inputs: [
            {
              name: '_from',
              type: 'address'
            },
            {
              name: '_to',
              type: 'address'
            },
            {
              name: '_value',
              type: 'uint256'
            }
          ],
          name: 'transferFrom',
          outputs: [
            {
              name: '',
              type: 'bool'
            }
          ],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: true,
          inputs: [],
          name: 'decimals',
          outputs: [
            {
              name: '',
              type: 'uint8'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: true,
          inputs: [
            {
              name: '_owner',
              type: 'address'
            }
          ],
          name: 'balanceOf',
          outputs: [
            {
              name: 'balance',
              type: 'uint256'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: true,
          inputs: [],
          name: 'symbol',
          outputs: [
            {
              name: '',
              type: 'string'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: false,
          inputs: [
            {
              name: '_to',
              type: 'address'
            },
            {
              name: '_value',
              type: 'uint256'
            }
          ],
          name: 'transfer',
          outputs: [
            {
              name: '',
              type: 'bool'
            }
          ],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: true,
          inputs: [
            {
              name: '_owner',
              type: 'address'
            },
            {
              name: '_spender',
              type: 'address'
            }
          ],
          name: 'allowance',
          outputs: [
            {
              name: '',
              type: 'uint256'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        },
        {
          payable: true,
          stateMutability: 'payable',
          type: 'fallback'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: 'owner',
              type: 'address'
            },
            {
              indexed: true,
              name: 'spender',
              type: 'address'
            },
            {
              indexed: false,
              name: 'value',
              type: 'uint256'
            }
          ],
          name: 'Approval',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: 'from',
              type: 'address'
            },
            {
              indexed: true,
              name: 'to',
              type: 'address'
            },
            {
              indexed: false,
              name: 'value',
              type: 'uint256'
            }
          ],
          name: 'Transfer',
          type: 'event'
        }
      ],
    USDC: [
        {
          constant: true,
          inputs: [],
          name: 'name',
          outputs: [
            {
              name: '',
              type: 'string'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: false,
          inputs: [
            {
              name: '_spender',
              type: 'address'
            },
            {
              name: '_value',
              type: 'uint256'
            }
          ],
          name: 'approve',
          outputs: [
            {
              name: '',
              type: 'bool'
            }
          ],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: true,
          inputs: [],
          name: 'totalSupply',
          outputs: [
            {
              name: '',
              type: 'uint256'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: false,
          inputs: [
            {
              name: '_from',
              type: 'address'
            },
            {
              name: '_to',
              type: 'address'
            },
            {
              name: '_value',
              type: 'uint256'
            }
          ],
          name: 'transferFrom',
          outputs: [
            {
              name: '',
              type: 'bool'
            }
          ],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: true,
          inputs: [],
          name: 'decimals',
          outputs: [
            {
              name: '',
              type: 'uint8'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: true,
          inputs: [
            {
              name: '_owner',
              type: 'address'
            }
          ],
          name: 'balanceOf',
          outputs: [
            {
              name: 'balance',
              type: 'uint256'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: true,
          inputs: [],
          name: 'symbol',
          outputs: [
            {
              name: '',
              type: 'string'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        },
        {
          constant: false,
          inputs: [
            {
              name: '_to',
              type: 'address'
            },
            {
              name: '_value',
              type: 'uint256'
            }
          ],
          name: 'transfer',
          outputs: [
            {
              name: '',
              type: 'bool'
            }
          ],
          payable: false,
          stateMutability: 'nonpayable',
          type: 'function'
        },
        {
          constant: true,
          inputs: [
            {
              name: '_owner',
              type: 'address'
            },
            {
              name: '_spender',
              type: 'address'
            }
          ],
          name: 'allowance',
          outputs: [
            {
              name: '',
              type: 'uint256'
            }
          ],
          payable: false,
          stateMutability: 'view',
          type: 'function'
        },
        {
          payable: true,
          stateMutability: 'payable',
          type: 'fallback'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: 'owner',
              type: 'address'
            },
            {
              indexed: true,
              name: 'spender',
              type: 'address'
            },
            {
              indexed: false,
              name: 'value',
              type: 'uint256'
            }
          ],
          name: 'Approval',
          type: 'event'
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: 'from',
              type: 'address'
            },
            {
              indexed: true,
              name: 'to',
              type: 'address'
            },
            {
              indexed: false,
              name: 'value',
              type: 'uint256'
            }
          ],
          name: 'Transfer',
          type: 'event'
        }
      ],
    HXY: [
      {
        inputs: [
          {
            internalType: 'address',
            name: '_whitelistAddress',
            type: 'address'
          },
          {
            internalType: 'address',
            name: '_liqSupAddress',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: '_liqSupAmount',
            type: 'uint256'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'spender',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        name: 'Approval',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'release',
            type: 'uint256'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'Freezed',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'Released',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address'
          }
        ],
        name: 'RoleGranted',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address'
          }
        ],
        name: 'RoleRevoked',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address'
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: 'value',
            type: 'uint256'
          }
        ],
        name: 'Transfer',
        type: 'event'
      },
      {
        inputs: [],
        name: 'DEFAULT_ADMIN_ROLE',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'DEPLOYER_ROLE',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'MINIMAL_FREEZE_PERIOD',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'SECONDS_IN_DAY',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'TEAM_ROLE',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'actualBalanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'owner',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'spender',
            type: 'address'
          }
        ],
        name: 'allowance',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'approve',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'balanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'cap',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'decimals',
        outputs: [
          {
            internalType: 'uint8',
            name: '',
            type: 'uint8'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'subtractedValue',
            type: 'uint256'
          }
        ],
        name: 'decreaseAllowance',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'freezingBalanceOf',
        outputs: [
          {
            internalType: 'uint256',
            name: 'balance',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'freezingId',
            type: 'bytes32'
          }
        ],
        name: 'getFreezingById',
        outputs: [
          {
            internalType: 'address',
            name: 'user',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'startDate',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'freezeDays',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'freezeAmount',
            type: 'uint256'
          },
          {
            internalType: 'bool',
            name: 'capitalized',
            type: 'bool'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          }
        ],
        name: 'getRoleAdmin',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256'
          }
        ],
        name: 'getRoleMember',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          }
        ],
        name: 'getRoleMemberCount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'getTeamAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_user',
            type: 'address'
          }
        ],
        name: 'getUserFreezings',
        outputs: [
          {
            internalType: 'bytes32[]',
            name: 'userFreezings',
            type: 'bytes32[]'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'getWhitelistAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'grantRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'hasRole',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'spender',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'addedValue',
            type: 'uint256'
          }
        ],
        name: 'increaseAllowance',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'latestFreezeTimeOf',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'name',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'renounceRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'revokeRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [],
        name: 'symbol',
        outputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'totalSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'transfer',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'sender',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'recipient',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'transferFrom',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getRemainingHxyInRound',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'getTotalHxyInRound',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'getTotalHxyMinted',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'getCirculatingSupply',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'getCurrentHxyRound',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'getCurrentHxyRate',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'getTotalFrozen',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'getTotalPayedInterest',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_addr',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: '_freezeStartDate',
            type: 'uint256'
          }
        ],
        name: 'getCurrentInterestAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'mintFromExchange',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'mintFromDappOrReferral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'lockAmount',
            type: 'uint256'
          }
        ],
        name: 'freezeHxy',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'startDate',
            type: 'uint256'
          }
        ],
        name: 'refreezeHxy',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_startDate',
            type: 'uint256'
          }
        ],
        name: 'releaseFrozen',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address[6]',
            name: '_lockSupAddresses',
            type: 'address[6]'
          },
          {
            internalType: 'uint256[10]',
            name: '_unlockDates',
            type: 'uint256[10]'
          }
        ],
        name: 'premintLocked',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_round',
            type: 'uint256'
          }
        ],
        name: '_getTotalHxyInRound',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_round',
            type: 'uint256'
          }
        ],
        name: '_getRemainingHxyInRound',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
      }
    ],
    ETH_EXCHANGE: [
      {
        inputs: [
          {
            internalType: 'contract HXY',
            name: '_hxyToken',
            type: 'address'
          },
          {
            internalType: 'address payable',
            name: '_dividendsContract',
            type: 'address'
          },
          {
            internalType: 'address',
            name: '_referralSender',
            type: 'address'
          },
          {
            internalType: 'address',
            name: '_uniswapEth',
            type: 'address'
          },
          {
            internalType: 'address',
            name: '_adminAddress',
            type: 'address'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address'
          }
        ],
        name: 'RoleGranted',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address'
          }
        ],
        name: 'RoleRevoked',
        type: 'event'
      },
      {
        inputs: [],
        name: 'DEFAULT_ADMIN_ROLE',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'DEPLOYER_ROLE',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'SECONDS_IN_DAY',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getDividendsContractAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getHxyTokenAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getMaxAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getMinAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          }
        ],
        name: 'getRoleAdmin',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256'
          }
        ],
        name: 'getRoleMember',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          }
        ],
        name: 'getRoleMemberCount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getWhitelistAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'grantRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'hasRole',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'renounceRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'revokeRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'newAmount',
            type: 'uint256'
          }
        ],
        name: 'setMaxAmount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'newAmount',
            type: 'uint256'
          }
        ],
        name: 'setMinAmount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_referralSender',
            type: 'address'
          }
        ],
        name: 'setReferralSenderContract',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        stateMutability: 'payable',
        type: 'receive'
      },
      {
        inputs: [],
        name: 'getUniswapGetterInstance',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newUniswapGetterInstance',
            type: 'address'
          }
        ],
        name: 'setUniswapGetterInstance',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256'
          }
        ],
        name: 'getConvertedAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'exchangeEth',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'referralAddress',
            type: 'address'
          }
        ],
        name: 'exchangeEthWithReferral',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
      }
    ],
    HEX_EXCHANGE: [
      {
        inputs: [
          {
            internalType: 'contract HXY',
            name: '_hxyToken',
            type: 'address'
          },
          {
            internalType: 'contract IERC20',
            name: '_hexToken',
            type: 'address'
          },
          {
            internalType: 'address payable',
            name: '_dividendsContract',
            type: 'address'
          },
          {
            internalType: 'address',
            name: '_referralSender',
            type: 'address'
          },
          {
            internalType: 'address',
            name: '_adminAddress',
            type: 'address'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address'
          }
        ],
        name: 'RoleGranted',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address'
          }
        ],
        name: 'RoleRevoked',
        type: 'event'
      },
      {
        inputs: [],
        name: 'DEFAULT_ADMIN_ROLE',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'DEPLOYER_ROLE',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'SECONDS_IN_DAY',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getDividendsContractAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getHxyTokenAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getMaxAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getMinAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          }
        ],
        name: 'getRoleAdmin',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256'
          }
        ],
        name: 'getRoleMember',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          }
        ],
        name: 'getRoleMemberCount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getWhitelistAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'grantRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'hasRole',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'renounceRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'revokeRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'newAmount',
            type: 'uint256'
          }
        ],
        name: 'setMaxAmount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'newAmount',
            type: 'uint256'
          }
        ],
        name: 'setMinAmount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_referralSender',
            type: 'address'
          }
        ],
        name: 'setReferralSenderContract',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getHexTokenAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'exchangeHex',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'referralAddress',
            type: 'address'
          }
        ],
        name: 'exchangeHexWithReferral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ],
    USDC_EXCHANGE: [
      {
        inputs: [
          {
            internalType: 'contract HXY',
            name: '_hxyToken',
            type: 'address'
          },
          {
            internalType: 'contract IERC20',
            name: '_usdcToken',
            type: 'address'
          },
          {
            internalType: 'address payable',
            name: '_dividendsContract',
            type: 'address'
          },
          {
            internalType: 'address',
            name: '_referralSender',
            type: 'address'
          },
          {
            internalType: 'address',
            name: '_uniswapEth',
            type: 'address'
          },
          {
            internalType: 'address',
            name: '_uniswapUsdc',
            type: 'address'
          },
          {
            internalType: 'address',
            name: '_adminAddress',
            type: 'address'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address'
          }
        ],
        name: 'RoleGranted',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address'
          }
        ],
        name: 'RoleRevoked',
        type: 'event'
      },
      {
        inputs: [],
        name: 'DEFAULT_ADMIN_ROLE',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'DEPLOYER_ROLE',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'SECONDS_IN_DAY',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getDividendsContractAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getHxyTokenAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getMaxAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getMinAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          }
        ],
        name: 'getRoleAdmin',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256'
          }
        ],
        name: 'getRoleMember',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          }
        ],
        name: 'getRoleMemberCount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getWhitelistAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'grantRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'hasRole',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'renounceRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'revokeRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'newAmount',
            type: 'uint256'
          }
        ],
        name: 'setMaxAmount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'newAmount',
            type: 'uint256'
          }
        ],
        name: 'setMinAmount',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_referralSender',
            type: 'address'
          }
        ],
        name: 'setReferralSenderContract',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getUniswapGetterInstanceEth',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getUniswapGetterInstanceUsdc',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256'
          }
        ],
        name: 'getConvertedAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getUsdcTokenAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'exchangeUsdc',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          },
          {
            internalType: 'address',
            name: 'referralAddress',
            type: 'address'
          }
        ],
        name: 'exchangeUsdcWithReferral',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_uniswapGetterInstanceEth',
            type: 'address'
          }
        ],
        name: 'setUniswapGetterInstanceEth',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: '_uniswapGetterInstanceUsdc',
            type: 'address'
          }
        ],
        name: 'setUniswapGetterInstanceUsdc',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ],
    DIVIDENDS: [
      {
        inputs: [
          {
            internalType: 'contract HXY',
            name: '_hxyToken',
            type: 'address'
          },
          {
            internalType: 'contract IERC20',
            name: '_hexToken',
            type: 'address'
          },
          {
            internalType: 'contract IERC20',
            name: '_usdcToken',
            type: 'address'
          },
          {
            internalType: 'address payable',
            name: '_teamAddress',
            type: 'address'
          },
          {
            internalType: 'address payable',
            name: '_secondTeamAddress',
            type: 'address'
          },
          {
            internalType: 'address payable',
            name: '_thirdTeamAddress',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: '_initialRecordTime',
            type: 'uint256'
          }
        ],
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address'
          }
        ],
        name: 'RoleGranted',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'sender',
            type: 'address'
          }
        ],
        name: 'RoleRevoked',
        type: 'event'
      },
      {
        inputs: [],
        name: 'DEFAULT_ADMIN_ROLE',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'DEPLOYER_ROLE',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'SECONDS_IN_DAY',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          }
        ],
        name: 'getRoleAdmin',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256'
          }
        ],
        name: 'getRoleMember',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          }
        ],
        name: 'getRoleMemberCount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getWhitelistAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'grantRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'hasRole',
        outputs: [
          {
            internalType: 'bool',
            name: '',
            type: 'bool'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'renounceRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'role',
            type: 'bytes32'
          },
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'revokeRole',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        stateMutability: 'payable',
        type: 'receive'
      },
      {
        inputs: [],
        name: 'getTodayDividendsTotal',
        outputs: [
          {
            internalType: 'uint256[4]',
            name: '',
            type: 'uint256[4]'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getBeforePreviousDividendsTotal',
        outputs: [
          {
            internalType: 'uint256[4]',
            name: '',
            type: 'uint256[4]'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getPreviousDividendsTotal',
        outputs: [
          {
            internalType: 'uint256[4]',
            name: '',
            type: 'uint256[4]'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'getAvailableDividends',
        outputs: [
          {
            internalType: 'uint256[4]',
            name: '',
            type: 'uint256[4]'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          }
        ],
        name: 'getUserLastClaim',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getAvailableDividendsTotal',
        outputs: [
          {
            internalType: 'uint256[4]',
            name: '',
            type: 'uint256[4]'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getClaimedDividendsTotal',
        outputs: [
          {
            internalType: 'uint256[4]',
            name: '',
            type: 'uint256[4]'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getRecordTime',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getDividendsPercentage',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getHexTokenAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getHxyTokenAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'getUsdcTokenAddress',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [],
        name: 'recordDividendsETH',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'recordDividendsHEX',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'recordDividendsHXY',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256'
          }
        ],
        name: 'recordDividendsUSDC',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [],
        name: 'claimDividends',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ]
  }
};

