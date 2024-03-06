export type SolanaWhitelistBullzi = {
  "version": "0.1.0",
  "name": "solana_whitelist_bullzi",
  "instructions": [
    {
      "name": "initWhitelist",
      "docs": [
        "* Initialize a whitelist with the given name, associated with the authority of this transaction."
      ],
      "accounts": [
        {
          "name": "whitelist",
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
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "deleteWhitelist",
      "docs": [
        "* Delete a whitelist create with `init_whitelist` with the given name and bump,\n     * associated with the authority of this transaction. The remaining lamports are sent to the\n     * authority of this transaction."
      ],
      "accounts": [
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "checkWhitelist",
      "docs": [
        "* Check if the given whitelist exists (has been initalized)."
      ],
      "accounts": [
        {
          "name": "whitelist",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "owner",
          "type": "publicKey"
        },
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "addToWhitelist",
      "docs": [
        "* Add the account `account_to_add` with the specified bump to the `whitelist` account."
      ],
      "accounts": [
        {
          "name": "entry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": false,
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
          "name": "accountToAdd",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "removeFromWhitelist",
      "docs": [
        "* Remove the account `account_to_delete` with the specified bump from the `whitelist` account.\n     * Remaining lamports are sent to the authority of this transaction."
      ],
      "accounts": [
        {
          "name": "entry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "accountToDelete",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "checkWhitelisted",
      "docs": [
        "* Check if the account `account_to_check` is whitelisted in the given `whitelist` account."
      ],
      "accounts": [
        {
          "name": "entry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "accountToCheck",
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
          },
          {
            "name": "name",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "whitelistEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "parent",
            "type": "publicKey"
          },
          {
            "name": "whitelisted",
            "type": "publicKey"
          }
        ]
      }
    }
  ]
};

export const IDL: SolanaWhitelistBullzi = {
  "version": "0.1.0",
  "name": "solana_whitelist_bullzi",
  "instructions": [
    {
      "name": "initWhitelist",
      "docs": [
        "* Initialize a whitelist with the given name, associated with the authority of this transaction."
      ],
      "accounts": [
        {
          "name": "whitelist",
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
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "deleteWhitelist",
      "docs": [
        "* Delete a whitelist create with `init_whitelist` with the given name and bump,\n     * associated with the authority of this transaction. The remaining lamports are sent to the\n     * authority of this transaction."
      ],
      "accounts": [
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "checkWhitelist",
      "docs": [
        "* Check if the given whitelist exists (has been initalized)."
      ],
      "accounts": [
        {
          "name": "whitelist",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "owner",
          "type": "publicKey"
        },
        {
          "name": "name",
          "type": "string"
        }
      ]
    },
    {
      "name": "addToWhitelist",
      "docs": [
        "* Add the account `account_to_add` with the specified bump to the `whitelist` account."
      ],
      "accounts": [
        {
          "name": "entry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": false,
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
          "name": "accountToAdd",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "removeFromWhitelist",
      "docs": [
        "* Remove the account `account_to_delete` with the specified bump from the `whitelist` account.\n     * Remaining lamports are sent to the authority of this transaction."
      ],
      "accounts": [
        {
          "name": "entry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "accountToDelete",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "checkWhitelisted",
      "docs": [
        "* Check if the account `account_to_check` is whitelisted in the given `whitelist` account."
      ],
      "accounts": [
        {
          "name": "entry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "accountToCheck",
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
          },
          {
            "name": "name",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "whitelistEntry",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "parent",
            "type": "publicKey"
          },
          {
            "name": "whitelisted",
            "type": "publicKey"
          }
        ]
      }
    }
  ]
};
