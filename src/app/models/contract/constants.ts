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
      HXY: '0xad313adC99284E7F0E7a9D920aA1DA662c23764d',
      USDC: '0x05F0a875C881D90D3cC7464c9d914678572FDa1A',
      ETH_EXCHANGE: '0x117ED49E450EC7D3ac3fA32Cd6684a93D5BCeA45',
      HEX_EXCHANGE: '0x2f56Cd930F9b944e1830d6ed4F31a764Ab6686d4',
      USDC_EXCHANGE: '0x3C6853B4c9854e50A5092E999766bF740937e62D',
      DIVIDENDS: '0x526CFeA9B86425b8094e8f4150966494b090F9A6',
      UNISWAP: '0x5C40C8b461f43Ac559c5A335f93908FAe6f62Ab2',
      UNISWAP_USDC: '0xFcA3e24A438D3029E3f5e57489DA4fb05A9D7600'
    },
    mainnet: {
      HEX: '0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39',
      HXY: '0x673CA2D1cAC9492c0Db256CD9F92267AC3D69aF9',
      USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      ETH_EXCHANGE: '0x5C40C8b461f43Ac559c5A335f93908FAe6f62Ab2',
      HEX_EXCHANGE: '0x7855B1cF117801F9494eA42CCE9b193A6815AD7b',
      USDC_EXCHANGE: '0xD9dDFC102b0E31931D5A4d816EcaedAC3291A1a0',
      DIVIDENDS: '0x6b57b218D8E2D211Ffb6128696Ad9b1cB56b20f9',
      UNISWAP: '0xF8A6fD6E8127Cd24b31c29d3CA413Edc98a96b14',
      UNISWAP_USDC: '0x39359Cad8339Adf177C057FecC08F8Ac32e70F04'
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
            internalType: 'address',
            name: '_lockSupAddress',
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
        type: 'function'
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
        name: 'TEAM_ROLE',
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        name: 'getTeamAddress',
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
      },
      {
        inputs: [],
        name: 'getTeamSupply',
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
        name: 'getTeamLockPeriod',
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
        name: 'getLockedSupply',
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
        name: 'getLockedSupplyAddress',
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
        inputs: [],
        name: 'releaseFrozenTeam',
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
        name: 'releaseLockedSupply',
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
        name: '_getRemainingHxyInRound',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
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
            name: '_uniswapEth',
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
        name: 'getDividendsContractAddress',
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
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
            internalType: 'address payable',
            name: 'newDividendsContract',
            type: 'address'
          }
        ],
        name: 'setDividendsContract',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newHxyToken',
            type: 'address'
          }
        ],
        name: 'setHxyToken',
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
        stateMutability: 'payable',
        type: 'receive',
        payable: true
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'exchangeEth',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
        payable: true
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
        name: 'getDividendsContractAddress',
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
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
            internalType: 'address payable',
            name: 'newDividendsContract',
            type: 'address'
          }
        ],
        name: 'setDividendsContract',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newHxyToken',
            type: 'address'
          }
        ],
        name: 'setHxyToken',
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
        type: 'function',
        constant: true
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
            internalType: 'address',
            name: 'newHexToken',
            type: 'address'
          }
        ],
        name: 'setHexToken',
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
            name: '_uniswapEth',
            type: 'address'
          },
          {
            internalType: 'address',
            name: '_uniswapUsdc',
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
        name: 'getDividendsContractAddress',
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
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
            internalType: 'address payable',
            name: 'newDividendsContract',
            type: 'address'
          }
        ],
        name: 'setDividendsContract',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newHxyToken',
            type: 'address'
          }
        ],
        name: 'setHxyToken',
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
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
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'newUsdcToken',
            type: 'address'
          }
        ],
        name: 'setUsdcToken',
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
        type: 'receive',
        payable: true
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
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
        name: 'getAvailableDividends',
        outputs: [
          {
            internalType: 'uint256[4]',
            name: '',
            type: 'uint256[4]'
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
        name: 'getUserLastClaim',
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
        name: 'getAvailableDividendsTotal',
        outputs: [
          {
            internalType: 'uint256[4]',
            name: '',
            type: 'uint256[4]'
          }
        ],
        stateMutability: 'view',
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
      },
      {
        inputs: [],
        name: 'recordDividendsETH',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
        payable: true
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

