export const ContractConstants = {
  ADDRESSES: {
    kovan: {
      HEX: '0x19C165F2093f2CF5F26b9b2F3393271f63c745DF',
      HXY: '0x117c3d6cBd63f05cDF8D7Dee28C36Bd69aeCD06A',
      USDC: '0xA94ec33407235B9F96668Fe6F6E452091418F4F4',
      ETH_EXCHANGE: '0x7266EB2D7a74aDf9b189A69d5fF05450C88e60aA',
      HEX_EXCHANGE: '0x6b57b218D8E2D211Ffb6128696Ad9b1cB56b20f9',
      USDC_EXCHANGE: '0x7e55FfC5b65cdac16c5C073236e78b1561AD291c',
      DIVIDENDS: '0xd48a71a307CFBE1691D6032534E6a7F033c9E730',
      UNISWAP: '0x5C40C8b461f43Ac559c5A335f93908FAe6f62Ab2',
      UNISWAP_USDC: '0xFcA3e24A438D3029E3f5e57489DA4fb05A9D7600'
    },
    mainnet: {}
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
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
        type: 'function'
      }
    ],
    HEX: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'initialSupply',
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
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ],
    USDC: [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'account',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'initialSupply',
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
        name: 'mint',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ],
    HXY: [
      {
        inputs: [
          {
            internalType: 'address payable',
            name: '_teamAddress',
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
          },
          {
            internalType: 'address',
            name: '_migratedSupplyAddress',
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
        inputs: [
          {
            internalType: 'address',
            name: 'newWhitelistAddress',
            type: 'address'
          }
        ],
        name: 'setWhitelistAddress',
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
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
        type: 'function',
        constant: true
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
        name: 'mintFromDapp',
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
        name: 'mintFromReferral',
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
        inputs: [],
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
        inputs: [
          {
            internalType: 'address',
            name: 'newWhitelistAddress',
            type: 'address'
          }
        ],
        name: 'setWhitelistAddress',
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
      }
    ],
    HEX_EXCHANGE: [
      {
        inputs: [
          {
            internalType: 'contract IERC20',
            name: '_hexToken',
            type: 'address'
          },
          {
            internalType: 'contract HXY',
            name: '_hxyToken',
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
        inputs: [
          {
            internalType: 'address',
            name: 'newWhitelistAddress',
            type: 'address'
          }
        ],
        name: 'setWhitelistAddress',
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
            internalType: 'contract IERC20',
            name: '_usdcToken',
            type: 'address'
          },
          {
            internalType: 'contract HXY',
            name: '_hxyToken',
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
        inputs: [
          {
            internalType: 'address',
            name: 'newWhitelistAddress',
            type: 'address'
          }
        ],
        name: 'setWhitelistAddress',
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
          },
          {
            internalType: 'address payable',
            name: '_fourthTeamAddress',
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
        inputs: [
          {
            internalType: 'address',
            name: 'newWhitelistAddress',
            type: 'address'
          }
        ],
        name: 'setWhitelistAddress',
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
            name: 'newPercentage',
            type: 'uint256'
          }
        ],
        name: 'setDividendsPercent',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'recordTime',
            type: 'uint256'
          }
        ],
        name: 'setInitialRecordTime',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
      }
    ]
  }
};

