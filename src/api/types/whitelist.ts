export type Whitelist = {
  "version": "0.1.0",
  "name": "whitelist",
  "instructions": [
    {
      "name": "newWhitelist",
      "accounts": [
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addAddress",
      "accounts": [
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pdaId",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "wallet",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "removeAddress",
      "accounts": [
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pdaId",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "wallet",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "checkAddress",
      "accounts": [
        {
          "name": "whitelist",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pdaId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "wallet",
          "type": "publicKey"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "whitelist",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "wallet",
      "type": {
        "kind": "struct",
        "fields": []
      }
    }
  ]
};

export const IDL: Whitelist = {
  "version": "0.1.0",
  "name": "whitelist",
  "instructions": [
    {
      "name": "newWhitelist",
      "accounts": [
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addAddress",
      "accounts": [
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pdaId",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "wallet",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "removeAddress",
      "accounts": [
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pdaId",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "wallet",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "checkAddress",
      "accounts": [
        {
          "name": "whitelist",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pdaId",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "wallet",
          "type": "publicKey"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "whitelist",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "wallet",
      "type": {
        "kind": "struct",
        "fields": []
      }
    }
  ]
};