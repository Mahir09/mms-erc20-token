const abi = {
  token: {
    contractName: "MmsToken",
    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_initialSupply",
            type: "uint256",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [],
        name: "standard",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_value",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_value",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_value",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    metadata:
      '{"compiler":{"version":"0.8.15+commit.e14f2714"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"uint256","name":"_initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"standard","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/contracts/MmsToken.sol":"MmsToken"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/MmsToken.sol":{"keccak256":"0x6992a072cc4b6d3c84d5ad21cf6a749f5af60799cfc1c2bd1a9ddbf7a3beb891","license":"MiT","urls":["bzz-raw://9dec554292180911fc6c1acbcac1499814e0000def78c10a39cbea461b58429f","dweb:/ipfs/QmUmCT3uE96MRy8cGhoFrRoywt37jH4ggPj7aaSY1FiAB9"]}},"version":1}',
    bytecode:
      "0x60806040526040518060400160405280600e81526020017f4b727574696b5f31394954303335000000000000000000000000000000000000815250600190816200004a9190620003d8565b506040518060400160405280601381526020017f4b727574696b5f313949543033352076312e300000000000000000000000000081525060029081620000919190620003d8565b506040518060400160405280600481526020017f4b4733350000000000000000000000000000000000000000000000000000000081525060039081620000d89190620003d8565b50348015620000e657600080fd5b50604051620012083803806200120883398181016040528101906200010c9190620004f5565b8060008190555080600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505062000527565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620001e057607f821691505b602082108103620001f657620001f562000198565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620002607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000221565b6200026c868362000221565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002b9620002b3620002ad8462000284565b6200028e565b62000284565b9050919050565b6000819050919050565b620002d58362000298565b620002ed620002e482620002c0565b8484546200022e565b825550505050565b600090565b62000304620002f5565b62000311818484620002ca565b505050565b5b8181101562000339576200032d600082620002fa565b60018101905062000317565b5050565b601f82111562000388576200035281620001fc565b6200035d8462000211565b810160208510156200036d578190505b620003856200037c8562000211565b83018262000316565b50505b505050565b600082821c905092915050565b6000620003ad600019846008026200038d565b1980831691505092915050565b6000620003c883836200039a565b9150826002028217905092915050565b620003e3826200015e565b67ffffffffffffffff811115620003ff57620003fe62000169565b5b6200040b8254620001c7565b620004188282856200033d565b600060209050601f8311600181146200045057600084156200043b578287015190505b620004478582620003ba565b865550620004b7565b601f1984166200046086620001fc565b60005b828110156200048a5784890151825560018201915060208501945060208101905062000463565b86831015620004aa5784890151620004a6601f8916826200039a565b8355505b6001600288020188555050505b505050505050565b600080fd5b620004cf8162000284565b8114620004db57600080fd5b50565b600081519050620004ef81620004c4565b92915050565b6000602082840312156200050e576200050d620004bf565b5b60006200051e84828501620004de565b91505092915050565b610cd180620005376000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80635a3b7e42116100665780635a3b7e421461013457806370a082311461015257806395d89b4114610182578063a9059cbb146101a0578063dd62ed3e146101d057610093565b806306fdde0314610098578063095ea7b3146100b657806318160ddd146100e657806323b872dd14610104575b600080fd5b6100a0610200565b6040516100ad9190610967565b60405180910390f35b6100d060048036038101906100cb9190610a22565b61028e565b6040516100dd9190610a7d565b60405180910390f35b6100ee610380565b6040516100fb9190610aa7565b60405180910390f35b61011e60048036038101906101199190610ac2565b610386565b60405161012b9190610a7d565b60405180910390f35b61013c61060c565b6040516101499190610967565b60405180910390f35b61016c60048036038101906101679190610b15565b61069a565b6040516101799190610aa7565b60405180910390f35b61018a6106b2565b6040516101979190610967565b60405180910390f35b6101ba60048036038101906101b59190610a22565b610740565b6040516101c79190610a7d565b60405180910390f35b6101ea60048036038101906101e59190610b42565b6108a9565b6040516101f79190610aa7565b60405180910390f35b6001805461020d90610bb1565b80601f016020809104026020016040519081016040528092919081815260200182805461023990610bb1565b80156102865780601f1061025b57610100808354040283529160200191610286565b820191906000526020600020905b81548152906001019060200180831161026957829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161036e9190610aa7565b60405180910390a36001905092915050565b60005481565b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156103d457600080fd5b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111561045d57600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104ac9190610c11565b9250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105029190610c45565b9250508190555081600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105959190610c11565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516105f99190610aa7565b60405180910390a3600190509392505050565b6002805461061990610bb1565b80601f016020809104026020016040519081016040528092919081815260200182805461064590610bb1565b80156106925780601f1061066757610100808354040283529160200191610692565b820191906000526020600020905b81548152906001019060200180831161067557829003601f168201915b505050505081565b60046020528060005260406000206000915090505481565b600380546106bf90610bb1565b80601f01602080910402602001604051908101604052809291908181526020018280546106eb90610bb1565b80156107385780601f1061070d57610100808354040283529160200191610738565b820191906000526020600020905b81548152906001019060200180831161071b57829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561078e57600080fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107dd9190610c11565b9250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108339190610c45565b925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108979190610aa7565b60405180910390a36001905092915050565b6005602052816000526040600020602052806000526040600020600091509150505481565b600081519050919050565b600082825260208201905092915050565b60005b838110156109085780820151818401526020810190506108ed565b83811115610917576000848401525b50505050565b6000601f19601f8301169050919050565b6000610939826108ce565b61094381856108d9565b93506109538185602086016108ea565b61095c8161091d565b840191505092915050565b60006020820190508181036000830152610981818461092e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109b98261098e565b9050919050565b6109c9816109ae565b81146109d457600080fd5b50565b6000813590506109e6816109c0565b92915050565b6000819050919050565b6109ff816109ec565b8114610a0a57600080fd5b50565b600081359050610a1c816109f6565b92915050565b60008060408385031215610a3957610a38610989565b5b6000610a47858286016109d7565b9250506020610a5885828601610a0d565b9150509250929050565b60008115159050919050565b610a7781610a62565b82525050565b6000602082019050610a926000830184610a6e565b92915050565b610aa1816109ec565b82525050565b6000602082019050610abc6000830184610a98565b92915050565b600080600060608486031215610adb57610ada610989565b5b6000610ae9868287016109d7565b9350506020610afa868287016109d7565b9250506040610b0b86828701610a0d565b9150509250925092565b600060208284031215610b2b57610b2a610989565b5b6000610b39848285016109d7565b91505092915050565b60008060408385031215610b5957610b58610989565b5b6000610b67858286016109d7565b9250506020610b78858286016109d7565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610bc957607f821691505b602082108103610bdc57610bdb610b82565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c1c826109ec565b9150610c27836109ec565b925082821015610c3a57610c39610be2565b5b828203905092915050565b6000610c50826109ec565b9150610c5b836109ec565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610c9057610c8f610be2565b5b82820190509291505056fea26469706673582212209dd349d8ac996f9a627874a3840fedc682d8304956d01181c8c8205fbe9b412664736f6c634300080f0033",
    deployedBytecode:
      "0x608060405234801561001057600080fd5b50600436106100935760003560e01c80635a3b7e42116100665780635a3b7e421461013457806370a082311461015257806395d89b4114610182578063a9059cbb146101a0578063dd62ed3e146101d057610093565b806306fdde0314610098578063095ea7b3146100b657806318160ddd146100e657806323b872dd14610104575b600080fd5b6100a0610200565b6040516100ad9190610967565b60405180910390f35b6100d060048036038101906100cb9190610a22565b61028e565b6040516100dd9190610a7d565b60405180910390f35b6100ee610380565b6040516100fb9190610aa7565b60405180910390f35b61011e60048036038101906101199190610ac2565b610386565b60405161012b9190610a7d565b60405180910390f35b61013c61060c565b6040516101499190610967565b60405180910390f35b61016c60048036038101906101679190610b15565b61069a565b6040516101799190610aa7565b60405180910390f35b61018a6106b2565b6040516101979190610967565b60405180910390f35b6101ba60048036038101906101b59190610a22565b610740565b6040516101c79190610a7d565b60405180910390f35b6101ea60048036038101906101e59190610b42565b6108a9565b6040516101f79190610aa7565b60405180910390f35b6001805461020d90610bb1565b80601f016020809104026020016040519081016040528092919081815260200182805461023990610bb1565b80156102865780601f1061025b57610100808354040283529160200191610286565b820191906000526020600020905b81548152906001019060200180831161026957829003601f168201915b505050505081565b600081600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161036e9190610aa7565b60405180910390a36001905092915050565b60005481565b6000600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156103d457600080fd5b600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111561045d57600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546104ac9190610c11565b9250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105029190610c45565b9250508190555081600560008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105959190610c11565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516105f99190610aa7565b60405180910390a3600190509392505050565b6002805461061990610bb1565b80601f016020809104026020016040519081016040528092919081815260200182805461064590610bb1565b80156106925780601f1061066757610100808354040283529160200191610692565b820191906000526020600020905b81548152906001019060200180831161067557829003601f168201915b505050505081565b60046020528060005260406000206000915090505481565b600380546106bf90610bb1565b80601f01602080910402602001604051908101604052809291908181526020018280546106eb90610bb1565b80156107385780601f1061070d57610100808354040283529160200191610738565b820191906000526020600020905b81548152906001019060200180831161071b57829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561078e57600080fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546107dd9190610c11565b9250508190555081600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108339190610c45565b925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108979190610aa7565b60405180910390a36001905092915050565b6005602052816000526040600020602052806000526040600020600091509150505481565b600081519050919050565b600082825260208201905092915050565b60005b838110156109085780820151818401526020810190506108ed565b83811115610917576000848401525b50505050565b6000601f19601f8301169050919050565b6000610939826108ce565b61094381856108d9565b93506109538185602086016108ea565b61095c8161091d565b840191505092915050565b60006020820190508181036000830152610981818461092e565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006109b98261098e565b9050919050565b6109c9816109ae565b81146109d457600080fd5b50565b6000813590506109e6816109c0565b92915050565b6000819050919050565b6109ff816109ec565b8114610a0a57600080fd5b50565b600081359050610a1c816109f6565b92915050565b60008060408385031215610a3957610a38610989565b5b6000610a47858286016109d7565b9250506020610a5885828601610a0d565b9150509250929050565b60008115159050919050565b610a7781610a62565b82525050565b6000602082019050610a926000830184610a6e565b92915050565b610aa1816109ec565b82525050565b6000602082019050610abc6000830184610a98565b92915050565b600080600060608486031215610adb57610ada610989565b5b6000610ae9868287016109d7565b9350506020610afa868287016109d7565b9250506040610b0b86828701610a0d565b9150509250925092565b600060208284031215610b2b57610b2a610989565b5b6000610b39848285016109d7565b91505092915050565b60008060408385031215610b5957610b58610989565b5b6000610b67858286016109d7565b9250506020610b78858286016109d7565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610bc957607f821691505b602082108103610bdc57610bdb610b82565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c1c826109ec565b9150610c27836109ec565b925082821015610c3a57610c39610be2565b5b828203905092915050565b6000610c50826109ec565b9150610c5b836109ec565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610c9057610c8f610be2565b5b82820190509291505056fea26469706673582212209dd349d8ac996f9a627874a3840fedc682d8304956d01181c8c8205fbe9b412664736f6c634300080f0033",
    immutableReferences: {},
    generatedSources: [
      {
        ast: {
          nodeType: "YulBlock",
          src: "0:6192:3",
          statements: [
            {
              body: {
                nodeType: "YulBlock",
                src: "66:40:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "77:22:3",
                    value: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "93:5:3",
                        },
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "87:5:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "87:12:3",
                    },
                    variableNames: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "77:6:3",
                      },
                    ],
                  },
                ],
              },
              name: "array_length_t_string_memory_ptr",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "49:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "length",
                  nodeType: "YulTypedName",
                  src: "59:6:3",
                  type: "",
                },
              ],
              src: "7:99:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "140:152:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "157:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "160:77:3",
                          type: "",
                          value:
                            "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "150:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "150:88:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "150:88:3",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "254:1:3",
                          type: "",
                          value: "4",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "257:4:3",
                          type: "",
                          value: "0x41",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "247:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "247:15:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "247:15:3",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "278:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "281:4:3",
                          type: "",
                          value: "0x24",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "271:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "271:15:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "271:15:3",
                  },
                ],
              },
              name: "panic_error_0x41",
              nodeType: "YulFunctionDefinition",
              src: "112:180:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "326:152:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "343:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "346:77:3",
                          type: "",
                          value:
                            "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "336:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "336:88:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "336:88:3",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "440:1:3",
                          type: "",
                          value: "4",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "443:4:3",
                          type: "",
                          value: "0x22",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "433:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "433:15:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "433:15:3",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "464:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "467:4:3",
                          type: "",
                          value: "0x24",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "457:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "457:15:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "457:15:3",
                  },
                ],
              },
              name: "panic_error_0x22",
              nodeType: "YulFunctionDefinition",
              src: "298:180:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "535:269:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "545:22:3",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "559:4:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "565:1:3",
                          type: "",
                          value: "2",
                        },
                      ],
                      functionName: {
                        name: "div",
                        nodeType: "YulIdentifier",
                        src: "555:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "555:12:3",
                    },
                    variableNames: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "545:6:3",
                      },
                    ],
                  },
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "576:38:3",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "606:4:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "612:1:3",
                          type: "",
                          value: "1",
                        },
                      ],
                      functionName: {
                        name: "and",
                        nodeType: "YulIdentifier",
                        src: "602:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "602:12:3",
                    },
                    variables: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulTypedName",
                        src: "580:18:3",
                        type: "",
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "653:51:3",
                      statements: [
                        {
                          nodeType: "YulAssignment",
                          src: "667:27:3",
                          value: {
                            arguments: [
                              {
                                name: "length",
                                nodeType: "YulIdentifier",
                                src: "681:6:3",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "689:4:3",
                                type: "",
                                value: "0x7f",
                              },
                            ],
                            functionName: {
                              name: "and",
                              nodeType: "YulIdentifier",
                              src: "677:3:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "677:17:3",
                          },
                          variableNames: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "667:6:3",
                            },
                          ],
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "outOfPlaceEncoding",
                          nodeType: "YulIdentifier",
                          src: "633:18:3",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "626:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "626:26:3",
                    },
                    nodeType: "YulIf",
                    src: "623:81:3",
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "756:42:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "panic_error_0x22",
                              nodeType: "YulIdentifier",
                              src: "770:16:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "770:18:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "770:18:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "outOfPlaceEncoding",
                          nodeType: "YulIdentifier",
                          src: "720:18:3",
                        },
                        {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "743:6:3",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "751:2:3",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "740:2:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "740:14:3",
                        },
                      ],
                      functionName: {
                        name: "eq",
                        nodeType: "YulIdentifier",
                        src: "717:2:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "717:38:3",
                    },
                    nodeType: "YulIf",
                    src: "714:84:3",
                  },
                ],
              },
              name: "extract_byte_array_length",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "data",
                  nodeType: "YulTypedName",
                  src: "519:4:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "length",
                  nodeType: "YulTypedName",
                  src: "528:6:3",
                  type: "",
                },
              ],
              src: "484:320:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "864:87:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "874:11:3",
                    value: {
                      name: "ptr",
                      nodeType: "YulIdentifier",
                      src: "882:3:3",
                    },
                    variableNames: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "874:4:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "902:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          name: "ptr",
                          nodeType: "YulIdentifier",
                          src: "905:3:3",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "895:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "895:14:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "895:14:3",
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "918:26:3",
                    value: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "936:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "939:4:3",
                          type: "",
                          value: "0x20",
                        },
                      ],
                      functionName: {
                        name: "keccak256",
                        nodeType: "YulIdentifier",
                        src: "926:9:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "926:18:3",
                    },
                    variableNames: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "918:4:3",
                      },
                    ],
                  },
                ],
              },
              name: "array_dataslot_t_string_storage",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "ptr",
                  nodeType: "YulTypedName",
                  src: "851:3:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "data",
                  nodeType: "YulTypedName",
                  src: "859:4:3",
                  type: "",
                },
              ],
              src: "810:141:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1001:49:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1011:33:3",
                    value: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "1029:5:3",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1036:2:3",
                              type: "",
                              value: "31",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "1025:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1025:14:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1041:2:3",
                          type: "",
                          value: "32",
                        },
                      ],
                      functionName: {
                        name: "div",
                        nodeType: "YulIdentifier",
                        src: "1021:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1021:23:3",
                    },
                    variableNames: [
                      {
                        name: "result",
                        nodeType: "YulIdentifier",
                        src: "1011:6:3",
                      },
                    ],
                  },
                ],
              },
              name: "divide_by_32_ceil",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "984:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "result",
                  nodeType: "YulTypedName",
                  src: "994:6:3",
                  type: "",
                },
              ],
              src: "957:93:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1109:54:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1119:37:3",
                    value: {
                      arguments: [
                        {
                          name: "bits",
                          nodeType: "YulIdentifier",
                          src: "1144:4:3",
                        },
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "1150:5:3",
                        },
                      ],
                      functionName: {
                        name: "shl",
                        nodeType: "YulIdentifier",
                        src: "1140:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1140:16:3",
                    },
                    variableNames: [
                      {
                        name: "newValue",
                        nodeType: "YulIdentifier",
                        src: "1119:8:3",
                      },
                    ],
                  },
                ],
              },
              name: "shift_left_dynamic",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "bits",
                  nodeType: "YulTypedName",
                  src: "1084:4:3",
                  type: "",
                },
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1090:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "newValue",
                  nodeType: "YulTypedName",
                  src: "1100:8:3",
                  type: "",
                },
              ],
              src: "1056:107:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1245:317:3",
                statements: [
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "1255:35:3",
                    value: {
                      arguments: [
                        {
                          name: "shiftBytes",
                          nodeType: "YulIdentifier",
                          src: "1276:10:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1288:1:3",
                          type: "",
                          value: "8",
                        },
                      ],
                      functionName: {
                        name: "mul",
                        nodeType: "YulIdentifier",
                        src: "1272:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1272:18:3",
                    },
                    variables: [
                      {
                        name: "shiftBits",
                        nodeType: "YulTypedName",
                        src: "1259:9:3",
                        type: "",
                      },
                    ],
                  },
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "1299:109:3",
                    value: {
                      arguments: [
                        {
                          name: "shiftBits",
                          nodeType: "YulIdentifier",
                          src: "1330:9:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1341:66:3",
                          type: "",
                          value:
                            "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                        },
                      ],
                      functionName: {
                        name: "shift_left_dynamic",
                        nodeType: "YulIdentifier",
                        src: "1311:18:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1311:97:3",
                    },
                    variables: [
                      {
                        name: "mask",
                        nodeType: "YulTypedName",
                        src: "1303:4:3",
                        type: "",
                      },
                    ],
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "1417:51:3",
                    value: {
                      arguments: [
                        {
                          name: "shiftBits",
                          nodeType: "YulIdentifier",
                          src: "1448:9:3",
                        },
                        {
                          name: "toInsert",
                          nodeType: "YulIdentifier",
                          src: "1459:8:3",
                        },
                      ],
                      functionName: {
                        name: "shift_left_dynamic",
                        nodeType: "YulIdentifier",
                        src: "1429:18:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1429:39:3",
                    },
                    variableNames: [
                      {
                        name: "toInsert",
                        nodeType: "YulIdentifier",
                        src: "1417:8:3",
                      },
                    ],
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "1477:30:3",
                    value: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "1490:5:3",
                        },
                        {
                          arguments: [
                            {
                              name: "mask",
                              nodeType: "YulIdentifier",
                              src: "1501:4:3",
                            },
                          ],
                          functionName: {
                            name: "not",
                            nodeType: "YulIdentifier",
                            src: "1497:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1497:9:3",
                        },
                      ],
                      functionName: {
                        name: "and",
                        nodeType: "YulIdentifier",
                        src: "1486:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1486:21:3",
                    },
                    variableNames: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1477:5:3",
                      },
                    ],
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "1516:40:3",
                    value: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "1529:5:3",
                        },
                        {
                          arguments: [
                            {
                              name: "toInsert",
                              nodeType: "YulIdentifier",
                              src: "1540:8:3",
                            },
                            {
                              name: "mask",
                              nodeType: "YulIdentifier",
                              src: "1550:4:3",
                            },
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "1536:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1536:19:3",
                        },
                      ],
                      functionName: {
                        name: "or",
                        nodeType: "YulIdentifier",
                        src: "1526:2:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1526:30:3",
                    },
                    variableNames: [
                      {
                        name: "result",
                        nodeType: "YulIdentifier",
                        src: "1516:6:3",
                      },
                    ],
                  },
                ],
              },
              name: "update_byte_slice_dynamic32",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1206:5:3",
                  type: "",
                },
                {
                  name: "shiftBytes",
                  nodeType: "YulTypedName",
                  src: "1213:10:3",
                  type: "",
                },
                {
                  name: "toInsert",
                  nodeType: "YulTypedName",
                  src: "1225:8:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "result",
                  nodeType: "YulTypedName",
                  src: "1238:6:3",
                  type: "",
                },
              ],
              src: "1169:393:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1613:32:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1623:16:3",
                    value: {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "1634:5:3",
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "1623:7:3",
                      },
                    ],
                  },
                ],
              },
              name: "cleanup_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1595:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "1605:7:3",
                  type: "",
                },
              ],
              src: "1568:77:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1683:28:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1693:12:3",
                    value: {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "1700:5:3",
                    },
                    variableNames: [
                      {
                        name: "ret",
                        nodeType: "YulIdentifier",
                        src: "1693:3:3",
                      },
                    ],
                  },
                ],
              },
              name: "identity",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1669:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "ret",
                  nodeType: "YulTypedName",
                  src: "1679:3:3",
                  type: "",
                },
              ],
              src: "1651:60:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1777:82:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1787:66:3",
                    value: {
                      arguments: [
                        {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "1845:5:3",
                                },
                              ],
                              functionName: {
                                name: "cleanup_t_uint256",
                                nodeType: "YulIdentifier",
                                src: "1827:17:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "1827:24:3",
                            },
                          ],
                          functionName: {
                            name: "identity",
                            nodeType: "YulIdentifier",
                            src: "1818:8:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1818:34:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "1800:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1800:53:3",
                    },
                    variableNames: [
                      {
                        name: "converted",
                        nodeType: "YulIdentifier",
                        src: "1787:9:3",
                      },
                    ],
                  },
                ],
              },
              name: "convert_t_uint256_to_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1757:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "converted",
                  nodeType: "YulTypedName",
                  src: "1767:9:3",
                  type: "",
                },
              ],
              src: "1717:142:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1912:28:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1922:12:3",
                    value: {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "1929:5:3",
                    },
                    variableNames: [
                      {
                        name: "ret",
                        nodeType: "YulIdentifier",
                        src: "1922:3:3",
                      },
                    ],
                  },
                ],
              },
              name: "prepare_store_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1898:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "ret",
                  nodeType: "YulTypedName",
                  src: "1908:3:3",
                  type: "",
                },
              ],
              src: "1865:75:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2022:193:3",
                statements: [
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "2032:63:3",
                    value: {
                      arguments: [
                        {
                          name: "value_0",
                          nodeType: "YulIdentifier",
                          src: "2087:7:3",
                        },
                      ],
                      functionName: {
                        name: "convert_t_uint256_to_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "2056:30:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2056:39:3",
                    },
                    variables: [
                      {
                        name: "convertedValue_0",
                        nodeType: "YulTypedName",
                        src: "2036:16:3",
                        type: "",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "slot",
                          nodeType: "YulIdentifier",
                          src: "2111:4:3",
                        },
                        {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "2151:4:3",
                                },
                              ],
                              functionName: {
                                name: "sload",
                                nodeType: "YulIdentifier",
                                src: "2145:5:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "2145:11:3",
                            },
                            {
                              name: "offset",
                              nodeType: "YulIdentifier",
                              src: "2158:6:3",
                            },
                            {
                              arguments: [
                                {
                                  name: "convertedValue_0",
                                  nodeType: "YulIdentifier",
                                  src: "2190:16:3",
                                },
                              ],
                              functionName: {
                                name: "prepare_store_t_uint256",
                                nodeType: "YulIdentifier",
                                src: "2166:23:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "2166:41:3",
                            },
                          ],
                          functionName: {
                            name: "update_byte_slice_dynamic32",
                            nodeType: "YulIdentifier",
                            src: "2117:27:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2117:91:3",
                        },
                      ],
                      functionName: {
                        name: "sstore",
                        nodeType: "YulIdentifier",
                        src: "2104:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2104:105:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "2104:105:3",
                  },
                ],
              },
              name: "update_storage_value_t_uint256_to_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "slot",
                  nodeType: "YulTypedName",
                  src: "1999:4:3",
                  type: "",
                },
                {
                  name: "offset",
                  nodeType: "YulTypedName",
                  src: "2005:6:3",
                  type: "",
                },
                {
                  name: "value_0",
                  nodeType: "YulTypedName",
                  src: "2013:7:3",
                  type: "",
                },
              ],
              src: "1946:269:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2270:24:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "2280:8:3",
                    value: {
                      kind: "number",
                      nodeType: "YulLiteral",
                      src: "2287:1:3",
                      type: "",
                      value: "0",
                    },
                    variableNames: [
                      {
                        name: "ret",
                        nodeType: "YulIdentifier",
                        src: "2280:3:3",
                      },
                    ],
                  },
                ],
              },
              name: "zero_value_for_split_t_uint256",
              nodeType: "YulFunctionDefinition",
              returnVariables: [
                {
                  name: "ret",
                  nodeType: "YulTypedName",
                  src: "2266:3:3",
                  type: "",
                },
              ],
              src: "2221:73:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2353:136:3",
                statements: [
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "2363:46:3",
                    value: {
                      arguments: [],
                      functionName: {
                        name: "zero_value_for_split_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "2377:30:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2377:32:3",
                    },
                    variables: [
                      {
                        name: "zero_0",
                        nodeType: "YulTypedName",
                        src: "2367:6:3",
                        type: "",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "slot",
                          nodeType: "YulIdentifier",
                          src: "2462:4:3",
                        },
                        {
                          name: "offset",
                          nodeType: "YulIdentifier",
                          src: "2468:6:3",
                        },
                        {
                          name: "zero_0",
                          nodeType: "YulIdentifier",
                          src: "2476:6:3",
                        },
                      ],
                      functionName: {
                        name: "update_storage_value_t_uint256_to_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "2418:43:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2418:65:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "2418:65:3",
                  },
                ],
              },
              name: "storage_set_to_zero_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "slot",
                  nodeType: "YulTypedName",
                  src: "2339:4:3",
                  type: "",
                },
                {
                  name: "offset",
                  nodeType: "YulTypedName",
                  src: "2345:6:3",
                  type: "",
                },
              ],
              src: "2300:189:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2545:136:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "2612:63:3",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                name: "start",
                                nodeType: "YulIdentifier",
                                src: "2656:5:3",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "2663:1:3",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "storage_set_to_zero_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "2626:29:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2626:39:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "2626:39:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "start",
                          nodeType: "YulIdentifier",
                          src: "2565:5:3",
                        },
                        {
                          name: "end",
                          nodeType: "YulIdentifier",
                          src: "2572:3:3",
                        },
                      ],
                      functionName: {
                        name: "lt",
                        nodeType: "YulIdentifier",
                        src: "2562:2:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2562:14:3",
                    },
                    nodeType: "YulForLoop",
                    post: {
                      nodeType: "YulBlock",
                      src: "2577:26:3",
                      statements: [
                        {
                          nodeType: "YulAssignment",
                          src: "2579:22:3",
                          value: {
                            arguments: [
                              {
                                name: "start",
                                nodeType: "YulIdentifier",
                                src: "2592:5:3",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "2599:1:3",
                                type: "",
                                value: "1",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "2588:3:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2588:13:3",
                          },
                          variableNames: [
                            {
                              name: "start",
                              nodeType: "YulIdentifier",
                              src: "2579:5:3",
                            },
                          ],
                        },
                      ],
                    },
                    pre: {
                      nodeType: "YulBlock",
                      src: "2559:2:3",
                      statements: [],
                    },
                    src: "2555:120:3",
                  },
                ],
              },
              name: "clear_storage_range_t_bytes1",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "start",
                  nodeType: "YulTypedName",
                  src: "2533:5:3",
                  type: "",
                },
                {
                  name: "end",
                  nodeType: "YulTypedName",
                  src: "2540:3:3",
                  type: "",
                },
              ],
              src: "2495:186:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2766:464:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "2792:431:3",
                      statements: [
                        {
                          nodeType: "YulVariableDeclaration",
                          src: "2806:54:3",
                          value: {
                            arguments: [
                              {
                                name: "array",
                                nodeType: "YulIdentifier",
                                src: "2854:5:3",
                              },
                            ],
                            functionName: {
                              name: "array_dataslot_t_string_storage",
                              nodeType: "YulIdentifier",
                              src: "2822:31:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2822:38:3",
                          },
                          variables: [
                            {
                              name: "dataArea",
                              nodeType: "YulTypedName",
                              src: "2810:8:3",
                              type: "",
                            },
                          ],
                        },
                        {
                          nodeType: "YulVariableDeclaration",
                          src: "2873:63:3",
                          value: {
                            arguments: [
                              {
                                name: "dataArea",
                                nodeType: "YulIdentifier",
                                src: "2896:8:3",
                              },
                              {
                                arguments: [
                                  {
                                    name: "startIndex",
                                    nodeType: "YulIdentifier",
                                    src: "2924:10:3",
                                  },
                                ],
                                functionName: {
                                  name: "divide_by_32_ceil",
                                  nodeType: "YulIdentifier",
                                  src: "2906:17:3",
                                },
                                nodeType: "YulFunctionCall",
                                src: "2906:29:3",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "2892:3:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2892:44:3",
                          },
                          variables: [
                            {
                              name: "deleteStart",
                              nodeType: "YulTypedName",
                              src: "2877:11:3",
                              type: "",
                            },
                          ],
                        },
                        {
                          body: {
                            nodeType: "YulBlock",
                            src: "3093:27:3",
                            statements: [
                              {
                                nodeType: "YulAssignment",
                                src: "3095:23:3",
                                value: {
                                  name: "dataArea",
                                  nodeType: "YulIdentifier",
                                  src: "3110:8:3",
                                },
                                variableNames: [
                                  {
                                    name: "deleteStart",
                                    nodeType: "YulIdentifier",
                                    src: "3095:11:3",
                                  },
                                ],
                              },
                            ],
                          },
                          condition: {
                            arguments: [
                              {
                                name: "startIndex",
                                nodeType: "YulIdentifier",
                                src: "3077:10:3",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "3089:2:3",
                                type: "",
                                value: "32",
                              },
                            ],
                            functionName: {
                              name: "lt",
                              nodeType: "YulIdentifier",
                              src: "3074:2:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3074:18:3",
                          },
                          nodeType: "YulIf",
                          src: "3071:49:3",
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                name: "deleteStart",
                                nodeType: "YulIdentifier",
                                src: "3162:11:3",
                              },
                              {
                                arguments: [
                                  {
                                    name: "dataArea",
                                    nodeType: "YulIdentifier",
                                    src: "3179:8:3",
                                  },
                                  {
                                    arguments: [
                                      {
                                        name: "len",
                                        nodeType: "YulIdentifier",
                                        src: "3207:3:3",
                                      },
                                    ],
                                    functionName: {
                                      name: "divide_by_32_ceil",
                                      nodeType: "YulIdentifier",
                                      src: "3189:17:3",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "3189:22:3",
                                  },
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "3175:3:3",
                                },
                                nodeType: "YulFunctionCall",
                                src: "3175:37:3",
                              },
                            ],
                            functionName: {
                              name: "clear_storage_range_t_bytes1",
                              nodeType: "YulIdentifier",
                              src: "3133:28:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3133:80:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "3133:80:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "len",
                          nodeType: "YulIdentifier",
                          src: "2783:3:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "2788:2:3",
                          type: "",
                          value: "31",
                        },
                      ],
                      functionName: {
                        name: "gt",
                        nodeType: "YulIdentifier",
                        src: "2780:2:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2780:11:3",
                    },
                    nodeType: "YulIf",
                    src: "2777:446:3",
                  },
                ],
              },
              name: "clean_up_bytearray_end_slots_t_string_storage",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "array",
                  nodeType: "YulTypedName",
                  src: "2742:5:3",
                  type: "",
                },
                {
                  name: "len",
                  nodeType: "YulTypedName",
                  src: "2749:3:3",
                  type: "",
                },
                {
                  name: "startIndex",
                  nodeType: "YulTypedName",
                  src: "2754:10:3",
                  type: "",
                },
              ],
              src: "2687:543:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3299:54:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "3309:37:3",
                    value: {
                      arguments: [
                        {
                          name: "bits",
                          nodeType: "YulIdentifier",
                          src: "3334:4:3",
                        },
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "3340:5:3",
                        },
                      ],
                      functionName: {
                        name: "shr",
                        nodeType: "YulIdentifier",
                        src: "3330:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3330:16:3",
                    },
                    variableNames: [
                      {
                        name: "newValue",
                        nodeType: "YulIdentifier",
                        src: "3309:8:3",
                      },
                    ],
                  },
                ],
              },
              name: "shift_right_unsigned_dynamic",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "bits",
                  nodeType: "YulTypedName",
                  src: "3274:4:3",
                  type: "",
                },
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "3280:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "newValue",
                  nodeType: "YulTypedName",
                  src: "3290:8:3",
                  type: "",
                },
              ],
              src: "3236:117:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3410:118:3",
                statements: [
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "3420:68:3",
                    value: {
                      arguments: [
                        {
                          arguments: [
                            {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "3469:1:3",
                                  type: "",
                                  value: "8",
                                },
                                {
                                  name: "bytes",
                                  nodeType: "YulIdentifier",
                                  src: "3472:5:3",
                                },
                              ],
                              functionName: {
                                name: "mul",
                                nodeType: "YulIdentifier",
                                src: "3465:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "3465:13:3",
                            },
                            {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "3484:1:3",
                                  type: "",
                                  value: "0",
                                },
                              ],
                              functionName: {
                                name: "not",
                                nodeType: "YulIdentifier",
                                src: "3480:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "3480:6:3",
                            },
                          ],
                          functionName: {
                            name: "shift_right_unsigned_dynamic",
                            nodeType: "YulIdentifier",
                            src: "3436:28:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3436:51:3",
                        },
                      ],
                      functionName: {
                        name: "not",
                        nodeType: "YulIdentifier",
                        src: "3432:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3432:56:3",
                    },
                    variables: [
                      {
                        name: "mask",
                        nodeType: "YulTypedName",
                        src: "3424:4:3",
                        type: "",
                      },
                    ],
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "3497:25:3",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "3511:4:3",
                        },
                        {
                          name: "mask",
                          nodeType: "YulIdentifier",
                          src: "3517:4:3",
                        },
                      ],
                      functionName: {
                        name: "and",
                        nodeType: "YulIdentifier",
                        src: "3507:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3507:15:3",
                    },
                    variableNames: [
                      {
                        name: "result",
                        nodeType: "YulIdentifier",
                        src: "3497:6:3",
                      },
                    ],
                  },
                ],
              },
              name: "mask_bytes_dynamic",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "data",
                  nodeType: "YulTypedName",
                  src: "3387:4:3",
                  type: "",
                },
                {
                  name: "bytes",
                  nodeType: "YulTypedName",
                  src: "3393:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "result",
                  nodeType: "YulTypedName",
                  src: "3403:6:3",
                  type: "",
                },
              ],
              src: "3359:169:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3614:214:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "3747:37:3",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "3774:4:3",
                        },
                        {
                          name: "len",
                          nodeType: "YulIdentifier",
                          src: "3780:3:3",
                        },
                      ],
                      functionName: {
                        name: "mask_bytes_dynamic",
                        nodeType: "YulIdentifier",
                        src: "3755:18:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3755:29:3",
                    },
                    variableNames: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "3747:4:3",
                      },
                    ],
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "3793:29:3",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "3804:4:3",
                        },
                        {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3814:1:3",
                              type: "",
                              value: "2",
                            },
                            {
                              name: "len",
                              nodeType: "YulIdentifier",
                              src: "3817:3:3",
                            },
                          ],
                          functionName: {
                            name: "mul",
                            nodeType: "YulIdentifier",
                            src: "3810:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3810:11:3",
                        },
                      ],
                      functionName: {
                        name: "or",
                        nodeType: "YulIdentifier",
                        src: "3801:2:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3801:21:3",
                    },
                    variableNames: [
                      {
                        name: "used",
                        nodeType: "YulIdentifier",
                        src: "3793:4:3",
                      },
                    ],
                  },
                ],
              },
              name: "extract_used_part_and_set_length_of_short_byte_array",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "data",
                  nodeType: "YulTypedName",
                  src: "3595:4:3",
                  type: "",
                },
                {
                  name: "len",
                  nodeType: "YulTypedName",
                  src: "3601:3:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "used",
                  nodeType: "YulTypedName",
                  src: "3609:4:3",
                  type: "",
                },
              ],
              src: "3533:295:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3925:1303:3",
                statements: [
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "3936:51:3",
                    value: {
                      arguments: [
                        {
                          name: "src",
                          nodeType: "YulIdentifier",
                          src: "3983:3:3",
                        },
                      ],
                      functionName: {
                        name: "array_length_t_string_memory_ptr",
                        nodeType: "YulIdentifier",
                        src: "3950:32:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3950:37:3",
                    },
                    variables: [
                      {
                        name: "newLen",
                        nodeType: "YulTypedName",
                        src: "3940:6:3",
                        type: "",
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "4072:22:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "panic_error_0x41",
                              nodeType: "YulIdentifier",
                              src: "4074:16:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "4074:18:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "4074:18:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "newLen",
                          nodeType: "YulIdentifier",
                          src: "4044:6:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4052:18:3",
                          type: "",
                          value: "0xffffffffffffffff",
                        },
                      ],
                      functionName: {
                        name: "gt",
                        nodeType: "YulIdentifier",
                        src: "4041:2:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4041:30:3",
                    },
                    nodeType: "YulIf",
                    src: "4038:56:3",
                  },
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "4104:52:3",
                    value: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "slot",
                              nodeType: "YulIdentifier",
                              src: "4150:4:3",
                            },
                          ],
                          functionName: {
                            name: "sload",
                            nodeType: "YulIdentifier",
                            src: "4144:5:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4144:11:3",
                        },
                      ],
                      functionName: {
                        name: "extract_byte_array_length",
                        nodeType: "YulIdentifier",
                        src: "4118:25:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4118:38:3",
                    },
                    variables: [
                      {
                        name: "oldLen",
                        nodeType: "YulTypedName",
                        src: "4108:6:3",
                        type: "",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "slot",
                          nodeType: "YulIdentifier",
                          src: "4249:4:3",
                        },
                        {
                          name: "oldLen",
                          nodeType: "YulIdentifier",
                          src: "4255:6:3",
                        },
                        {
                          name: "newLen",
                          nodeType: "YulIdentifier",
                          src: "4263:6:3",
                        },
                      ],
                      functionName: {
                        name: "clean_up_bytearray_end_slots_t_string_storage",
                        nodeType: "YulIdentifier",
                        src: "4203:45:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4203:67:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "4203:67:3",
                  },
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "4280:18:3",
                    value: {
                      kind: "number",
                      nodeType: "YulLiteral",
                      src: "4297:1:3",
                      type: "",
                      value: "0",
                    },
                    variables: [
                      {
                        name: "srcOffset",
                        nodeType: "YulTypedName",
                        src: "4284:9:3",
                        type: "",
                      },
                    ],
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "4308:17:3",
                    value: {
                      kind: "number",
                      nodeType: "YulLiteral",
                      src: "4321:4:3",
                      type: "",
                      value: "0x20",
                    },
                    variableNames: [
                      {
                        name: "srcOffset",
                        nodeType: "YulIdentifier",
                        src: "4308:9:3",
                      },
                    ],
                  },
                  {
                    cases: [
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "4372:611:3",
                          statements: [
                            {
                              nodeType: "YulVariableDeclaration",
                              src: "4386:37:3",
                              value: {
                                arguments: [
                                  {
                                    name: "newLen",
                                    nodeType: "YulIdentifier",
                                    src: "4405:6:3",
                                  },
                                  {
                                    arguments: [
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "4417:4:3",
                                        type: "",
                                        value: "0x1f",
                                      },
                                    ],
                                    functionName: {
                                      name: "not",
                                      nodeType: "YulIdentifier",
                                      src: "4413:3:3",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4413:9:3",
                                  },
                                ],
                                functionName: {
                                  name: "and",
                                  nodeType: "YulIdentifier",
                                  src: "4401:3:3",
                                },
                                nodeType: "YulFunctionCall",
                                src: "4401:22:3",
                              },
                              variables: [
                                {
                                  name: "loopEnd",
                                  nodeType: "YulTypedName",
                                  src: "4390:7:3",
                                  type: "",
                                },
                              ],
                            },
                            {
                              nodeType: "YulVariableDeclaration",
                              src: "4437:51:3",
                              value: {
                                arguments: [
                                  {
                                    name: "slot",
                                    nodeType: "YulIdentifier",
                                    src: "4483:4:3",
                                  },
                                ],
                                functionName: {
                                  name: "array_dataslot_t_string_storage",
                                  nodeType: "YulIdentifier",
                                  src: "4451:31:3",
                                },
                                nodeType: "YulFunctionCall",
                                src: "4451:37:3",
                              },
                              variables: [
                                {
                                  name: "dstPtr",
                                  nodeType: "YulTypedName",
                                  src: "4441:6:3",
                                  type: "",
                                },
                              ],
                            },
                            {
                              nodeType: "YulVariableDeclaration",
                              src: "4501:10:3",
                              value: {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "4510:1:3",
                                type: "",
                                value: "0",
                              },
                              variables: [
                                {
                                  name: "i",
                                  nodeType: "YulTypedName",
                                  src: "4505:1:3",
                                  type: "",
                                },
                              ],
                            },
                            {
                              body: {
                                nodeType: "YulBlock",
                                src: "4569:163:3",
                                statements: [
                                  {
                                    expression: {
                                      arguments: [
                                        {
                                          name: "dstPtr",
                                          nodeType: "YulIdentifier",
                                          src: "4594:6:3",
                                        },
                                        {
                                          arguments: [
                                            {
                                              arguments: [
                                                {
                                                  name: "src",
                                                  nodeType: "YulIdentifier",
                                                  src: "4612:3:3",
                                                },
                                                {
                                                  name: "srcOffset",
                                                  nodeType: "YulIdentifier",
                                                  src: "4617:9:3",
                                                },
                                              ],
                                              functionName: {
                                                name: "add",
                                                nodeType: "YulIdentifier",
                                                src: "4608:3:3",
                                              },
                                              nodeType: "YulFunctionCall",
                                              src: "4608:19:3",
                                            },
                                          ],
                                          functionName: {
                                            name: "mload",
                                            nodeType: "YulIdentifier",
                                            src: "4602:5:3",
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "4602:26:3",
                                        },
                                      ],
                                      functionName: {
                                        name: "sstore",
                                        nodeType: "YulIdentifier",
                                        src: "4587:6:3",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "4587:42:3",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "4587:42:3",
                                  },
                                  {
                                    nodeType: "YulAssignment",
                                    src: "4646:24:3",
                                    value: {
                                      arguments: [
                                        {
                                          name: "dstPtr",
                                          nodeType: "YulIdentifier",
                                          src: "4660:6:3",
                                        },
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "4668:1:3",
                                          type: "",
                                          value: "1",
                                        },
                                      ],
                                      functionName: {
                                        name: "add",
                                        nodeType: "YulIdentifier",
                                        src: "4656:3:3",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "4656:14:3",
                                    },
                                    variableNames: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "4646:6:3",
                                      },
                                    ],
                                  },
                                  {
                                    nodeType: "YulAssignment",
                                    src: "4687:31:3",
                                    value: {
                                      arguments: [
                                        {
                                          name: "srcOffset",
                                          nodeType: "YulIdentifier",
                                          src: "4704:9:3",
                                        },
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "4715:2:3",
                                          type: "",
                                          value: "32",
                                        },
                                      ],
                                      functionName: {
                                        name: "add",
                                        nodeType: "YulIdentifier",
                                        src: "4700:3:3",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "4700:18:3",
                                    },
                                    variableNames: [
                                      {
                                        name: "srcOffset",
                                        nodeType: "YulIdentifier",
                                        src: "4687:9:3",
                                      },
                                    ],
                                  },
                                ],
                              },
                              condition: {
                                arguments: [
                                  {
                                    name: "i",
                                    nodeType: "YulIdentifier",
                                    src: "4535:1:3",
                                  },
                                  {
                                    name: "loopEnd",
                                    nodeType: "YulIdentifier",
                                    src: "4538:7:3",
                                  },
                                ],
                                functionName: {
                                  name: "lt",
                                  nodeType: "YulIdentifier",
                                  src: "4532:2:3",
                                },
                                nodeType: "YulFunctionCall",
                                src: "4532:14:3",
                              },
                              nodeType: "YulForLoop",
                              post: {
                                nodeType: "YulBlock",
                                src: "4547:21:3",
                                statements: [
                                  {
                                    nodeType: "YulAssignment",
                                    src: "4549:17:3",
                                    value: {
                                      arguments: [
                                        {
                                          name: "i",
                                          nodeType: "YulIdentifier",
                                          src: "4558:1:3",
                                        },
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "4561:4:3",
                                          type: "",
                                          value: "0x20",
                                        },
                                      ],
                                      functionName: {
                                        name: "add",
                                        nodeType: "YulIdentifier",
                                        src: "4554:3:3",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "4554:12:3",
                                    },
                                    variableNames: [
                                      {
                                        name: "i",
                                        nodeType: "YulIdentifier",
                                        src: "4549:1:3",
                                      },
                                    ],
                                  },
                                ],
                              },
                              pre: {
                                nodeType: "YulBlock",
                                src: "4528:3:3",
                                statements: [],
                              },
                              src: "4524:208:3",
                            },
                            {
                              body: {
                                nodeType: "YulBlock",
                                src: "4768:156:3",
                                statements: [
                                  {
                                    nodeType: "YulVariableDeclaration",
                                    src: "4786:43:3",
                                    value: {
                                      arguments: [
                                        {
                                          arguments: [
                                            {
                                              name: "src",
                                              nodeType: "YulIdentifier",
                                              src: "4813:3:3",
                                            },
                                            {
                                              name: "srcOffset",
                                              nodeType: "YulIdentifier",
                                              src: "4818:9:3",
                                            },
                                          ],
                                          functionName: {
                                            name: "add",
                                            nodeType: "YulIdentifier",
                                            src: "4809:3:3",
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "4809:19:3",
                                        },
                                      ],
                                      functionName: {
                                        name: "mload",
                                        nodeType: "YulIdentifier",
                                        src: "4803:5:3",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "4803:26:3",
                                    },
                                    variables: [
                                      {
                                        name: "lastValue",
                                        nodeType: "YulTypedName",
                                        src: "4790:9:3",
                                        type: "",
                                      },
                                    ],
                                  },
                                  {
                                    expression: {
                                      arguments: [
                                        {
                                          name: "dstPtr",
                                          nodeType: "YulIdentifier",
                                          src: "4853:6:3",
                                        },
                                        {
                                          arguments: [
                                            {
                                              name: "lastValue",
                                              nodeType: "YulIdentifier",
                                              src: "4880:9:3",
                                            },
                                            {
                                              arguments: [
                                                {
                                                  name: "newLen",
                                                  nodeType: "YulIdentifier",
                                                  src: "4895:6:3",
                                                },
                                                {
                                                  kind: "number",
                                                  nodeType: "YulLiteral",
                                                  src: "4903:4:3",
                                                  type: "",
                                                  value: "0x1f",
                                                },
                                              ],
                                              functionName: {
                                                name: "and",
                                                nodeType: "YulIdentifier",
                                                src: "4891:3:3",
                                              },
                                              nodeType: "YulFunctionCall",
                                              src: "4891:17:3",
                                            },
                                          ],
                                          functionName: {
                                            name: "mask_bytes_dynamic",
                                            nodeType: "YulIdentifier",
                                            src: "4861:18:3",
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "4861:48:3",
                                        },
                                      ],
                                      functionName: {
                                        name: "sstore",
                                        nodeType: "YulIdentifier",
                                        src: "4846:6:3",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "4846:64:3",
                                    },
                                    nodeType: "YulExpressionStatement",
                                    src: "4846:64:3",
                                  },
                                ],
                              },
                              condition: {
                                arguments: [
                                  {
                                    name: "loopEnd",
                                    nodeType: "YulIdentifier",
                                    src: "4751:7:3",
                                  },
                                  {
                                    name: "newLen",
                                    nodeType: "YulIdentifier",
                                    src: "4760:6:3",
                                  },
                                ],
                                functionName: {
                                  name: "lt",
                                  nodeType: "YulIdentifier",
                                  src: "4748:2:3",
                                },
                                nodeType: "YulFunctionCall",
                                src: "4748:19:3",
                              },
                              nodeType: "YulIf",
                              src: "4745:179:3",
                            },
                            {
                              expression: {
                                arguments: [
                                  {
                                    name: "slot",
                                    nodeType: "YulIdentifier",
                                    src: "4944:4:3",
                                  },
                                  {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            name: "newLen",
                                            nodeType: "YulIdentifier",
                                            src: "4958:6:3",
                                          },
                                          {
                                            kind: "number",
                                            nodeType: "YulLiteral",
                                            src: "4966:1:3",
                                            type: "",
                                            value: "2",
                                          },
                                        ],
                                        functionName: {
                                          name: "mul",
                                          nodeType: "YulIdentifier",
                                          src: "4954:3:3",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4954:14:3",
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "4970:1:3",
                                        type: "",
                                        value: "1",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "4950:3:3",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4950:22:3",
                                  },
                                ],
                                functionName: {
                                  name: "sstore",
                                  nodeType: "YulIdentifier",
                                  src: "4937:6:3",
                                },
                                nodeType: "YulFunctionCall",
                                src: "4937:36:3",
                              },
                              nodeType: "YulExpressionStatement",
                              src: "4937:36:3",
                            },
                          ],
                        },
                        nodeType: "YulCase",
                        src: "4365:618:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4370:1:3",
                          type: "",
                          value: "1",
                        },
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "5000:222:3",
                          statements: [
                            {
                              nodeType: "YulVariableDeclaration",
                              src: "5014:14:3",
                              value: {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "5027:1:3",
                                type: "",
                                value: "0",
                              },
                              variables: [
                                {
                                  name: "value",
                                  nodeType: "YulTypedName",
                                  src: "5018:5:3",
                                  type: "",
                                },
                              ],
                            },
                            {
                              body: {
                                nodeType: "YulBlock",
                                src: "5051:67:3",
                                statements: [
                                  {
                                    nodeType: "YulAssignment",
                                    src: "5069:35:3",
                                    value: {
                                      arguments: [
                                        {
                                          arguments: [
                                            {
                                              name: "src",
                                              nodeType: "YulIdentifier",
                                              src: "5088:3:3",
                                            },
                                            {
                                              name: "srcOffset",
                                              nodeType: "YulIdentifier",
                                              src: "5093:9:3",
                                            },
                                          ],
                                          functionName: {
                                            name: "add",
                                            nodeType: "YulIdentifier",
                                            src: "5084:3:3",
                                          },
                                          nodeType: "YulFunctionCall",
                                          src: "5084:19:3",
                                        },
                                      ],
                                      functionName: {
                                        name: "mload",
                                        nodeType: "YulIdentifier",
                                        src: "5078:5:3",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "5078:26:3",
                                    },
                                    variableNames: [
                                      {
                                        name: "value",
                                        nodeType: "YulIdentifier",
                                        src: "5069:5:3",
                                      },
                                    ],
                                  },
                                ],
                              },
                              condition: {
                                name: "newLen",
                                nodeType: "YulIdentifier",
                                src: "5044:6:3",
                              },
                              nodeType: "YulIf",
                              src: "5041:77:3",
                            },
                            {
                              expression: {
                                arguments: [
                                  {
                                    name: "slot",
                                    nodeType: "YulIdentifier",
                                    src: "5138:4:3",
                                  },
                                  {
                                    arguments: [
                                      {
                                        name: "value",
                                        nodeType: "YulIdentifier",
                                        src: "5197:5:3",
                                      },
                                      {
                                        name: "newLen",
                                        nodeType: "YulIdentifier",
                                        src: "5204:6:3",
                                      },
                                    ],
                                    functionName: {
                                      name: "extract_used_part_and_set_length_of_short_byte_array",
                                      nodeType: "YulIdentifier",
                                      src: "5144:52:3",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "5144:67:3",
                                  },
                                ],
                                functionName: {
                                  name: "sstore",
                                  nodeType: "YulIdentifier",
                                  src: "5131:6:3",
                                },
                                nodeType: "YulFunctionCall",
                                src: "5131:81:3",
                              },
                              nodeType: "YulExpressionStatement",
                              src: "5131:81:3",
                            },
                          ],
                        },
                        nodeType: "YulCase",
                        src: "4992:230:3",
                        value: "default",
                      },
                    ],
                    expression: {
                      arguments: [
                        {
                          name: "newLen",
                          nodeType: "YulIdentifier",
                          src: "4345:6:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4353:2:3",
                          type: "",
                          value: "31",
                        },
                      ],
                      functionName: {
                        name: "gt",
                        nodeType: "YulIdentifier",
                        src: "4342:2:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4342:14:3",
                    },
                    nodeType: "YulSwitch",
                    src: "4335:887:3",
                  },
                ],
              },
              name: "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "slot",
                  nodeType: "YulTypedName",
                  src: "3914:4:3",
                  type: "",
                },
                {
                  name: "src",
                  nodeType: "YulTypedName",
                  src: "3920:3:3",
                  type: "",
                },
              ],
              src: "3833:1395:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5274:35:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "5284:19:3",
                    value: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5300:2:3",
                          type: "",
                          value: "64",
                        },
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "5294:5:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5294:9:3",
                    },
                    variableNames: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "5284:6:3",
                      },
                    ],
                  },
                ],
              },
              name: "allocate_unbounded",
              nodeType: "YulFunctionDefinition",
              returnVariables: [
                {
                  name: "memPtr",
                  nodeType: "YulTypedName",
                  src: "5267:6:3",
                  type: "",
                },
              ],
              src: "5234:75:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5404:28:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5421:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5424:1:3",
                          type: "",
                          value: "0",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "5414:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5414:12:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5414:12:3",
                  },
                ],
              },
              name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              nodeType: "YulFunctionDefinition",
              src: "5315:117:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5527:28:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5544:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5547:1:3",
                          type: "",
                          value: "0",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "5537:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5537:12:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5537:12:3",
                  },
                ],
              },
              name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              nodeType: "YulFunctionDefinition",
              src: "5438:117:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5604:79:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "5661:16:3",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "5670:1:3",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "5673:1:3",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nodeType: "YulIdentifier",
                              src: "5663:6:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5663:12:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "5663:12:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "5627:5:3",
                            },
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "5652:5:3",
                                },
                              ],
                              functionName: {
                                name: "cleanup_t_uint256",
                                nodeType: "YulIdentifier",
                                src: "5634:17:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "5634:24:3",
                            },
                          ],
                          functionName: {
                            name: "eq",
                            nodeType: "YulIdentifier",
                            src: "5624:2:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5624:35:3",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "5617:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5617:43:3",
                    },
                    nodeType: "YulIf",
                    src: "5614:63:3",
                  },
                ],
              },
              name: "validator_revert_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "5597:5:3",
                  type: "",
                },
              ],
              src: "5561:122:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5752:80:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "5762:22:3",
                    value: {
                      arguments: [
                        {
                          name: "offset",
                          nodeType: "YulIdentifier",
                          src: "5777:6:3",
                        },
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "5771:5:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5771:13:3",
                    },
                    variableNames: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "5762:5:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "5820:5:3",
                        },
                      ],
                      functionName: {
                        name: "validator_revert_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "5793:26:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5793:33:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5793:33:3",
                  },
                ],
              },
              name: "abi_decode_t_uint256_fromMemory",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "offset",
                  nodeType: "YulTypedName",
                  src: "5730:6:3",
                  type: "",
                },
                {
                  name: "end",
                  nodeType: "YulTypedName",
                  src: "5738:3:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "5746:5:3",
                  type: "",
                },
              ],
              src: "5689:143:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5915:274:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "5961:83:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              nodeType: "YulIdentifier",
                              src: "5963:77:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5963:79:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "5963:79:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "5936:7:3",
                            },
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "5945:9:3",
                            },
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "5932:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5932:23:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5957:2:3",
                          type: "",
                          value: "32",
                        },
                      ],
                      functionName: {
                        name: "slt",
                        nodeType: "YulIdentifier",
                        src: "5928:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5928:32:3",
                    },
                    nodeType: "YulIf",
                    src: "5925:119:3",
                  },
                  {
                    nodeType: "YulBlock",
                    src: "6054:128:3",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "6069:15:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "6083:1:3",
                          type: "",
                          value: "0",
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "6073:6:3",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "6098:74:3",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "6144:9:3",
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "6155:6:3",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "6140:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "6140:22:3",
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "6164:7:3",
                            },
                          ],
                          functionName: {
                            name: "abi_decode_t_uint256_fromMemory",
                            nodeType: "YulIdentifier",
                            src: "6108:31:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "6108:64:3",
                        },
                        variableNames: [
                          {
                            name: "value0",
                            nodeType: "YulIdentifier",
                            src: "6098:6:3",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              name: "abi_decode_tuple_t_uint256_fromMemory",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "5885:9:3",
                  type: "",
                },
                {
                  name: "dataEnd",
                  nodeType: "YulTypedName",
                  src: "5896:7:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "5908:6:3",
                  type: "",
                },
              ],
              src: "5838:351:3",
            },
          ],
        },
        contents:
          "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
        id: 3,
        language: "Yul",
        name: "#utility.yul",
      },
    ],
    deployedGeneratedSources: [
      {
        ast: {
          nodeType: "YulBlock",
          src: "0:6489:3",
          statements: [
            {
              body: {
                nodeType: "YulBlock",
                src: "66:40:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "77:22:3",
                    value: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "93:5:3",
                        },
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "87:5:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "87:12:3",
                    },
                    variableNames: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "77:6:3",
                      },
                    ],
                  },
                ],
              },
              name: "array_length_t_string_memory_ptr",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "49:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "length",
                  nodeType: "YulTypedName",
                  src: "59:6:3",
                  type: "",
                },
              ],
              src: "7:99:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "208:73:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "225:3:3",
                        },
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "230:6:3",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "218:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "218:19:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "218:19:3",
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "246:29:3",
                    value: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "265:3:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "270:4:3",
                          type: "",
                          value: "0x20",
                        },
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "261:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "261:14:3",
                    },
                    variableNames: [
                      {
                        name: "updated_pos",
                        nodeType: "YulIdentifier",
                        src: "246:11:3",
                      },
                    ],
                  },
                ],
              },
              name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "pos",
                  nodeType: "YulTypedName",
                  src: "180:3:3",
                  type: "",
                },
                {
                  name: "length",
                  nodeType: "YulTypedName",
                  src: "185:6:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "updated_pos",
                  nodeType: "YulTypedName",
                  src: "196:11:3",
                  type: "",
                },
              ],
              src: "112:169:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "336:258:3",
                statements: [
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "346:10:3",
                    value: {
                      kind: "number",
                      nodeType: "YulLiteral",
                      src: "355:1:3",
                      type: "",
                      value: "0",
                    },
                    variables: [
                      {
                        name: "i",
                        nodeType: "YulTypedName",
                        src: "350:1:3",
                        type: "",
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "415:63:3",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "dst",
                                    nodeType: "YulIdentifier",
                                    src: "440:3:3",
                                  },
                                  {
                                    name: "i",
                                    nodeType: "YulIdentifier",
                                    src: "445:1:3",
                                  },
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "436:3:3",
                                },
                                nodeType: "YulFunctionCall",
                                src: "436:11:3",
                              },
                              {
                                arguments: [
                                  {
                                    arguments: [
                                      {
                                        name: "src",
                                        nodeType: "YulIdentifier",
                                        src: "459:3:3",
                                      },
                                      {
                                        name: "i",
                                        nodeType: "YulIdentifier",
                                        src: "464:1:3",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "455:3:3",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "455:11:3",
                                  },
                                ],
                                functionName: {
                                  name: "mload",
                                  nodeType: "YulIdentifier",
                                  src: "449:5:3",
                                },
                                nodeType: "YulFunctionCall",
                                src: "449:18:3",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nodeType: "YulIdentifier",
                              src: "429:6:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "429:39:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "429:39:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "i",
                          nodeType: "YulIdentifier",
                          src: "376:1:3",
                        },
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "379:6:3",
                        },
                      ],
                      functionName: {
                        name: "lt",
                        nodeType: "YulIdentifier",
                        src: "373:2:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "373:13:3",
                    },
                    nodeType: "YulForLoop",
                    post: {
                      nodeType: "YulBlock",
                      src: "387:19:3",
                      statements: [
                        {
                          nodeType: "YulAssignment",
                          src: "389:15:3",
                          value: {
                            arguments: [
                              {
                                name: "i",
                                nodeType: "YulIdentifier",
                                src: "398:1:3",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "401:2:3",
                                type: "",
                                value: "32",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "394:3:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "394:10:3",
                          },
                          variableNames: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "389:1:3",
                            },
                          ],
                        },
                      ],
                    },
                    pre: {
                      nodeType: "YulBlock",
                      src: "369:3:3",
                      statements: [],
                    },
                    src: "365:113:3",
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "512:76:3",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    name: "dst",
                                    nodeType: "YulIdentifier",
                                    src: "562:3:3",
                                  },
                                  {
                                    name: "length",
                                    nodeType: "YulIdentifier",
                                    src: "567:6:3",
                                  },
                                ],
                                functionName: {
                                  name: "add",
                                  nodeType: "YulIdentifier",
                                  src: "558:3:3",
                                },
                                nodeType: "YulFunctionCall",
                                src: "558:16:3",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "576:1:3",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "mstore",
                              nodeType: "YulIdentifier",
                              src: "551:6:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "551:27:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "551:27:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "i",
                          nodeType: "YulIdentifier",
                          src: "493:1:3",
                        },
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "496:6:3",
                        },
                      ],
                      functionName: {
                        name: "gt",
                        nodeType: "YulIdentifier",
                        src: "490:2:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "490:13:3",
                    },
                    nodeType: "YulIf",
                    src: "487:101:3",
                  },
                ],
              },
              name: "copy_memory_to_memory",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "src",
                  nodeType: "YulTypedName",
                  src: "318:3:3",
                  type: "",
                },
                {
                  name: "dst",
                  nodeType: "YulTypedName",
                  src: "323:3:3",
                  type: "",
                },
                {
                  name: "length",
                  nodeType: "YulTypedName",
                  src: "328:6:3",
                  type: "",
                },
              ],
              src: "287:307:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "648:54:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "658:38:3",
                    value: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "676:5:3",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "683:2:3",
                              type: "",
                              value: "31",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "672:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "672:14:3",
                        },
                        {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "692:2:3",
                              type: "",
                              value: "31",
                            },
                          ],
                          functionName: {
                            name: "not",
                            nodeType: "YulIdentifier",
                            src: "688:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "688:7:3",
                        },
                      ],
                      functionName: {
                        name: "and",
                        nodeType: "YulIdentifier",
                        src: "668:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "668:28:3",
                    },
                    variableNames: [
                      {
                        name: "result",
                        nodeType: "YulIdentifier",
                        src: "658:6:3",
                      },
                    ],
                  },
                ],
              },
              name: "round_up_to_mul_of_32",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "631:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "result",
                  nodeType: "YulTypedName",
                  src: "641:6:3",
                  type: "",
                },
              ],
              src: "600:102:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "800:272:3",
                statements: [
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "810:53:3",
                    value: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "857:5:3",
                        },
                      ],
                      functionName: {
                        name: "array_length_t_string_memory_ptr",
                        nodeType: "YulIdentifier",
                        src: "824:32:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "824:39:3",
                    },
                    variables: [
                      {
                        name: "length",
                        nodeType: "YulTypedName",
                        src: "814:6:3",
                        type: "",
                      },
                    ],
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "872:78:3",
                    value: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "938:3:3",
                        },
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "943:6:3",
                        },
                      ],
                      functionName: {
                        name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        nodeType: "YulIdentifier",
                        src: "879:58:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "879:71:3",
                    },
                    variableNames: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "872:3:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "985:5:3",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "992:4:3",
                              type: "",
                              value: "0x20",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "981:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "981:16:3",
                        },
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "999:3:3",
                        },
                        {
                          name: "length",
                          nodeType: "YulIdentifier",
                          src: "1004:6:3",
                        },
                      ],
                      functionName: {
                        name: "copy_memory_to_memory",
                        nodeType: "YulIdentifier",
                        src: "959:21:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "959:52:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "959:52:3",
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "1020:46:3",
                    value: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "1031:3:3",
                        },
                        {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "1058:6:3",
                            },
                          ],
                          functionName: {
                            name: "round_up_to_mul_of_32",
                            nodeType: "YulIdentifier",
                            src: "1036:21:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1036:29:3",
                        },
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "1027:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1027:39:3",
                    },
                    variableNames: [
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "1020:3:3",
                      },
                    ],
                  },
                ],
              },
              name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "781:5:3",
                  type: "",
                },
                {
                  name: "pos",
                  nodeType: "YulTypedName",
                  src: "788:3:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "end",
                  nodeType: "YulTypedName",
                  src: "796:3:3",
                  type: "",
                },
              ],
              src: "708:364:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1196:195:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1206:26:3",
                    value: {
                      arguments: [
                        {
                          name: "headStart",
                          nodeType: "YulIdentifier",
                          src: "1218:9:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1229:2:3",
                          type: "",
                          value: "32",
                        },
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "1214:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1214:18:3",
                    },
                    variableNames: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "1206:4:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "1253:9:3",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1264:1:3",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "1249:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1249:17:3",
                        },
                        {
                          arguments: [
                            {
                              name: "tail",
                              nodeType: "YulIdentifier",
                              src: "1272:4:3",
                            },
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "1278:9:3",
                            },
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "1268:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1268:20:3",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "1242:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1242:47:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "1242:47:3",
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "1298:86:3",
                    value: {
                      arguments: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "1370:6:3",
                        },
                        {
                          name: "tail",
                          nodeType: "YulIdentifier",
                          src: "1379:4:3",
                        },
                      ],
                      functionName: {
                        name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                        nodeType: "YulIdentifier",
                        src: "1306:63:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1306:78:3",
                    },
                    variableNames: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "1298:4:3",
                      },
                    ],
                  },
                ],
              },
              name: "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "1168:9:3",
                  type: "",
                },
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "1180:6:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "tail",
                  nodeType: "YulTypedName",
                  src: "1191:4:3",
                  type: "",
                },
              ],
              src: "1078:313:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1437:35:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1447:19:3",
                    value: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1463:2:3",
                          type: "",
                          value: "64",
                        },
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "1457:5:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1457:9:3",
                    },
                    variableNames: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "1447:6:3",
                      },
                    ],
                  },
                ],
              },
              name: "allocate_unbounded",
              nodeType: "YulFunctionDefinition",
              returnVariables: [
                {
                  name: "memPtr",
                  nodeType: "YulTypedName",
                  src: "1430:6:3",
                  type: "",
                },
              ],
              src: "1397:75:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1567:28:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1584:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1587:1:3",
                          type: "",
                          value: "0",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "1577:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1577:12:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "1577:12:3",
                  },
                ],
              },
              name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              nodeType: "YulFunctionDefinition",
              src: "1478:117:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1690:28:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1707:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1710:1:3",
                          type: "",
                          value: "0",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "1700:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1700:12:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "1700:12:3",
                  },
                ],
              },
              name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              nodeType: "YulFunctionDefinition",
              src: "1601:117:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1769:81:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1779:65:3",
                    value: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "1794:5:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1801:42:3",
                          type: "",
                          value: "0xffffffffffffffffffffffffffffffffffffffff",
                        },
                      ],
                      functionName: {
                        name: "and",
                        nodeType: "YulIdentifier",
                        src: "1790:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1790:54:3",
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "1779:7:3",
                      },
                    ],
                  },
                ],
              },
              name: "cleanup_t_uint160",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1751:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "1761:7:3",
                  type: "",
                },
              ],
              src: "1724:126:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1901:51:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1911:35:3",
                    value: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "1940:5:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint160",
                        nodeType: "YulIdentifier",
                        src: "1922:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1922:24:3",
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "1911:7:3",
                      },
                    ],
                  },
                ],
              },
              name: "cleanup_t_address",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1883:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "1893:7:3",
                  type: "",
                },
              ],
              src: "1856:96:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2001:79:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "2058:16:3",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "2067:1:3",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "2070:1:3",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nodeType: "YulIdentifier",
                              src: "2060:6:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2060:12:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "2060:12:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "2024:5:3",
                            },
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "2049:5:3",
                                },
                              ],
                              functionName: {
                                name: "cleanup_t_address",
                                nodeType: "YulIdentifier",
                                src: "2031:17:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "2031:24:3",
                            },
                          ],
                          functionName: {
                            name: "eq",
                            nodeType: "YulIdentifier",
                            src: "2021:2:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2021:35:3",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "2014:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2014:43:3",
                    },
                    nodeType: "YulIf",
                    src: "2011:63:3",
                  },
                ],
              },
              name: "validator_revert_t_address",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1994:5:3",
                  type: "",
                },
              ],
              src: "1958:122:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2138:87:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "2148:29:3",
                    value: {
                      arguments: [
                        {
                          name: "offset",
                          nodeType: "YulIdentifier",
                          src: "2170:6:3",
                        },
                      ],
                      functionName: {
                        name: "calldataload",
                        nodeType: "YulIdentifier",
                        src: "2157:12:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2157:20:3",
                    },
                    variableNames: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "2148:5:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "2213:5:3",
                        },
                      ],
                      functionName: {
                        name: "validator_revert_t_address",
                        nodeType: "YulIdentifier",
                        src: "2186:26:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2186:33:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "2186:33:3",
                  },
                ],
              },
              name: "abi_decode_t_address",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "offset",
                  nodeType: "YulTypedName",
                  src: "2116:6:3",
                  type: "",
                },
                {
                  name: "end",
                  nodeType: "YulTypedName",
                  src: "2124:3:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "2132:5:3",
                  type: "",
                },
              ],
              src: "2086:139:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2276:32:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "2286:16:3",
                    value: {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "2297:5:3",
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "2286:7:3",
                      },
                    ],
                  },
                ],
              },
              name: "cleanup_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "2258:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "2268:7:3",
                  type: "",
                },
              ],
              src: "2231:77:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2357:79:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "2414:16:3",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "2423:1:3",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "2426:1:3",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nodeType: "YulIdentifier",
                              src: "2416:6:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2416:12:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "2416:12:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "2380:5:3",
                            },
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "2405:5:3",
                                },
                              ],
                              functionName: {
                                name: "cleanup_t_uint256",
                                nodeType: "YulIdentifier",
                                src: "2387:17:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "2387:24:3",
                            },
                          ],
                          functionName: {
                            name: "eq",
                            nodeType: "YulIdentifier",
                            src: "2377:2:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2377:35:3",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "2370:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2370:43:3",
                    },
                    nodeType: "YulIf",
                    src: "2367:63:3",
                  },
                ],
              },
              name: "validator_revert_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "2350:5:3",
                  type: "",
                },
              ],
              src: "2314:122:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2494:87:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "2504:29:3",
                    value: {
                      arguments: [
                        {
                          name: "offset",
                          nodeType: "YulIdentifier",
                          src: "2526:6:3",
                        },
                      ],
                      functionName: {
                        name: "calldataload",
                        nodeType: "YulIdentifier",
                        src: "2513:12:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2513:20:3",
                    },
                    variableNames: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "2504:5:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "2569:5:3",
                        },
                      ],
                      functionName: {
                        name: "validator_revert_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "2542:26:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2542:33:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "2542:33:3",
                  },
                ],
              },
              name: "abi_decode_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "offset",
                  nodeType: "YulTypedName",
                  src: "2472:6:3",
                  type: "",
                },
                {
                  name: "end",
                  nodeType: "YulTypedName",
                  src: "2480:3:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "2488:5:3",
                  type: "",
                },
              ],
              src: "2442:139:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2670:391:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "2716:83:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              nodeType: "YulIdentifier",
                              src: "2718:77:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2718:79:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "2718:79:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "2691:7:3",
                            },
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "2700:9:3",
                            },
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "2687:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2687:23:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "2712:2:3",
                          type: "",
                          value: "64",
                        },
                      ],
                      functionName: {
                        name: "slt",
                        nodeType: "YulIdentifier",
                        src: "2683:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2683:32:3",
                    },
                    nodeType: "YulIf",
                    src: "2680:119:3",
                  },
                  {
                    nodeType: "YulBlock",
                    src: "2809:117:3",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "2824:15:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "2838:1:3",
                          type: "",
                          value: "0",
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "2828:6:3",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "2853:63:3",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "2888:9:3",
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "2899:6:3",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "2884:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "2884:22:3",
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "2908:7:3",
                            },
                          ],
                          functionName: {
                            name: "abi_decode_t_address",
                            nodeType: "YulIdentifier",
                            src: "2863:20:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2863:53:3",
                        },
                        variableNames: [
                          {
                            name: "value0",
                            nodeType: "YulIdentifier",
                            src: "2853:6:3",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    nodeType: "YulBlock",
                    src: "2936:118:3",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "2951:16:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "2965:2:3",
                          type: "",
                          value: "32",
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "2955:6:3",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "2981:63:3",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "3016:9:3",
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "3027:6:3",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "3012:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "3012:22:3",
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "3036:7:3",
                            },
                          ],
                          functionName: {
                            name: "abi_decode_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "2991:20:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2991:53:3",
                        },
                        variableNames: [
                          {
                            name: "value1",
                            nodeType: "YulIdentifier",
                            src: "2981:6:3",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              name: "abi_decode_tuple_t_addresst_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "2632:9:3",
                  type: "",
                },
                {
                  name: "dataEnd",
                  nodeType: "YulTypedName",
                  src: "2643:7:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "2655:6:3",
                  type: "",
                },
                {
                  name: "value1",
                  nodeType: "YulTypedName",
                  src: "2663:6:3",
                  type: "",
                },
              ],
              src: "2587:474:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3109:48:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "3119:32:3",
                    value: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "3144:5:3",
                            },
                          ],
                          functionName: {
                            name: "iszero",
                            nodeType: "YulIdentifier",
                            src: "3137:6:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3137:13:3",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "3130:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3130:21:3",
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "3119:7:3",
                      },
                    ],
                  },
                ],
              },
              name: "cleanup_t_bool",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "3091:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "3101:7:3",
                  type: "",
                },
              ],
              src: "3067:90:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3222:50:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "3239:3:3",
                        },
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "3259:5:3",
                            },
                          ],
                          functionName: {
                            name: "cleanup_t_bool",
                            nodeType: "YulIdentifier",
                            src: "3244:14:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3244:21:3",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "3232:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3232:34:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "3232:34:3",
                  },
                ],
              },
              name: "abi_encode_t_bool_to_t_bool_fromStack",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "3210:5:3",
                  type: "",
                },
                {
                  name: "pos",
                  nodeType: "YulTypedName",
                  src: "3217:3:3",
                  type: "",
                },
              ],
              src: "3163:109:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3370:118:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "3380:26:3",
                    value: {
                      arguments: [
                        {
                          name: "headStart",
                          nodeType: "YulIdentifier",
                          src: "3392:9:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "3403:2:3",
                          type: "",
                          value: "32",
                        },
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "3388:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3388:18:3",
                    },
                    variableNames: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "3380:4:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "3454:6:3",
                        },
                        {
                          arguments: [
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "3467:9:3",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3478:1:3",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "3463:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3463:17:3",
                        },
                      ],
                      functionName: {
                        name: "abi_encode_t_bool_to_t_bool_fromStack",
                        nodeType: "YulIdentifier",
                        src: "3416:37:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3416:65:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "3416:65:3",
                  },
                ],
              },
              name: "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "3342:9:3",
                  type: "",
                },
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "3354:6:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "tail",
                  nodeType: "YulTypedName",
                  src: "3365:4:3",
                  type: "",
                },
              ],
              src: "3278:210:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3559:53:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "3576:3:3",
                        },
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "3599:5:3",
                            },
                          ],
                          functionName: {
                            name: "cleanup_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "3581:17:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3581:24:3",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "3569:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3569:37:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "3569:37:3",
                  },
                ],
              },
              name: "abi_encode_t_uint256_to_t_uint256_fromStack",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "3547:5:3",
                  type: "",
                },
                {
                  name: "pos",
                  nodeType: "YulTypedName",
                  src: "3554:3:3",
                  type: "",
                },
              ],
              src: "3494:118:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3716:124:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "3726:26:3",
                    value: {
                      arguments: [
                        {
                          name: "headStart",
                          nodeType: "YulIdentifier",
                          src: "3738:9:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "3749:2:3",
                          type: "",
                          value: "32",
                        },
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "3734:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3734:18:3",
                    },
                    variableNames: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "3726:4:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "3806:6:3",
                        },
                        {
                          arguments: [
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "3819:9:3",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3830:1:3",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "3815:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3815:17:3",
                        },
                      ],
                      functionName: {
                        name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                        nodeType: "YulIdentifier",
                        src: "3762:43:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3762:71:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "3762:71:3",
                  },
                ],
              },
              name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "3688:9:3",
                  type: "",
                },
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "3700:6:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "tail",
                  nodeType: "YulTypedName",
                  src: "3711:4:3",
                  type: "",
                },
              ],
              src: "3618:222:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3946:519:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "3992:83:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              nodeType: "YulIdentifier",
                              src: "3994:77:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3994:79:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "3994:79:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "3967:7:3",
                            },
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "3976:9:3",
                            },
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "3963:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3963:23:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "3988:2:3",
                          type: "",
                          value: "96",
                        },
                      ],
                      functionName: {
                        name: "slt",
                        nodeType: "YulIdentifier",
                        src: "3959:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3959:32:3",
                    },
                    nodeType: "YulIf",
                    src: "3956:119:3",
                  },
                  {
                    nodeType: "YulBlock",
                    src: "4085:117:3",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "4100:15:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4114:1:3",
                          type: "",
                          value: "0",
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "4104:6:3",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "4129:63:3",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "4164:9:3",
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "4175:6:3",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "4160:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4160:22:3",
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "4184:7:3",
                            },
                          ],
                          functionName: {
                            name: "abi_decode_t_address",
                            nodeType: "YulIdentifier",
                            src: "4139:20:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4139:53:3",
                        },
                        variableNames: [
                          {
                            name: "value0",
                            nodeType: "YulIdentifier",
                            src: "4129:6:3",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    nodeType: "YulBlock",
                    src: "4212:118:3",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "4227:16:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4241:2:3",
                          type: "",
                          value: "32",
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "4231:6:3",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "4257:63:3",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "4292:9:3",
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "4303:6:3",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "4288:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4288:22:3",
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "4312:7:3",
                            },
                          ],
                          functionName: {
                            name: "abi_decode_t_address",
                            nodeType: "YulIdentifier",
                            src: "4267:20:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4267:53:3",
                        },
                        variableNames: [
                          {
                            name: "value1",
                            nodeType: "YulIdentifier",
                            src: "4257:6:3",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    nodeType: "YulBlock",
                    src: "4340:118:3",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "4355:16:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4369:2:3",
                          type: "",
                          value: "64",
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "4359:6:3",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "4385:63:3",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "4420:9:3",
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "4431:6:3",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "4416:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4416:22:3",
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "4440:7:3",
                            },
                          ],
                          functionName: {
                            name: "abi_decode_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "4395:20:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4395:53:3",
                        },
                        variableNames: [
                          {
                            name: "value2",
                            nodeType: "YulIdentifier",
                            src: "4385:6:3",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              name: "abi_decode_tuple_t_addresst_addresst_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "3900:9:3",
                  type: "",
                },
                {
                  name: "dataEnd",
                  nodeType: "YulTypedName",
                  src: "3911:7:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "3923:6:3",
                  type: "",
                },
                {
                  name: "value1",
                  nodeType: "YulTypedName",
                  src: "3931:6:3",
                  type: "",
                },
                {
                  name: "value2",
                  nodeType: "YulTypedName",
                  src: "3939:6:3",
                  type: "",
                },
              ],
              src: "3846:619:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "4537:263:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "4583:83:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              nodeType: "YulIdentifier",
                              src: "4585:77:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "4585:79:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "4585:79:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "4558:7:3",
                            },
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "4567:9:3",
                            },
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "4554:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4554:23:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4579:2:3",
                          type: "",
                          value: "32",
                        },
                      ],
                      functionName: {
                        name: "slt",
                        nodeType: "YulIdentifier",
                        src: "4550:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4550:32:3",
                    },
                    nodeType: "YulIf",
                    src: "4547:119:3",
                  },
                  {
                    nodeType: "YulBlock",
                    src: "4676:117:3",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "4691:15:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4705:1:3",
                          type: "",
                          value: "0",
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "4695:6:3",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "4720:63:3",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "4755:9:3",
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "4766:6:3",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "4751:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4751:22:3",
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "4775:7:3",
                            },
                          ],
                          functionName: {
                            name: "abi_decode_t_address",
                            nodeType: "YulIdentifier",
                            src: "4730:20:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4730:53:3",
                        },
                        variableNames: [
                          {
                            name: "value0",
                            nodeType: "YulIdentifier",
                            src: "4720:6:3",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              name: "abi_decode_tuple_t_address",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "4507:9:3",
                  type: "",
                },
                {
                  name: "dataEnd",
                  nodeType: "YulTypedName",
                  src: "4518:7:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "4530:6:3",
                  type: "",
                },
              ],
              src: "4471:329:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "4889:391:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "4935:83:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              nodeType: "YulIdentifier",
                              src: "4937:77:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "4937:79:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "4937:79:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "4910:7:3",
                            },
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "4919:9:3",
                            },
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "4906:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4906:23:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4931:2:3",
                          type: "",
                          value: "64",
                        },
                      ],
                      functionName: {
                        name: "slt",
                        nodeType: "YulIdentifier",
                        src: "4902:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4902:32:3",
                    },
                    nodeType: "YulIf",
                    src: "4899:119:3",
                  },
                  {
                    nodeType: "YulBlock",
                    src: "5028:117:3",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "5043:15:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5057:1:3",
                          type: "",
                          value: "0",
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "5047:6:3",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "5072:63:3",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "5107:9:3",
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "5118:6:3",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "5103:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "5103:22:3",
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "5127:7:3",
                            },
                          ],
                          functionName: {
                            name: "abi_decode_t_address",
                            nodeType: "YulIdentifier",
                            src: "5082:20:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5082:53:3",
                        },
                        variableNames: [
                          {
                            name: "value0",
                            nodeType: "YulIdentifier",
                            src: "5072:6:3",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    nodeType: "YulBlock",
                    src: "5155:118:3",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "5170:16:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5184:2:3",
                          type: "",
                          value: "32",
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "5174:6:3",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "5200:63:3",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "5235:9:3",
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "5246:6:3",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "5231:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "5231:22:3",
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "5255:7:3",
                            },
                          ],
                          functionName: {
                            name: "abi_decode_t_address",
                            nodeType: "YulIdentifier",
                            src: "5210:20:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5210:53:3",
                        },
                        variableNames: [
                          {
                            name: "value1",
                            nodeType: "YulIdentifier",
                            src: "5200:6:3",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              name: "abi_decode_tuple_t_addresst_address",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "4851:9:3",
                  type: "",
                },
                {
                  name: "dataEnd",
                  nodeType: "YulTypedName",
                  src: "4862:7:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "4874:6:3",
                  type: "",
                },
                {
                  name: "value1",
                  nodeType: "YulTypedName",
                  src: "4882:6:3",
                  type: "",
                },
              ],
              src: "4806:474:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5314:152:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5331:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5334:77:3",
                          type: "",
                          value:
                            "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "5324:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5324:88:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5324:88:3",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5428:1:3",
                          type: "",
                          value: "4",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5431:4:3",
                          type: "",
                          value: "0x22",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "5421:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5421:15:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5421:15:3",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5452:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5455:4:3",
                          type: "",
                          value: "0x24",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "5445:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5445:15:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5445:15:3",
                  },
                ],
              },
              name: "panic_error_0x22",
              nodeType: "YulFunctionDefinition",
              src: "5286:180:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5523:269:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "5533:22:3",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "5547:4:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5553:1:3",
                          type: "",
                          value: "2",
                        },
                      ],
                      functionName: {
                        name: "div",
                        nodeType: "YulIdentifier",
                        src: "5543:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5543:12:3",
                    },
                    variableNames: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5533:6:3",
                      },
                    ],
                  },
                  {
                    nodeType: "YulVariableDeclaration",
                    src: "5564:38:3",
                    value: {
                      arguments: [
                        {
                          name: "data",
                          nodeType: "YulIdentifier",
                          src: "5594:4:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5600:1:3",
                          type: "",
                          value: "1",
                        },
                      ],
                      functionName: {
                        name: "and",
                        nodeType: "YulIdentifier",
                        src: "5590:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5590:12:3",
                    },
                    variables: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulTypedName",
                        src: "5568:18:3",
                        type: "",
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "5641:51:3",
                      statements: [
                        {
                          nodeType: "YulAssignment",
                          src: "5655:27:3",
                          value: {
                            arguments: [
                              {
                                name: "length",
                                nodeType: "YulIdentifier",
                                src: "5669:6:3",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "5677:4:3",
                                type: "",
                                value: "0x7f",
                              },
                            ],
                            functionName: {
                              name: "and",
                              nodeType: "YulIdentifier",
                              src: "5665:3:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5665:17:3",
                          },
                          variableNames: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "5655:6:3",
                            },
                          ],
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "outOfPlaceEncoding",
                          nodeType: "YulIdentifier",
                          src: "5621:18:3",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "5614:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5614:26:3",
                    },
                    nodeType: "YulIf",
                    src: "5611:81:3",
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "5744:42:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "panic_error_0x22",
                              nodeType: "YulIdentifier",
                              src: "5758:16:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5758:18:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "5758:18:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "outOfPlaceEncoding",
                          nodeType: "YulIdentifier",
                          src: "5708:18:3",
                        },
                        {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "5731:6:3",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5739:2:3",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "5728:2:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5728:14:3",
                        },
                      ],
                      functionName: {
                        name: "eq",
                        nodeType: "YulIdentifier",
                        src: "5705:2:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5705:38:3",
                    },
                    nodeType: "YulIf",
                    src: "5702:84:3",
                  },
                ],
              },
              name: "extract_byte_array_length",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "data",
                  nodeType: "YulTypedName",
                  src: "5507:4:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "length",
                  nodeType: "YulTypedName",
                  src: "5516:6:3",
                  type: "",
                },
              ],
              src: "5472:320:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5826:152:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5843:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5846:77:3",
                          type: "",
                          value:
                            "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "5836:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5836:88:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5836:88:3",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5940:1:3",
                          type: "",
                          value: "4",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5943:4:3",
                          type: "",
                          value: "0x11",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "5933:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5933:15:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5933:15:3",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5964:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5967:4:3",
                          type: "",
                          value: "0x24",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "5957:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5957:15:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5957:15:3",
                  },
                ],
              },
              name: "panic_error_0x11",
              nodeType: "YulFunctionDefinition",
              src: "5798:180:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "6029:146:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "6039:25:3",
                    value: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "6062:1:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "6044:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "6044:20:3",
                    },
                    variableNames: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "6039:1:3",
                      },
                    ],
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "6073:25:3",
                    value: {
                      arguments: [
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "6096:1:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "6078:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "6078:20:3",
                    },
                    variableNames: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "6073:1:3",
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "6120:22:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "panic_error_0x11",
                              nodeType: "YulIdentifier",
                              src: "6122:16:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "6122:18:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "6122:18:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "6114:1:3",
                        },
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "6117:1:3",
                        },
                      ],
                      functionName: {
                        name: "lt",
                        nodeType: "YulIdentifier",
                        src: "6111:2:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "6111:8:3",
                    },
                    nodeType: "YulIf",
                    src: "6108:34:3",
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "6152:17:3",
                    value: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "6164:1:3",
                        },
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "6167:1:3",
                        },
                      ],
                      functionName: {
                        name: "sub",
                        nodeType: "YulIdentifier",
                        src: "6160:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "6160:9:3",
                    },
                    variableNames: [
                      {
                        name: "diff",
                        nodeType: "YulIdentifier",
                        src: "6152:4:3",
                      },
                    ],
                  },
                ],
              },
              name: "checked_sub_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "x",
                  nodeType: "YulTypedName",
                  src: "6015:1:3",
                  type: "",
                },
                {
                  name: "y",
                  nodeType: "YulTypedName",
                  src: "6018:1:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "diff",
                  nodeType: "YulTypedName",
                  src: "6024:4:3",
                  type: "",
                },
              ],
              src: "5984:191:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "6225:261:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "6235:25:3",
                    value: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "6258:1:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "6240:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "6240:20:3",
                    },
                    variableNames: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "6235:1:3",
                      },
                    ],
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "6269:25:3",
                    value: {
                      arguments: [
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "6292:1:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "6274:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "6274:20:3",
                    },
                    variableNames: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "6269:1:3",
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "6432:22:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "panic_error_0x11",
                              nodeType: "YulIdentifier",
                              src: "6434:16:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "6434:18:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "6434:18:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "6353:1:3",
                        },
                        {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "6360:66:3",
                              type: "",
                              value:
                                "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                            },
                            {
                              name: "y",
                              nodeType: "YulIdentifier",
                              src: "6428:1:3",
                            },
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "6356:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "6356:74:3",
                        },
                      ],
                      functionName: {
                        name: "gt",
                        nodeType: "YulIdentifier",
                        src: "6350:2:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "6350:81:3",
                    },
                    nodeType: "YulIf",
                    src: "6347:107:3",
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "6464:16:3",
                    value: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "6475:1:3",
                        },
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "6478:1:3",
                        },
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "6471:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "6471:9:3",
                    },
                    variableNames: [
                      {
                        name: "sum",
                        nodeType: "YulIdentifier",
                        src: "6464:3:3",
                      },
                    ],
                  },
                ],
              },
              name: "checked_add_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "x",
                  nodeType: "YulTypedName",
                  src: "6212:1:3",
                  type: "",
                },
                {
                  name: "y",
                  nodeType: "YulTypedName",
                  src: "6215:1:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "sum",
                  nodeType: "YulTypedName",
                  src: "6221:3:3",
                  type: "",
                },
              ],
              src: "6181:305:3",
            },
          ],
        },
        contents:
          "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n}\n",
        id: 3,
        language: "Yul",
        name: "#utility.yul",
      },
    ],
    sourceMap:
      "63:2047:0:-:0;;;127:37;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;185:46;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;256:29;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;697:168;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;758:14;744:11;:28;;;;843:14;819:9;:21;829:10;819:21;;;;;;;;;;;;;;;:38;;;;697:168;63:2047;;7:99:3;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:107::-;1100:8;1150:5;1144:4;1140:16;1119:37;;1056:107;;;;:::o;1169:393::-;1238:6;1288:1;1276:10;1272:18;1311:97;1341:66;1330:9;1311:97;:::i;:::-;1429:39;1459:8;1448:9;1429:39;:::i;:::-;1417:51;;1501:4;1497:9;1490:5;1486:21;1477:30;;1550:4;1540:8;1536:19;1529:5;1526:30;1516:40;;1245:317;;1169:393;;;;;:::o;1568:77::-;1605:7;1634:5;1623:16;;1568:77;;;:::o;1651:60::-;1679:3;1700:5;1693:12;;1651:60;;;:::o;1717:142::-;1767:9;1800:53;1818:34;1827:24;1845:5;1827:24;:::i;:::-;1818:34;:::i;:::-;1800:53;:::i;:::-;1787:66;;1717:142;;;:::o;1865:75::-;1908:3;1929:5;1922:12;;1865:75;;;:::o;1946:269::-;2056:39;2087:7;2056:39;:::i;:::-;2117:91;2166:41;2190:16;2166:41;:::i;:::-;2158:6;2151:4;2145:11;2117:91;:::i;:::-;2111:4;2104:105;2022:193;1946:269;;;:::o;2221:73::-;2266:3;2221:73;:::o;2300:189::-;2377:32;;:::i;:::-;2418:65;2476:6;2468;2462:4;2418:65;:::i;:::-;2353:136;2300:189;;:::o;2495:186::-;2555:120;2572:3;2565:5;2562:14;2555:120;;;2626:39;2663:1;2656:5;2626:39;:::i;:::-;2599:1;2592:5;2588:13;2579:22;;2555:120;;;2495:186;;:::o;2687:543::-;2788:2;2783:3;2780:11;2777:446;;;2822:38;2854:5;2822:38;:::i;:::-;2906:29;2924:10;2906:29;:::i;:::-;2896:8;2892:44;3089:2;3077:10;3074:18;3071:49;;;3110:8;3095:23;;3071:49;3133:80;3189:22;3207:3;3189:22;:::i;:::-;3179:8;3175:37;3162:11;3133:80;:::i;:::-;2792:431;;2777:446;2687:543;;;:::o;3236:117::-;3290:8;3340:5;3334:4;3330:16;3309:37;;3236:117;;;;:::o;3359:169::-;3403:6;3436:51;3484:1;3480:6;3472:5;3469:1;3465:13;3436:51;:::i;:::-;3432:56;3517:4;3511;3507:15;3497:25;;3410:118;3359:169;;;;:::o;3533:295::-;3609:4;3755:29;3780:3;3774:4;3755:29;:::i;:::-;3747:37;;3817:3;3814:1;3810:11;3804:4;3801:21;3793:29;;3533:295;;;;:::o;3833:1395::-;3950:37;3983:3;3950:37;:::i;:::-;4052:18;4044:6;4041:30;4038:56;;;4074:18;;:::i;:::-;4038:56;4118:38;4150:4;4144:11;4118:38;:::i;:::-;4203:67;4263:6;4255;4249:4;4203:67;:::i;:::-;4297:1;4321:4;4308:17;;4353:2;4345:6;4342:14;4370:1;4365:618;;;;5027:1;5044:6;5041:77;;;5093:9;5088:3;5084:19;5078:26;5069:35;;5041:77;5144:67;5204:6;5197:5;5144:67;:::i;:::-;5138:4;5131:81;5000:222;4335:887;;4365:618;4417:4;4413:9;4405:6;4401:22;4451:37;4483:4;4451:37;:::i;:::-;4510:1;4524:208;4538:7;4535:1;4532:14;4524:208;;;4617:9;4612:3;4608:19;4602:26;4594:6;4587:42;4668:1;4660:6;4656:14;4646:24;;4715:2;4704:9;4700:18;4687:31;;4561:4;4558:1;4554:12;4549:17;;4524:208;;;4760:6;4751:7;4748:19;4745:179;;;4818:9;4813:3;4809:19;4803:26;4861:48;4903:4;4895:6;4891:17;4880:9;4861:48;:::i;:::-;4853:6;4846:64;4768:156;4745:179;4970:1;4966;4958:6;4954:14;4950:22;4944:4;4937:36;4372:611;;;4335:887;;3925:1303;;;3833:1395;;:::o;5315:117::-;5424:1;5421;5414:12;5561:122;5634:24;5652:5;5634:24;:::i;:::-;5627:5;5624:35;5614:63;;5673:1;5670;5663:12;5614:63;5561:122;:::o;5689:143::-;5746:5;5777:6;5771:13;5762:22;;5793:33;5820:5;5793:33;:::i;:::-;5689:143;;;;:::o;5838:351::-;5908:6;5957:2;5945:9;5936:7;5932:23;5928:32;5925:119;;;5963:79;;:::i;:::-;5925:119;6083:1;6108:64;6164:7;6155:6;6144:9;6140:22;6108:64;:::i;:::-;6098:74;;6054:128;5838:351;;;;:::o;63:2047:0:-;;;;;;;",
    deployedSourceMap:
      "63:2047:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;127:37;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1340:239;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;94:26;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1608:499;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;185:46;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;310:44;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;256:29;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;899:417;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;361:64;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;127:37;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1340:239::-;1425:12;1489:6;1455:9;:21;1465:10;1455:21;;;;;;;;;;;;;;;:31;1477:8;1455:31;;;;;;;;;;;;;;;:40;;;;1532:8;1511:38;;1520:10;1511:38;;;1542:6;1511:38;;;;;;:::i;:::-;;;;;;;;1567:4;1560:11;;1340:239;;;;:::o;94:26::-;;;;:::o;1608:499::-;1724:12;1767:9;:16;1777:5;1767:16;;;;;;;;;;;;;;;;1757:6;:26;;1749:35;;;;;;1813:9;:16;1823:5;1813:16;;;;;;;;;;;;;;;:28;1830:10;1813:28;;;;;;;;;;;;;;;;1803:6;:38;;1795:47;;;;;;1906:6;1886:9;:16;1896:5;1886:16;;;;;;;;;;;;;;;;:26;;;;;;;:::i;:::-;;;;;;;;1941:6;1923:9;:14;1933:3;1923:14;;;;;;;;;;;;;;;;:24;;;;;;;:::i;:::-;;;;;;;;2025:6;1993:9;:16;2003:5;1993:16;;;;;;;;;;;;;;;:28;2010:10;1993:28;;;;;;;;;;;;;;;;:38;;;;;;;:::i;:::-;;;;;;;;2065:3;2049:28;;2058:5;2049:28;;;2070:6;2049:28;;;;;;:::i;:::-;;;;;;;;2095:4;2088:11;;1608:499;;;;;:::o;185:46::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;310:44::-;;;;;;;;;;;;;;;;;:::o;256:29::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;899:417::-;980:12;1096:6;1071:9;:21;1081:10;1071:21;;;;;;;;;;;;;;;;:31;;1063:40;;;;;;1139:6;1114:9;:21;1124:10;1114:21;;;;;;;;;;;;;;;;:31;;;;;;;:::i;:::-;;;;;;;;1174:6;1156:9;:14;1166:3;1156:14;;;;;;;;;;;;;;;;:24;;;;;;;:::i;:::-;;;;;;;;1244:3;1223:33;;1232:10;1223:33;;;1249:6;1223:33;;;;;;:::i;:::-;;;;;;;;1304:4;1297:11;;899:417;;;;:::o;361:64::-;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;7:99:3:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:307::-;355:1;365:113;379:6;376:1;373:13;365:113;;;464:1;459:3;455:11;449:18;445:1;440:3;436:11;429:39;401:2;398:1;394:10;389:15;;365:113;;;496:6;493:1;490:13;487:101;;;576:1;567:6;562:3;558:16;551:27;487:101;336:258;287:307;;;:::o;600:102::-;641:6;692:2;688:7;683:2;676:5;672:14;668:28;658:38;;600:102;;;:::o;708:364::-;796:3;824:39;857:5;824:39;:::i;:::-;879:71;943:6;938:3;879:71;:::i;:::-;872:78;;959:52;1004:6;999:3;992:4;985:5;981:16;959:52;:::i;:::-;1036:29;1058:6;1036:29;:::i;:::-;1031:3;1027:39;1020:46;;800:272;708:364;;;;:::o;1078:313::-;1191:4;1229:2;1218:9;1214:18;1206:26;;1278:9;1272:4;1268:20;1264:1;1253:9;1249:17;1242:47;1306:78;1379:4;1370:6;1306:78;:::i;:::-;1298:86;;1078:313;;;;:::o;1478:117::-;1587:1;1584;1577:12;1724:126;1761:7;1801:42;1794:5;1790:54;1779:65;;1724:126;;;:::o;1856:96::-;1893:7;1922:24;1940:5;1922:24;:::i;:::-;1911:35;;1856:96;;;:::o;1958:122::-;2031:24;2049:5;2031:24;:::i;:::-;2024:5;2021:35;2011:63;;2070:1;2067;2060:12;2011:63;1958:122;:::o;2086:139::-;2132:5;2170:6;2157:20;2148:29;;2186:33;2213:5;2186:33;:::i;:::-;2086:139;;;;:::o;2231:77::-;2268:7;2297:5;2286:16;;2231:77;;;:::o;2314:122::-;2387:24;2405:5;2387:24;:::i;:::-;2380:5;2377:35;2367:63;;2426:1;2423;2416:12;2367:63;2314:122;:::o;2442:139::-;2488:5;2526:6;2513:20;2504:29;;2542:33;2569:5;2542:33;:::i;:::-;2442:139;;;;:::o;2587:474::-;2655:6;2663;2712:2;2700:9;2691:7;2687:23;2683:32;2680:119;;;2718:79;;:::i;:::-;2680:119;2838:1;2863:53;2908:7;2899:6;2888:9;2884:22;2863:53;:::i;:::-;2853:63;;2809:117;2965:2;2991:53;3036:7;3027:6;3016:9;3012:22;2991:53;:::i;:::-;2981:63;;2936:118;2587:474;;;;;:::o;3067:90::-;3101:7;3144:5;3137:13;3130:21;3119:32;;3067:90;;;:::o;3163:109::-;3244:21;3259:5;3244:21;:::i;:::-;3239:3;3232:34;3163:109;;:::o;3278:210::-;3365:4;3403:2;3392:9;3388:18;3380:26;;3416:65;3478:1;3467:9;3463:17;3454:6;3416:65;:::i;:::-;3278:210;;;;:::o;3494:118::-;3581:24;3599:5;3581:24;:::i;:::-;3576:3;3569:37;3494:118;;:::o;3618:222::-;3711:4;3749:2;3738:9;3734:18;3726:26;;3762:71;3830:1;3819:9;3815:17;3806:6;3762:71;:::i;:::-;3618:222;;;;:::o;3846:619::-;3923:6;3931;3939;3988:2;3976:9;3967:7;3963:23;3959:32;3956:119;;;3994:79;;:::i;:::-;3956:119;4114:1;4139:53;4184:7;4175:6;4164:9;4160:22;4139:53;:::i;:::-;4129:63;;4085:117;4241:2;4267:53;4312:7;4303:6;4292:9;4288:22;4267:53;:::i;:::-;4257:63;;4212:118;4369:2;4395:53;4440:7;4431:6;4420:9;4416:22;4395:53;:::i;:::-;4385:63;;4340:118;3846:619;;;;;:::o;4471:329::-;4530:6;4579:2;4567:9;4558:7;4554:23;4550:32;4547:119;;;4585:79;;:::i;:::-;4547:119;4705:1;4730:53;4775:7;4766:6;4755:9;4751:22;4730:53;:::i;:::-;4720:63;;4676:117;4471:329;;;;:::o;4806:474::-;4874:6;4882;4931:2;4919:9;4910:7;4906:23;4902:32;4899:119;;;4937:79;;:::i;:::-;4899:119;5057:1;5082:53;5127:7;5118:6;5107:9;5103:22;5082:53;:::i;:::-;5072:63;;5028:117;5184:2;5210:53;5255:7;5246:6;5235:9;5231:22;5210:53;:::i;:::-;5200:63;;5155:118;4806:474;;;;;:::o;5286:180::-;5334:77;5331:1;5324:88;5431:4;5428:1;5421:15;5455:4;5452:1;5445:15;5472:320;5516:6;5553:1;5547:4;5543:12;5533:22;;5600:1;5594:4;5590:12;5621:18;5611:81;;5677:4;5669:6;5665:17;5655:27;;5611:81;5739:2;5731:6;5728:14;5708:18;5705:38;5702:84;;5758:18;;:::i;:::-;5702:84;5523:269;5472:320;;;:::o;5798:180::-;5846:77;5843:1;5836:88;5943:4;5940:1;5933:15;5967:4;5964:1;5957:15;5984:191;6024:4;6044:20;6062:1;6044:20;:::i;:::-;6039:25;;6078:20;6096:1;6078:20;:::i;:::-;6073:25;;6117:1;6114;6111:8;6108:34;;;6122:18;;:::i;:::-;6108:34;6167:1;6164;6160:9;6152:17;;5984:191;;;;:::o;6181:305::-;6221:3;6240:20;6258:1;6240:20;:::i;:::-;6235:25;;6274:20;6292:1;6274:20;:::i;:::-;6269:25;;6428:1;6360:66;6356:74;6353:1;6350:81;6347:107;;;6434:18;;:::i;:::-;6347:107;6478:1;6475;6471:9;6464:16;;6181:305;;;;:::o",
    source:
      '// SPDX-License-Identifier: MiT\r\n\r\npragma solidity ^0.8.10;\r\n\r\ncontract MmsToken {\r\n    uint256 public totalSupply;\r\n    string public name = "MmsToken"; // token name\r\n    string public standard = "MmsToken v1.0"; // token standard\r\n    string public symbol = "KG35"; // token symbol\r\n\r\n    mapping(address => uint256) public balanceOf;\r\n    mapping(address => mapping(address => uint256)) public allowance;\r\n\r\n    event Transfer(address indexed _from, address indexed _to, uint256 _value);\r\n    event Approval(\r\n        address indexed _owner,\r\n        address indexed _spender,\r\n        uint256 _value\r\n    );\r\n\r\n    // consrtuctor to initialize supply with iniialSupply\r\n    constructor(uint256 _initialSupply) {\r\n        totalSupply = _initialSupply;\r\n        // allocate initial supply\r\n        balanceOf[msg.sender] = _initialSupply;\r\n    }\r\n\r\n    // transfer function\r\n    function transfer(address _to, uint256 _value)\r\n        public\r\n        returns (bool success)\r\n    {\r\n        // Exception if account doesn\'t have enough\r\n        require(balanceOf[msg.sender] >= _value);\r\n        balanceOf[msg.sender] -= _value;\r\n        balanceOf[_to] += _value;\r\n        // transfer event\r\n        emit Transfer(msg.sender, _to, _value);\r\n        // Returns a boolean\r\n        return true;\r\n    }\r\n\r\n    // approve\r\n    function approve(address _spender, uint256 _value)\r\n        public\r\n        returns (bool success)\r\n    {\r\n        allowance[msg.sender][_spender] = _value;\r\n        emit Approval(msg.sender, _spender, _value);\r\n        return true;\r\n    }\r\n\r\n    // transferfrom\r\n    function transferFrom(\r\n        address _from,\r\n        address _to,\r\n        uint256 _value\r\n    ) public returns (bool success) {\r\n        require(_value <= balanceOf[_from]);\r\n        require(_value <= allowance[_from][msg.sender]);\r\n\r\n        // change the balance\r\n        balanceOf[_from] -= _value;\r\n        balanceOf[_to] += _value;\r\n\r\n        // update the allowance\r\n        allowance[_from][msg.sender] -= _value;\r\n\r\n        emit Transfer(_from, _to, _value);\r\n        return true;\r\n    }\r\n}\r\n',
    sourcePath:
      "E:\\sem 7\\BT\\Practical\\practical-1\\token_19IT035\\contracts\\MmsToken.sol",
    ast: {
      absolutePath: "project:/contracts/MmsToken.sol",
      exportedSymbols: {
        MmsToken: [185],
      },
      id: 186,
      license: "MiT",
      nodeType: "SourceUnit",
      nodes: [
        {
          id: 1,
          literals: ["solidity", "^", "0.8", ".10"],
          nodeType: "PragmaDirective",
          src: "35:24:0",
        },
        {
          abstract: false,
          baseContracts: [],
          canonicalName: "MmsToken",
          contractDependencies: [],
          contractKind: "contract",
          fullyImplemented: true,
          id: 185,
          linearizedBaseContracts: [185],
          name: "MmsToken",
          nameLocation: "72:14:0",
          nodeType: "ContractDefinition",
          nodes: [
            {
              constant: false,
              functionSelector: "18160ddd",
              id: 3,
              mutability: "mutable",
              name: "totalSupply",
              nameLocation: "109:11:0",
              nodeType: "VariableDeclaration",
              scope: 185,
              src: "94:26:0",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
              typeName: {
                id: 2,
                name: "uint256",
                nodeType: "ElementaryTypeName",
                src: "94:7:0",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
              },
              visibility: "public",
            },
            {
              constant: false,
              functionSelector: "06fdde03",
              id: 6,
              mutability: "mutable",
              name: "name",
              nameLocation: "141:4:0",
              nodeType: "VariableDeclaration",
              scope: 185,
              src: "127:37:0",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_string_storage",
                typeString: "string",
              },
              typeName: {
                id: 4,
                name: "string",
                nodeType: "ElementaryTypeName",
                src: "127:6:0",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
              },
              value: {
                hexValue: "4b727574696b5f31394954303335",
                id: 5,
                isConstant: false,
                isLValue: false,
                isPure: true,
                kind: "string",
                lValueRequested: false,
                nodeType: "Literal",
                src: "148:16:0",
                typeDescriptions: {
                  typeIdentifier:
                    "t_stringliteral_07010d8821691e6f2f2f502f0ba33cdf30b2dfcb91a85f47bdf9580d7ff2064e",
                  typeString: 'literal_string "MmsToken"',
                },
                value: "MmsToken",
              },
              visibility: "public",
            },
            {
              constant: false,
              functionSelector: "5a3b7e42",
              id: 9,
              mutability: "mutable",
              name: "standard",
              nameLocation: "199:8:0",
              nodeType: "VariableDeclaration",
              scope: 185,
              src: "185:46:0",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_string_storage",
                typeString: "string",
              },
              typeName: {
                id: 7,
                name: "string",
                nodeType: "ElementaryTypeName",
                src: "185:6:0",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
              },
              value: {
                hexValue: "4b727574696b5f313949543033352076312e30",
                id: 8,
                isConstant: false,
                isLValue: false,
                isPure: true,
                kind: "string",
                lValueRequested: false,
                nodeType: "Literal",
                src: "210:21:0",
                typeDescriptions: {
                  typeIdentifier:
                    "t_stringliteral_e737f1daffa23d2f61f1b0a4f3f8c9045242e95f3b3a0647f8362da15b56ef4d",
                  typeString: 'literal_string "MmsToken v1.0"',
                },
                value: "MmsToken v1.0",
              },
              visibility: "public",
            },
            {
              constant: false,
              functionSelector: "95d89b41",
              id: 12,
              mutability: "mutable",
              name: "symbol",
              nameLocation: "270:6:0",
              nodeType: "VariableDeclaration",
              scope: 185,
              src: "256:29:0",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_string_storage",
                typeString: "string",
              },
              typeName: {
                id: 10,
                name: "string",
                nodeType: "ElementaryTypeName",
                src: "256:6:0",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
              },
              value: {
                hexValue: "4b473335",
                id: 11,
                isConstant: false,
                isLValue: false,
                isPure: true,
                kind: "string",
                lValueRequested: false,
                nodeType: "Literal",
                src: "279:6:0",
                typeDescriptions: {
                  typeIdentifier:
                    "t_stringliteral_9bee3a6c10b909812c125038487fdf40f0aa0e68049d127b469490d2954f4908",
                  typeString: 'literal_string "KG35"',
                },
                value: "KG35",
              },
              visibility: "public",
            },
            {
              constant: false,
              functionSelector: "70a08231",
              id: 16,
              mutability: "mutable",
              name: "balanceOf",
              nameLocation: "345:9:0",
              nodeType: "VariableDeclaration",
              scope: 185,
              src: "310:44:0",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                typeString: "mapping(address => uint256)",
              },
              typeName: {
                id: 15,
                keyType: {
                  id: 13,
                  name: "address",
                  nodeType: "ElementaryTypeName",
                  src: "318:7:0",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                },
                nodeType: "Mapping",
                src: "310:27:0",
                typeDescriptions: {
                  typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                  typeString: "mapping(address => uint256)",
                },
                valueType: {
                  id: 14,
                  name: "uint256",
                  nodeType: "ElementaryTypeName",
                  src: "329:7:0",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                },
              },
              visibility: "public",
            },
            {
              constant: false,
              functionSelector: "dd62ed3e",
              id: 22,
              mutability: "mutable",
              name: "allowance",
              nameLocation: "416:9:0",
              nodeType: "VariableDeclaration",
              scope: 185,
              src: "361:64:0",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier:
                  "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                typeString: "mapping(address => mapping(address => uint256))",
              },
              typeName: {
                id: 21,
                keyType: {
                  id: 17,
                  name: "address",
                  nodeType: "ElementaryTypeName",
                  src: "369:7:0",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                },
                nodeType: "Mapping",
                src: "361:47:0",
                typeDescriptions: {
                  typeIdentifier:
                    "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  typeString: "mapping(address => mapping(address => uint256))",
                },
                valueType: {
                  id: 20,
                  keyType: {
                    id: 18,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "388:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  nodeType: "Mapping",
                  src: "380:27:0",
                  typeDescriptions: {
                    typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                    typeString: "mapping(address => uint256)",
                  },
                  valueType: {
                    id: 19,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "399:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                },
              },
              visibility: "public",
            },
            {
              anonymous: false,
              eventSelector:
                "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
              id: 30,
              name: "Transfer",
              nameLocation: "440:8:0",
              nodeType: "EventDefinition",
              parameters: {
                id: 29,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 24,
                    indexed: true,
                    mutability: "mutable",
                    name: "_from",
                    nameLocation: "465:5:0",
                    nodeType: "VariableDeclaration",
                    scope: 30,
                    src: "449:21:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 23,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "449:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 26,
                    indexed: true,
                    mutability: "mutable",
                    name: "_to",
                    nameLocation: "488:3:0",
                    nodeType: "VariableDeclaration",
                    scope: 30,
                    src: "472:19:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 25,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "472:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 28,
                    indexed: false,
                    mutability: "mutable",
                    name: "_value",
                    nameLocation: "501:6:0",
                    nodeType: "VariableDeclaration",
                    scope: 30,
                    src: "493:14:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 27,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "493:7:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "448:60:0",
              },
              src: "434:75:0",
            },
            {
              anonymous: false,
              eventSelector:
                "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
              id: 38,
              name: "Approval",
              nameLocation: "521:8:0",
              nodeType: "EventDefinition",
              parameters: {
                id: 37,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 32,
                    indexed: true,
                    mutability: "mutable",
                    name: "_owner",
                    nameLocation: "556:6:0",
                    nodeType: "VariableDeclaration",
                    scope: 38,
                    src: "540:22:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 31,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "540:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 34,
                    indexed: true,
                    mutability: "mutable",
                    name: "_spender",
                    nameLocation: "589:8:0",
                    nodeType: "VariableDeclaration",
                    scope: 38,
                    src: "573:24:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 33,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "573:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 36,
                    indexed: false,
                    mutability: "mutable",
                    name: "_value",
                    nameLocation: "616:6:0",
                    nodeType: "VariableDeclaration",
                    scope: 38,
                    src: "608:14:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 35,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "608:7:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "529:100:0",
              },
              src: "515:115:0",
            },
            {
              body: {
                id: 54,
                nodeType: "Block",
                src: "733:132:0",
                statements: [
                  {
                    expression: {
                      id: 45,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 43,
                        name: "totalSupply",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 3,
                        src: "744:11:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "=",
                      rightHandSide: {
                        id: 44,
                        name: "_initialSupply",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 40,
                        src: "758:14:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "744:28:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 46,
                    nodeType: "ExpressionStatement",
                    src: "744:28:0",
                  },
                  {
                    expression: {
                      id: 52,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        baseExpression: {
                          id: 47,
                          name: "balanceOf",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 16,
                          src: "819:9:0",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_uint256_$",
                            typeString: "mapping(address => uint256)",
                          },
                        },
                        id: 50,
                        indexExpression: {
                          expression: {
                            id: 48,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: "829:3:0",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 49,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "829:10:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: true,
                        nodeType: "IndexAccess",
                        src: "819:21:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "=",
                      rightHandSide: {
                        id: 51,
                        name: "_initialSupply",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 40,
                        src: "843:14:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "819:38:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 53,
                    nodeType: "ExpressionStatement",
                    src: "819:38:0",
                  },
                ],
              },
              id: 55,
              implemented: true,
              kind: "constructor",
              modifiers: [],
              name: "",
              nameLocation: "-1:-1:-1",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 41,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 40,
                    mutability: "mutable",
                    name: "_initialSupply",
                    nameLocation: "717:14:0",
                    nodeType: "VariableDeclaration",
                    scope: 55,
                    src: "709:22:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 39,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "709:7:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "708:24:0",
              },
              returnParameters: {
                id: 42,
                nodeType: "ParameterList",
                parameters: [],
                src: "733:0:0",
              },
              scope: 185,
              src: "697:168:0",
              stateMutability: "nonpayable",
              virtual: false,
              visibility: "public",
            },
            {
              body: {
                id: 95,
                nodeType: "Block",
                src: "999:317:0",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 70,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            baseExpression: {
                              id: 65,
                              name: "balanceOf",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 16,
                              src: "1071:9:0",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_mapping$_t_address_$_t_uint256_$",
                                typeString: "mapping(address => uint256)",
                              },
                            },
                            id: 68,
                            indexExpression: {
                              expression: {
                                id: 66,
                                name: "msg",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 4294967281,
                                src: "1081:3:0",
                                typeDescriptions: {
                                  typeIdentifier: "t_magic_message",
                                  typeString: "msg",
                                },
                              },
                              id: 67,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: "sender",
                              nodeType: "MemberAccess",
                              src: "1081:10:0",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            },
                            isConstant: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: false,
                            nodeType: "IndexAccess",
                            src: "1071:21:0",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: ">=",
                          rightExpression: {
                            id: 69,
                            name: "_value",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 59,
                            src: "1096:6:0",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "1071:31:0",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 64,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "1063:7:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 71,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1063:40:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 72,
                    nodeType: "ExpressionStatement",
                    src: "1063:40:0",
                  },
                  {
                    expression: {
                      id: 78,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        baseExpression: {
                          id: 73,
                          name: "balanceOf",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 16,
                          src: "1114:9:0",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_uint256_$",
                            typeString: "mapping(address => uint256)",
                          },
                        },
                        id: 76,
                        indexExpression: {
                          expression: {
                            id: 74,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: "1124:3:0",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 75,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "1124:10:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: true,
                        nodeType: "IndexAccess",
                        src: "1114:21:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "-=",
                      rightHandSide: {
                        id: 77,
                        name: "_value",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 59,
                        src: "1139:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1114:31:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 79,
                    nodeType: "ExpressionStatement",
                    src: "1114:31:0",
                  },
                  {
                    expression: {
                      id: 84,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        baseExpression: {
                          id: 80,
                          name: "balanceOf",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 16,
                          src: "1156:9:0",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_uint256_$",
                            typeString: "mapping(address => uint256)",
                          },
                        },
                        id: 82,
                        indexExpression: {
                          id: 81,
                          name: "_to",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 57,
                          src: "1166:3:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: true,
                        nodeType: "IndexAccess",
                        src: "1156:14:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "+=",
                      rightHandSide: {
                        id: 83,
                        name: "_value",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 59,
                        src: "1174:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1156:24:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 85,
                    nodeType: "ExpressionStatement",
                    src: "1156:24:0",
                  },
                  {
                    eventCall: {
                      arguments: [
                        {
                          expression: {
                            id: 87,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: "1232:3:0",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 88,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "1232:10:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        {
                          id: 89,
                          name: "_to",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 57,
                          src: "1244:3:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        {
                          id: 90,
                          name: "_value",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 59,
                          src: "1249:6:0",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        id: 86,
                        name: "Transfer",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 30,
                        src: "1223:8:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          typeString: "function (address,address,uint256)",
                        },
                      },
                      id: 91,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1223:33:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 92,
                    nodeType: "EmitStatement",
                    src: "1218:38:0",
                  },
                  {
                    expression: {
                      hexValue: "74727565",
                      id: 93,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "bool",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "1304:4:0",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                      value: "true",
                    },
                    functionReturnParameters: 63,
                    id: 94,
                    nodeType: "Return",
                    src: "1297:11:0",
                  },
                ],
              },
              functionSelector: "a9059cbb",
              id: 96,
              implemented: true,
              kind: "function",
              modifiers: [],
              name: "transfer",
              nameLocation: "908:8:0",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 60,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 57,
                    mutability: "mutable",
                    name: "_to",
                    nameLocation: "925:3:0",
                    nodeType: "VariableDeclaration",
                    scope: 96,
                    src: "917:11:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 56,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "917:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 59,
                    mutability: "mutable",
                    name: "_value",
                    nameLocation: "938:6:0",
                    nodeType: "VariableDeclaration",
                    scope: 96,
                    src: "930:14:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 58,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "930:7:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "916:29:0",
              },
              returnParameters: {
                id: 63,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 62,
                    mutability: "mutable",
                    name: "success",
                    nameLocation: "985:7:0",
                    nodeType: "VariableDeclaration",
                    scope: 96,
                    src: "980:12:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                    typeName: {
                      id: 61,
                      name: "bool",
                      nodeType: "ElementaryTypeName",
                      src: "980:4:0",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "979:14:0",
              },
              scope: 185,
              src: "899:417:0",
              stateMutability: "nonpayable",
              virtual: false,
              visibility: "public",
            },
            {
              body: {
                id: 123,
                nodeType: "Block",
                src: "1444:135:0",
                statements: [
                  {
                    expression: {
                      id: 112,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        baseExpression: {
                          baseExpression: {
                            id: 105,
                            name: "allowance",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 22,
                            src: "1455:9:0",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              typeString:
                                "mapping(address => mapping(address => uint256))",
                            },
                          },
                          id: 109,
                          indexExpression: {
                            expression: {
                              id: 106,
                              name: "msg",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 4294967281,
                              src: "1465:3:0",
                              typeDescriptions: {
                                typeIdentifier: "t_magic_message",
                                typeString: "msg",
                              },
                            },
                            id: 107,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "sender",
                            nodeType: "MemberAccess",
                            src: "1465:10:0",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "1455:21:0",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_uint256_$",
                            typeString: "mapping(address => uint256)",
                          },
                        },
                        id: 110,
                        indexExpression: {
                          id: 108,
                          name: "_spender",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 98,
                          src: "1477:8:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: true,
                        nodeType: "IndexAccess",
                        src: "1455:31:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "=",
                      rightHandSide: {
                        id: 111,
                        name: "_value",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 100,
                        src: "1489:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1455:40:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 113,
                    nodeType: "ExpressionStatement",
                    src: "1455:40:0",
                  },
                  {
                    eventCall: {
                      arguments: [
                        {
                          expression: {
                            id: 115,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: "1520:3:0",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 116,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "1520:10:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        {
                          id: 117,
                          name: "_spender",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 98,
                          src: "1532:8:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        {
                          id: 118,
                          name: "_value",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 100,
                          src: "1542:6:0",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        id: 114,
                        name: "Approval",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 38,
                        src: "1511:8:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          typeString: "function (address,address,uint256)",
                        },
                      },
                      id: 119,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1511:38:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 120,
                    nodeType: "EmitStatement",
                    src: "1506:43:0",
                  },
                  {
                    expression: {
                      hexValue: "74727565",
                      id: 121,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "bool",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "1567:4:0",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                      value: "true",
                    },
                    functionReturnParameters: 104,
                    id: 122,
                    nodeType: "Return",
                    src: "1560:11:0",
                  },
                ],
              },
              functionSelector: "095ea7b3",
              id: 124,
              implemented: true,
              kind: "function",
              modifiers: [],
              name: "approve",
              nameLocation: "1349:7:0",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 101,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 98,
                    mutability: "mutable",
                    name: "_spender",
                    nameLocation: "1365:8:0",
                    nodeType: "VariableDeclaration",
                    scope: 124,
                    src: "1357:16:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 97,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "1357:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 100,
                    mutability: "mutable",
                    name: "_value",
                    nameLocation: "1383:6:0",
                    nodeType: "VariableDeclaration",
                    scope: 124,
                    src: "1375:14:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 99,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "1375:7:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "1356:34:0",
              },
              returnParameters: {
                id: 104,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 103,
                    mutability: "mutable",
                    name: "success",
                    nameLocation: "1430:7:0",
                    nodeType: "VariableDeclaration",
                    scope: 124,
                    src: "1425:12:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                    typeName: {
                      id: 102,
                      name: "bool",
                      nodeType: "ElementaryTypeName",
                      src: "1425:4:0",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "1424:14:0",
              },
              scope: 185,
              src: "1340:239:0",
              stateMutability: "nonpayable",
              virtual: false,
              visibility: "public",
            },
            {
              body: {
                id: 183,
                nodeType: "Block",
                src: "1738:369:0",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 140,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 136,
                            name: "_value",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 130,
                            src: "1757:6:0",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "<=",
                          rightExpression: {
                            baseExpression: {
                              id: 137,
                              name: "balanceOf",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 16,
                              src: "1767:9:0",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_mapping$_t_address_$_t_uint256_$",
                                typeString: "mapping(address => uint256)",
                              },
                            },
                            id: 139,
                            indexExpression: {
                              id: 138,
                              name: "_from",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 126,
                              src: "1777:5:0",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            },
                            isConstant: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: false,
                            nodeType: "IndexAccess",
                            src: "1767:16:0",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "1757:26:0",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 135,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "1749:7:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 141,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1749:35:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 142,
                    nodeType: "ExpressionStatement",
                    src: "1749:35:0",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 151,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 144,
                            name: "_value",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 130,
                            src: "1803:6:0",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "<=",
                          rightExpression: {
                            baseExpression: {
                              baseExpression: {
                                id: 145,
                                name: "allowance",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 22,
                                src: "1813:9:0",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  typeString:
                                    "mapping(address => mapping(address => uint256))",
                                },
                              },
                              id: 147,
                              indexExpression: {
                                id: 146,
                                name: "_from",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 126,
                                src: "1823:5:0",
                                typeDescriptions: {
                                  typeIdentifier: "t_address",
                                  typeString: "address",
                                },
                              },
                              isConstant: false,
                              isLValue: true,
                              isPure: false,
                              lValueRequested: false,
                              nodeType: "IndexAccess",
                              src: "1813:16:0",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_mapping$_t_address_$_t_uint256_$",
                                typeString: "mapping(address => uint256)",
                              },
                            },
                            id: 150,
                            indexExpression: {
                              expression: {
                                id: 148,
                                name: "msg",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 4294967281,
                                src: "1830:3:0",
                                typeDescriptions: {
                                  typeIdentifier: "t_magic_message",
                                  typeString: "msg",
                                },
                              },
                              id: 149,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: "sender",
                              nodeType: "MemberAccess",
                              src: "1830:10:0",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            },
                            isConstant: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: false,
                            nodeType: "IndexAccess",
                            src: "1813:28:0",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "1803:38:0",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 143,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "1795:7:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 152,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1795:47:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 153,
                    nodeType: "ExpressionStatement",
                    src: "1795:47:0",
                  },
                  {
                    expression: {
                      id: 158,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        baseExpression: {
                          id: 154,
                          name: "balanceOf",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 16,
                          src: "1886:9:0",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_uint256_$",
                            typeString: "mapping(address => uint256)",
                          },
                        },
                        id: 156,
                        indexExpression: {
                          id: 155,
                          name: "_from",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 126,
                          src: "1896:5:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: true,
                        nodeType: "IndexAccess",
                        src: "1886:16:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "-=",
                      rightHandSide: {
                        id: 157,
                        name: "_value",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 130,
                        src: "1906:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1886:26:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 159,
                    nodeType: "ExpressionStatement",
                    src: "1886:26:0",
                  },
                  {
                    expression: {
                      id: 164,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        baseExpression: {
                          id: 160,
                          name: "balanceOf",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 16,
                          src: "1923:9:0",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_uint256_$",
                            typeString: "mapping(address => uint256)",
                          },
                        },
                        id: 162,
                        indexExpression: {
                          id: 161,
                          name: "_to",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 128,
                          src: "1933:3:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: true,
                        nodeType: "IndexAccess",
                        src: "1923:14:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "+=",
                      rightHandSide: {
                        id: 163,
                        name: "_value",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 130,
                        src: "1941:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1923:24:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 165,
                    nodeType: "ExpressionStatement",
                    src: "1923:24:0",
                  },
                  {
                    expression: {
                      id: 173,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        baseExpression: {
                          baseExpression: {
                            id: 166,
                            name: "allowance",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 22,
                            src: "1993:9:0",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              typeString:
                                "mapping(address => mapping(address => uint256))",
                            },
                          },
                          id: 170,
                          indexExpression: {
                            id: 167,
                            name: "_from",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 126,
                            src: "2003:5:0",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "1993:16:0",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_uint256_$",
                            typeString: "mapping(address => uint256)",
                          },
                        },
                        id: 171,
                        indexExpression: {
                          expression: {
                            id: 168,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: "2010:3:0",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 169,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "2010:10:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: true,
                        nodeType: "IndexAccess",
                        src: "1993:28:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "-=",
                      rightHandSide: {
                        id: 172,
                        name: "_value",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 130,
                        src: "2025:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1993:38:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 174,
                    nodeType: "ExpressionStatement",
                    src: "1993:38:0",
                  },
                  {
                    eventCall: {
                      arguments: [
                        {
                          id: 176,
                          name: "_from",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 126,
                          src: "2058:5:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        {
                          id: 177,
                          name: "_to",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 128,
                          src: "2065:3:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        {
                          id: 178,
                          name: "_value",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 130,
                          src: "2070:6:0",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        id: 175,
                        name: "Transfer",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 30,
                        src: "2049:8:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          typeString: "function (address,address,uint256)",
                        },
                      },
                      id: 179,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "2049:28:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 180,
                    nodeType: "EmitStatement",
                    src: "2044:33:0",
                  },
                  {
                    expression: {
                      hexValue: "74727565",
                      id: 181,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "bool",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "2095:4:0",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                      value: "true",
                    },
                    functionReturnParameters: 134,
                    id: 182,
                    nodeType: "Return",
                    src: "2088:11:0",
                  },
                ],
              },
              functionSelector: "23b872dd",
              id: 184,
              implemented: true,
              kind: "function",
              modifiers: [],
              name: "transferFrom",
              nameLocation: "1617:12:0",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 131,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 126,
                    mutability: "mutable",
                    name: "_from",
                    nameLocation: "1648:5:0",
                    nodeType: "VariableDeclaration",
                    scope: 184,
                    src: "1640:13:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 125,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "1640:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 128,
                    mutability: "mutable",
                    name: "_to",
                    nameLocation: "1672:3:0",
                    nodeType: "VariableDeclaration",
                    scope: 184,
                    src: "1664:11:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 127,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "1664:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 130,
                    mutability: "mutable",
                    name: "_value",
                    nameLocation: "1694:6:0",
                    nodeType: "VariableDeclaration",
                    scope: 184,
                    src: "1686:14:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 129,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "1686:7:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "1629:78:0",
              },
              returnParameters: {
                id: 134,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 133,
                    mutability: "mutable",
                    name: "success",
                    nameLocation: "1729:7:0",
                    nodeType: "VariableDeclaration",
                    scope: 184,
                    src: "1724:12:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                    typeName: {
                      id: 132,
                      name: "bool",
                      nodeType: "ElementaryTypeName",
                      src: "1724:4:0",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "1723:14:0",
              },
              scope: 185,
              src: "1608:499:0",
              stateMutability: "nonpayable",
              virtual: false,
              visibility: "public",
            },
          ],
          scope: 186,
          src: "63:2047:0",
          usedErrors: [],
        },
      ],
      src: "35:2077:0",
    },
    legacyAST: {
      absolutePath: "project:/contracts/MmsToken.sol",
      exportedSymbols: {
        MmsToken: [185],
      },
      id: 186,
      license: "MiT",
      nodeType: "SourceUnit",
      nodes: [
        {
          id: 1,
          literals: ["solidity", "^", "0.8", ".10"],
          nodeType: "PragmaDirective",
          src: "35:24:0",
        },
        {
          abstract: false,
          baseContracts: [],
          canonicalName: "MmsToken",
          contractDependencies: [],
          contractKind: "contract",
          fullyImplemented: true,
          id: 185,
          linearizedBaseContracts: [185],
          name: "MmsToken",
          nameLocation: "72:14:0",
          nodeType: "ContractDefinition",
          nodes: [
            {
              constant: false,
              functionSelector: "18160ddd",
              id: 3,
              mutability: "mutable",
              name: "totalSupply",
              nameLocation: "109:11:0",
              nodeType: "VariableDeclaration",
              scope: 185,
              src: "94:26:0",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
              typeName: {
                id: 2,
                name: "uint256",
                nodeType: "ElementaryTypeName",
                src: "94:7:0",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
              },
              visibility: "public",
            },
            {
              constant: false,
              functionSelector: "06fdde03",
              id: 6,
              mutability: "mutable",
              name: "name",
              nameLocation: "141:4:0",
              nodeType: "VariableDeclaration",
              scope: 185,
              src: "127:37:0",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_string_storage",
                typeString: "string",
              },
              typeName: {
                id: 4,
                name: "string",
                nodeType: "ElementaryTypeName",
                src: "127:6:0",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
              },
              value: {
                hexValue: "4b727574696b5f31394954303335",
                id: 5,
                isConstant: false,
                isLValue: false,
                isPure: true,
                kind: "string",
                lValueRequested: false,
                nodeType: "Literal",
                src: "148:16:0",
                typeDescriptions: {
                  typeIdentifier:
                    "t_stringliteral_07010d8821691e6f2f2f502f0ba33cdf30b2dfcb91a85f47bdf9580d7ff2064e",
                  typeString: 'literal_string "MmsToken"',
                },
                value: "MmsToken",
              },
              visibility: "public",
            },
            {
              constant: false,
              functionSelector: "5a3b7e42",
              id: 9,
              mutability: "mutable",
              name: "standard",
              nameLocation: "199:8:0",
              nodeType: "VariableDeclaration",
              scope: 185,
              src: "185:46:0",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_string_storage",
                typeString: "string",
              },
              typeName: {
                id: 7,
                name: "string",
                nodeType: "ElementaryTypeName",
                src: "185:6:0",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
              },
              value: {
                hexValue: "4b727574696b5f313949543033352076312e30",
                id: 8,
                isConstant: false,
                isLValue: false,
                isPure: true,
                kind: "string",
                lValueRequested: false,
                nodeType: "Literal",
                src: "210:21:0",
                typeDescriptions: {
                  typeIdentifier:
                    "t_stringliteral_e737f1daffa23d2f61f1b0a4f3f8c9045242e95f3b3a0647f8362da15b56ef4d",
                  typeString: 'literal_string "MmsToken v1.0"',
                },
                value: "MmsToken v1.0",
              },
              visibility: "public",
            },
            {
              constant: false,
              functionSelector: "95d89b41",
              id: 12,
              mutability: "mutable",
              name: "symbol",
              nameLocation: "270:6:0",
              nodeType: "VariableDeclaration",
              scope: 185,
              src: "256:29:0",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_string_storage",
                typeString: "string",
              },
              typeName: {
                id: 10,
                name: "string",
                nodeType: "ElementaryTypeName",
                src: "256:6:0",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
              },
              value: {
                hexValue: "4b473335",
                id: 11,
                isConstant: false,
                isLValue: false,
                isPure: true,
                kind: "string",
                lValueRequested: false,
                nodeType: "Literal",
                src: "279:6:0",
                typeDescriptions: {
                  typeIdentifier:
                    "t_stringliteral_9bee3a6c10b909812c125038487fdf40f0aa0e68049d127b469490d2954f4908",
                  typeString: 'literal_string "KG35"',
                },
                value: "KG35",
              },
              visibility: "public",
            },
            {
              constant: false,
              functionSelector: "70a08231",
              id: 16,
              mutability: "mutable",
              name: "balanceOf",
              nameLocation: "345:9:0",
              nodeType: "VariableDeclaration",
              scope: 185,
              src: "310:44:0",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                typeString: "mapping(address => uint256)",
              },
              typeName: {
                id: 15,
                keyType: {
                  id: 13,
                  name: "address",
                  nodeType: "ElementaryTypeName",
                  src: "318:7:0",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                },
                nodeType: "Mapping",
                src: "310:27:0",
                typeDescriptions: {
                  typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                  typeString: "mapping(address => uint256)",
                },
                valueType: {
                  id: 14,
                  name: "uint256",
                  nodeType: "ElementaryTypeName",
                  src: "329:7:0",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                },
              },
              visibility: "public",
            },
            {
              constant: false,
              functionSelector: "dd62ed3e",
              id: 22,
              mutability: "mutable",
              name: "allowance",
              nameLocation: "416:9:0",
              nodeType: "VariableDeclaration",
              scope: 185,
              src: "361:64:0",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier:
                  "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                typeString: "mapping(address => mapping(address => uint256))",
              },
              typeName: {
                id: 21,
                keyType: {
                  id: 17,
                  name: "address",
                  nodeType: "ElementaryTypeName",
                  src: "369:7:0",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                },
                nodeType: "Mapping",
                src: "361:47:0",
                typeDescriptions: {
                  typeIdentifier:
                    "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  typeString: "mapping(address => mapping(address => uint256))",
                },
                valueType: {
                  id: 20,
                  keyType: {
                    id: 18,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "388:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  nodeType: "Mapping",
                  src: "380:27:0",
                  typeDescriptions: {
                    typeIdentifier: "t_mapping$_t_address_$_t_uint256_$",
                    typeString: "mapping(address => uint256)",
                  },
                  valueType: {
                    id: 19,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "399:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                },
              },
              visibility: "public",
            },
            {
              anonymous: false,
              eventSelector:
                "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
              id: 30,
              name: "Transfer",
              nameLocation: "440:8:0",
              nodeType: "EventDefinition",
              parameters: {
                id: 29,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 24,
                    indexed: true,
                    mutability: "mutable",
                    name: "_from",
                    nameLocation: "465:5:0",
                    nodeType: "VariableDeclaration",
                    scope: 30,
                    src: "449:21:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 23,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "449:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 26,
                    indexed: true,
                    mutability: "mutable",
                    name: "_to",
                    nameLocation: "488:3:0",
                    nodeType: "VariableDeclaration",
                    scope: 30,
                    src: "472:19:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 25,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "472:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 28,
                    indexed: false,
                    mutability: "mutable",
                    name: "_value",
                    nameLocation: "501:6:0",
                    nodeType: "VariableDeclaration",
                    scope: 30,
                    src: "493:14:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 27,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "493:7:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "448:60:0",
              },
              src: "434:75:0",
            },
            {
              anonymous: false,
              eventSelector:
                "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
              id: 38,
              name: "Approval",
              nameLocation: "521:8:0",
              nodeType: "EventDefinition",
              parameters: {
                id: 37,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 32,
                    indexed: true,
                    mutability: "mutable",
                    name: "_owner",
                    nameLocation: "556:6:0",
                    nodeType: "VariableDeclaration",
                    scope: 38,
                    src: "540:22:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 31,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "540:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 34,
                    indexed: true,
                    mutability: "mutable",
                    name: "_spender",
                    nameLocation: "589:8:0",
                    nodeType: "VariableDeclaration",
                    scope: 38,
                    src: "573:24:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 33,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "573:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 36,
                    indexed: false,
                    mutability: "mutable",
                    name: "_value",
                    nameLocation: "616:6:0",
                    nodeType: "VariableDeclaration",
                    scope: 38,
                    src: "608:14:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 35,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "608:7:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "529:100:0",
              },
              src: "515:115:0",
            },
            {
              body: {
                id: 54,
                nodeType: "Block",
                src: "733:132:0",
                statements: [
                  {
                    expression: {
                      id: 45,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 43,
                        name: "totalSupply",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 3,
                        src: "744:11:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "=",
                      rightHandSide: {
                        id: 44,
                        name: "_initialSupply",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 40,
                        src: "758:14:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "744:28:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 46,
                    nodeType: "ExpressionStatement",
                    src: "744:28:0",
                  },
                  {
                    expression: {
                      id: 52,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        baseExpression: {
                          id: 47,
                          name: "balanceOf",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 16,
                          src: "819:9:0",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_uint256_$",
                            typeString: "mapping(address => uint256)",
                          },
                        },
                        id: 50,
                        indexExpression: {
                          expression: {
                            id: 48,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: "829:3:0",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 49,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "829:10:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: true,
                        nodeType: "IndexAccess",
                        src: "819:21:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "=",
                      rightHandSide: {
                        id: 51,
                        name: "_initialSupply",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 40,
                        src: "843:14:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "819:38:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 53,
                    nodeType: "ExpressionStatement",
                    src: "819:38:0",
                  },
                ],
              },
              id: 55,
              implemented: true,
              kind: "constructor",
              modifiers: [],
              name: "",
              nameLocation: "-1:-1:-1",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 41,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 40,
                    mutability: "mutable",
                    name: "_initialSupply",
                    nameLocation: "717:14:0",
                    nodeType: "VariableDeclaration",
                    scope: 55,
                    src: "709:22:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 39,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "709:7:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "708:24:0",
              },
              returnParameters: {
                id: 42,
                nodeType: "ParameterList",
                parameters: [],
                src: "733:0:0",
              },
              scope: 185,
              src: "697:168:0",
              stateMutability: "nonpayable",
              virtual: false,
              visibility: "public",
            },
            {
              body: {
                id: 95,
                nodeType: "Block",
                src: "999:317:0",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 70,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            baseExpression: {
                              id: 65,
                              name: "balanceOf",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 16,
                              src: "1071:9:0",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_mapping$_t_address_$_t_uint256_$",
                                typeString: "mapping(address => uint256)",
                              },
                            },
                            id: 68,
                            indexExpression: {
                              expression: {
                                id: 66,
                                name: "msg",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 4294967281,
                                src: "1081:3:0",
                                typeDescriptions: {
                                  typeIdentifier: "t_magic_message",
                                  typeString: "msg",
                                },
                              },
                              id: 67,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: "sender",
                              nodeType: "MemberAccess",
                              src: "1081:10:0",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            },
                            isConstant: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: false,
                            nodeType: "IndexAccess",
                            src: "1071:21:0",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: ">=",
                          rightExpression: {
                            id: 69,
                            name: "_value",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 59,
                            src: "1096:6:0",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "1071:31:0",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 64,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "1063:7:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 71,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1063:40:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 72,
                    nodeType: "ExpressionStatement",
                    src: "1063:40:0",
                  },
                  {
                    expression: {
                      id: 78,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        baseExpression: {
                          id: 73,
                          name: "balanceOf",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 16,
                          src: "1114:9:0",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_uint256_$",
                            typeString: "mapping(address => uint256)",
                          },
                        },
                        id: 76,
                        indexExpression: {
                          expression: {
                            id: 74,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: "1124:3:0",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 75,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "1124:10:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: true,
                        nodeType: "IndexAccess",
                        src: "1114:21:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "-=",
                      rightHandSide: {
                        id: 77,
                        name: "_value",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 59,
                        src: "1139:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1114:31:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 79,
                    nodeType: "ExpressionStatement",
                    src: "1114:31:0",
                  },
                  {
                    expression: {
                      id: 84,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        baseExpression: {
                          id: 80,
                          name: "balanceOf",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 16,
                          src: "1156:9:0",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_uint256_$",
                            typeString: "mapping(address => uint256)",
                          },
                        },
                        id: 82,
                        indexExpression: {
                          id: 81,
                          name: "_to",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 57,
                          src: "1166:3:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: true,
                        nodeType: "IndexAccess",
                        src: "1156:14:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "+=",
                      rightHandSide: {
                        id: 83,
                        name: "_value",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 59,
                        src: "1174:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1156:24:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 85,
                    nodeType: "ExpressionStatement",
                    src: "1156:24:0",
                  },
                  {
                    eventCall: {
                      arguments: [
                        {
                          expression: {
                            id: 87,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: "1232:3:0",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 88,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "1232:10:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        {
                          id: 89,
                          name: "_to",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 57,
                          src: "1244:3:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        {
                          id: 90,
                          name: "_value",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 59,
                          src: "1249:6:0",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        id: 86,
                        name: "Transfer",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 30,
                        src: "1223:8:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          typeString: "function (address,address,uint256)",
                        },
                      },
                      id: 91,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1223:33:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 92,
                    nodeType: "EmitStatement",
                    src: "1218:38:0",
                  },
                  {
                    expression: {
                      hexValue: "74727565",
                      id: 93,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "bool",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "1304:4:0",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                      value: "true",
                    },
                    functionReturnParameters: 63,
                    id: 94,
                    nodeType: "Return",
                    src: "1297:11:0",
                  },
                ],
              },
              functionSelector: "a9059cbb",
              id: 96,
              implemented: true,
              kind: "function",
              modifiers: [],
              name: "transfer",
              nameLocation: "908:8:0",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 60,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 57,
                    mutability: "mutable",
                    name: "_to",
                    nameLocation: "925:3:0",
                    nodeType: "VariableDeclaration",
                    scope: 96,
                    src: "917:11:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 56,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "917:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 59,
                    mutability: "mutable",
                    name: "_value",
                    nameLocation: "938:6:0",
                    nodeType: "VariableDeclaration",
                    scope: 96,
                    src: "930:14:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 58,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "930:7:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "916:29:0",
              },
              returnParameters: {
                id: 63,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 62,
                    mutability: "mutable",
                    name: "success",
                    nameLocation: "985:7:0",
                    nodeType: "VariableDeclaration",
                    scope: 96,
                    src: "980:12:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                    typeName: {
                      id: 61,
                      name: "bool",
                      nodeType: "ElementaryTypeName",
                      src: "980:4:0",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "979:14:0",
              },
              scope: 185,
              src: "899:417:0",
              stateMutability: "nonpayable",
              virtual: false,
              visibility: "public",
            },
            {
              body: {
                id: 123,
                nodeType: "Block",
                src: "1444:135:0",
                statements: [
                  {
                    expression: {
                      id: 112,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        baseExpression: {
                          baseExpression: {
                            id: 105,
                            name: "allowance",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 22,
                            src: "1455:9:0",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              typeString:
                                "mapping(address => mapping(address => uint256))",
                            },
                          },
                          id: 109,
                          indexExpression: {
                            expression: {
                              id: 106,
                              name: "msg",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 4294967281,
                              src: "1465:3:0",
                              typeDescriptions: {
                                typeIdentifier: "t_magic_message",
                                typeString: "msg",
                              },
                            },
                            id: 107,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "sender",
                            nodeType: "MemberAccess",
                            src: "1465:10:0",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "1455:21:0",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_uint256_$",
                            typeString: "mapping(address => uint256)",
                          },
                        },
                        id: 110,
                        indexExpression: {
                          id: 108,
                          name: "_spender",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 98,
                          src: "1477:8:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: true,
                        nodeType: "IndexAccess",
                        src: "1455:31:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "=",
                      rightHandSide: {
                        id: 111,
                        name: "_value",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 100,
                        src: "1489:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1455:40:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 113,
                    nodeType: "ExpressionStatement",
                    src: "1455:40:0",
                  },
                  {
                    eventCall: {
                      arguments: [
                        {
                          expression: {
                            id: 115,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: "1520:3:0",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 116,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "1520:10:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        {
                          id: 117,
                          name: "_spender",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 98,
                          src: "1532:8:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        {
                          id: 118,
                          name: "_value",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 100,
                          src: "1542:6:0",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        id: 114,
                        name: "Approval",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 38,
                        src: "1511:8:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          typeString: "function (address,address,uint256)",
                        },
                      },
                      id: 119,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1511:38:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 120,
                    nodeType: "EmitStatement",
                    src: "1506:43:0",
                  },
                  {
                    expression: {
                      hexValue: "74727565",
                      id: 121,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "bool",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "1567:4:0",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                      value: "true",
                    },
                    functionReturnParameters: 104,
                    id: 122,
                    nodeType: "Return",
                    src: "1560:11:0",
                  },
                ],
              },
              functionSelector: "095ea7b3",
              id: 124,
              implemented: true,
              kind: "function",
              modifiers: [],
              name: "approve",
              nameLocation: "1349:7:0",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 101,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 98,
                    mutability: "mutable",
                    name: "_spender",
                    nameLocation: "1365:8:0",
                    nodeType: "VariableDeclaration",
                    scope: 124,
                    src: "1357:16:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 97,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "1357:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 100,
                    mutability: "mutable",
                    name: "_value",
                    nameLocation: "1383:6:0",
                    nodeType: "VariableDeclaration",
                    scope: 124,
                    src: "1375:14:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 99,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "1375:7:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "1356:34:0",
              },
              returnParameters: {
                id: 104,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 103,
                    mutability: "mutable",
                    name: "success",
                    nameLocation: "1430:7:0",
                    nodeType: "VariableDeclaration",
                    scope: 124,
                    src: "1425:12:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                    typeName: {
                      id: 102,
                      name: "bool",
                      nodeType: "ElementaryTypeName",
                      src: "1425:4:0",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "1424:14:0",
              },
              scope: 185,
              src: "1340:239:0",
              stateMutability: "nonpayable",
              virtual: false,
              visibility: "public",
            },
            {
              body: {
                id: 183,
                nodeType: "Block",
                src: "1738:369:0",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 140,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 136,
                            name: "_value",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 130,
                            src: "1757:6:0",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "<=",
                          rightExpression: {
                            baseExpression: {
                              id: 137,
                              name: "balanceOf",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 16,
                              src: "1767:9:0",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_mapping$_t_address_$_t_uint256_$",
                                typeString: "mapping(address => uint256)",
                              },
                            },
                            id: 139,
                            indexExpression: {
                              id: 138,
                              name: "_from",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 126,
                              src: "1777:5:0",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            },
                            isConstant: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: false,
                            nodeType: "IndexAccess",
                            src: "1767:16:0",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "1757:26:0",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 135,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "1749:7:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 141,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1749:35:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 142,
                    nodeType: "ExpressionStatement",
                    src: "1749:35:0",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 151,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 144,
                            name: "_value",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 130,
                            src: "1803:6:0",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "<=",
                          rightExpression: {
                            baseExpression: {
                              baseExpression: {
                                id: 145,
                                name: "allowance",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 22,
                                src: "1813:9:0",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                  typeString:
                                    "mapping(address => mapping(address => uint256))",
                                },
                              },
                              id: 147,
                              indexExpression: {
                                id: 146,
                                name: "_from",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 126,
                                src: "1823:5:0",
                                typeDescriptions: {
                                  typeIdentifier: "t_address",
                                  typeString: "address",
                                },
                              },
                              isConstant: false,
                              isLValue: true,
                              isPure: false,
                              lValueRequested: false,
                              nodeType: "IndexAccess",
                              src: "1813:16:0",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_mapping$_t_address_$_t_uint256_$",
                                typeString: "mapping(address => uint256)",
                              },
                            },
                            id: 150,
                            indexExpression: {
                              expression: {
                                id: 148,
                                name: "msg",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 4294967281,
                                src: "1830:3:0",
                                typeDescriptions: {
                                  typeIdentifier: "t_magic_message",
                                  typeString: "msg",
                                },
                              },
                              id: 149,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: "sender",
                              nodeType: "MemberAccess",
                              src: "1830:10:0",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            },
                            isConstant: false,
                            isLValue: true,
                            isPure: false,
                            lValueRequested: false,
                            nodeType: "IndexAccess",
                            src: "1813:28:0",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "1803:38:0",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 143,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "1795:7:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 152,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1795:47:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 153,
                    nodeType: "ExpressionStatement",
                    src: "1795:47:0",
                  },
                  {
                    expression: {
                      id: 158,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        baseExpression: {
                          id: 154,
                          name: "balanceOf",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 16,
                          src: "1886:9:0",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_uint256_$",
                            typeString: "mapping(address => uint256)",
                          },
                        },
                        id: 156,
                        indexExpression: {
                          id: 155,
                          name: "_from",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 126,
                          src: "1896:5:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: true,
                        nodeType: "IndexAccess",
                        src: "1886:16:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "-=",
                      rightHandSide: {
                        id: 157,
                        name: "_value",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 130,
                        src: "1906:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1886:26:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 159,
                    nodeType: "ExpressionStatement",
                    src: "1886:26:0",
                  },
                  {
                    expression: {
                      id: 164,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        baseExpression: {
                          id: 160,
                          name: "balanceOf",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 16,
                          src: "1923:9:0",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_uint256_$",
                            typeString: "mapping(address => uint256)",
                          },
                        },
                        id: 162,
                        indexExpression: {
                          id: 161,
                          name: "_to",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 128,
                          src: "1933:3:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: true,
                        nodeType: "IndexAccess",
                        src: "1923:14:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "+=",
                      rightHandSide: {
                        id: 163,
                        name: "_value",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 130,
                        src: "1941:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1923:24:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 165,
                    nodeType: "ExpressionStatement",
                    src: "1923:24:0",
                  },
                  {
                    expression: {
                      id: 173,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        baseExpression: {
                          baseExpression: {
                            id: 166,
                            name: "allowance",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 22,
                            src: "1993:9:0",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                              typeString:
                                "mapping(address => mapping(address => uint256))",
                            },
                          },
                          id: 170,
                          indexExpression: {
                            id: 167,
                            name: "_from",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 126,
                            src: "2003:5:0",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          isConstant: false,
                          isLValue: true,
                          isPure: false,
                          lValueRequested: false,
                          nodeType: "IndexAccess",
                          src: "1993:16:0",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_mapping$_t_address_$_t_uint256_$",
                            typeString: "mapping(address => uint256)",
                          },
                        },
                        id: 171,
                        indexExpression: {
                          expression: {
                            id: 168,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: "2010:3:0",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 169,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "2010:10:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: true,
                        nodeType: "IndexAccess",
                        src: "1993:28:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "-=",
                      rightHandSide: {
                        id: 172,
                        name: "_value",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 130,
                        src: "2025:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1993:38:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 174,
                    nodeType: "ExpressionStatement",
                    src: "1993:38:0",
                  },
                  {
                    eventCall: {
                      arguments: [
                        {
                          id: 176,
                          name: "_from",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 126,
                          src: "2058:5:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        {
                          id: 177,
                          name: "_to",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 128,
                          src: "2065:3:0",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        {
                          id: 178,
                          name: "_value",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 130,
                          src: "2070:6:0",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        id: 175,
                        name: "Transfer",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 30,
                        src: "2049:8:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                          typeString: "function (address,address,uint256)",
                        },
                      },
                      id: 179,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "2049:28:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 180,
                    nodeType: "EmitStatement",
                    src: "2044:33:0",
                  },
                  {
                    expression: {
                      hexValue: "74727565",
                      id: 181,
                      isConstant: false,
                      isLValue: false,
                      isPure: true,
                      kind: "bool",
                      lValueRequested: false,
                      nodeType: "Literal",
                      src: "2095:4:0",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                      value: "true",
                    },
                    functionReturnParameters: 134,
                    id: 182,
                    nodeType: "Return",
                    src: "2088:11:0",
                  },
                ],
              },
              functionSelector: "23b872dd",
              id: 184,
              implemented: true,
              kind: "function",
              modifiers: [],
              name: "transferFrom",
              nameLocation: "1617:12:0",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 131,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 126,
                    mutability: "mutable",
                    name: "_from",
                    nameLocation: "1648:5:0",
                    nodeType: "VariableDeclaration",
                    scope: 184,
                    src: "1640:13:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 125,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "1640:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 128,
                    mutability: "mutable",
                    name: "_to",
                    nameLocation: "1672:3:0",
                    nodeType: "VariableDeclaration",
                    scope: 184,
                    src: "1664:11:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 127,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "1664:7:0",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 130,
                    mutability: "mutable",
                    name: "_value",
                    nameLocation: "1694:6:0",
                    nodeType: "VariableDeclaration",
                    scope: 184,
                    src: "1686:14:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 129,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "1686:7:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "1629:78:0",
              },
              returnParameters: {
                id: 134,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 133,
                    mutability: "mutable",
                    name: "success",
                    nameLocation: "1729:7:0",
                    nodeType: "VariableDeclaration",
                    scope: 184,
                    src: "1724:12:0",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                    typeName: {
                      id: 132,
                      name: "bool",
                      nodeType: "ElementaryTypeName",
                      src: "1724:4:0",
                      typeDescriptions: {
                        typeIdentifier: "t_bool",
                        typeString: "bool",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "1723:14:0",
              },
              scope: 185,
              src: "1608:499:0",
              stateMutability: "nonpayable",
              virtual: false,
              visibility: "public",
            },
          ],
          scope: 186,
          src: "63:2047:0",
          usedErrors: [],
        },
      ],
      src: "35:2077:0",
    },
    compiler: {
      name: "solc",
      version: "0.8.15+commit.e14f2714.Emscripten.clang",
    },
    networks: {
      80001: {
        events: {},
        links: {},
        address: "0x43B1ae47c5f0EF39a8EBA859608d571acfd52aCe",
        transactionHash:
          "0x39883892deb8ad84ae25222fe409676b0929848b711e89895253ea3e5afca367",
      },
    },
    schemaVersion: "3.4.4",
    updatedAt: "2022-08-03T16:11:21.533Z",
    networkType: "ethereum",
    devdoc: {
      kind: "dev",
      methods: {},
      version: 1,
    },
    userdoc: {
      kind: "user",
      methods: {},
      version: 1,
    },
  },
  tokensale: {
    contractName: "TokenSale",
    abi: [
      {
        inputs: [
          {
            internalType: "contract MmsToken",
            name: "_tokenContract",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenPrice",
            type: "uint256",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "_buyer",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "Sell",
        type: "event",
      },
      {
        inputs: [],
        name: "tokenContract",
        outputs: [
          {
            internalType: "contract MmsToken",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [],
        name: "tokenPrice",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [],
        name: "tokensSold",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
        constant: true,
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_numberOfTokens",
            type: "uint256",
          },
        ],
        name: "buyTokens",
        outputs: [],
        stateMutability: "payable",
        type: "function",
        payable: true,
      },
      {
        inputs: [],
        name: "endSale",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    metadata:
      '{"compiler":{"version":"0.8.15+commit.e14f2714"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"contract MmsToken","name":"_tokenContract","type":"address"},{"internalType":"uint256","name":"_tokenPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"Sell","type":"event"},{"inputs":[{"internalType":"uint256","name":"_numberOfTokens","type":"uint256"}],"name":"buyTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"endSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tokenContract","outputs":[{"internalType":"contract MmsToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokensSold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/contracts/TokenSale.sol":"TokenSale"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/MmsToken.sol":{"keccak256":"0x6992a072cc4b6d3c84d5ad21cf6a749f5af60799cfc1c2bd1a9ddbf7a3beb891","license":"MiT","urls":["bzz-raw://9dec554292180911fc6c1acbcac1499814e0000def78c10a39cbea461b58429f","dweb:/ipfs/QmUmCT3uE96MRy8cGhoFrRoywt37jH4ggPj7aaSY1FiAB9"]},"project:/contracts/TokenSale.sol":{"keccak256":"0xf1ddf815ee1cfa0702a522efb99e26a37b6db2568083496c89717c9d43ad6162","license":"MIT","urls":["bzz-raw://9ec66dd158d9f7c8fb44d4c1821ea03f41858189cd978ba80c5b42be7ee6a9c6","dweb:/ipfs/QmPveMdpJw1HgnsnyJ2VTmRbHZ5DAy8E16sh9AhjJC7khn"]}},"version":1}',
    bytecode:
      "0x608060405234801561001057600080fd5b50604051610a86380380610a868339818101604052810190610032919061016c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060028190555050506101ac565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100f1826100c6565b9050919050565b6000610103826100e6565b9050919050565b610113816100f8565b811461011e57600080fd5b50565b6000815190506101308161010a565b92915050565b6000819050919050565b61014981610136565b811461015457600080fd5b50565b60008151905061016681610140565b92915050565b60008060408385031215610183576101826100c1565b5b600061019185828601610121565b92505060206101a285828601610157565b9150509250929050565b6108cb806101bb6000396000f3fe60806040526004361061004a5760003560e01c80633610724e1461004f578063380d831b1461006b578063518ab2a81461008257806355a373d6146100ad5780637ff9b596146100d8575b600080fd5b61006960048036038101906100649190610559565b610103565b005b34801561007757600080fd5b506100806102c0565b005b34801561008e57600080fd5b506100976104b5565b6040516100a49190610595565b60405180910390f35b3480156100b957600080fd5b506100c26104bb565b6040516100cf919061062f565b60405180910390f35b3480156100e457600080fd5b506100ed6104e1565b6040516100fa9190610595565b60405180910390f35b61010f816002546104e7565b341461011a57600080fd5b80600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610176919061066b565b602060405180830381865afa158015610193573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b7919061069b565b10156101c257600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161021f9291906106c8565b6020604051808303816000875af115801561023e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102629190610729565b61026b57600080fd5b806003600082825461027d9190610785565b925050819055507f5e5e995ce3133561afceaa51a9a154d5db228cd7525d34df5185582c18d3df0933826040516102b59291906106c8565b60405180910390a150565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461031857600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103d2919061066b565b602060405180830381865afa1580156103ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610413919061069b565b6040518363ffffffff1660e01b81526004016104309291906106c8565b6020604051808303816000875af115801561044f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104739190610729565b61047c57600080fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b60008082148061050f57508282838561050091906107db565b92508261050d9190610864565b145b61051857600080fd5b92915050565b600080fd5b6000819050919050565b61053681610523565b811461054157600080fd5b50565b6000813590506105538161052d565b92915050565b60006020828403121561056f5761056e61051e565b5b600061057d84828501610544565b91505092915050565b61058f81610523565b82525050565b60006020820190506105aa6000830184610586565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006105f56105f06105eb846105b0565b6105d0565b6105b0565b9050919050565b6000610607826105da565b9050919050565b6000610619826105fc565b9050919050565b6106298161060e565b82525050565b60006020820190506106446000830184610620565b92915050565b6000610655826105b0565b9050919050565b6106658161064a565b82525050565b6000602082019050610680600083018461065c565b92915050565b6000815190506106958161052d565b92915050565b6000602082840312156106b1576106b061051e565b5b60006106bf84828501610686565b91505092915050565b60006040820190506106dd600083018561065c565b6106ea6020830184610586565b9392505050565b60008115159050919050565b610706816106f1565b811461071157600080fd5b50565b600081519050610723816106fd565b92915050565b60006020828403121561073f5761073e61051e565b5b600061074d84828501610714565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061079082610523565b915061079b83610523565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156107d0576107cf610756565b5b828201905092915050565b60006107e682610523565b91506107f183610523565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561082a57610829610756565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061086f82610523565b915061087a83610523565b92508261088a57610889610835565b5b82820490509291505056fea26469706673582212208f3966a955546b005272810e97f4abc756289408664045c36eaa2d15b44a02a264736f6c634300080f0033",
    deployedBytecode:
      "0x60806040526004361061004a5760003560e01c80633610724e1461004f578063380d831b1461006b578063518ab2a81461008257806355a373d6146100ad5780637ff9b596146100d8575b600080fd5b61006960048036038101906100649190610559565b610103565b005b34801561007757600080fd5b506100806102c0565b005b34801561008e57600080fd5b506100976104b5565b6040516100a49190610595565b60405180910390f35b3480156100b957600080fd5b506100c26104bb565b6040516100cf919061062f565b60405180910390f35b3480156100e457600080fd5b506100ed6104e1565b6040516100fa9190610595565b60405180910390f35b61010f816002546104e7565b341461011a57600080fd5b80600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610176919061066b565b602060405180830381865afa158015610193573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b7919061069b565b10156101c257600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b815260040161021f9291906106c8565b6020604051808303816000875af115801561023e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102629190610729565b61026b57600080fd5b806003600082825461027d9190610785565b925050819055507f5e5e995ce3133561afceaa51a9a154d5db228cd7525d34df5185582c18d3df0933826040516102b59291906106c8565b60405180910390a150565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461031857600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103d2919061066b565b602060405180830381865afa1580156103ef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610413919061069b565b6040518363ffffffff1660e01b81526004016104309291906106c8565b6020604051808303816000875af115801561044f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104739190610729565b61047c57600080fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b60008082148061050f57508282838561050091906107db565b92508261050d9190610864565b145b61051857600080fd5b92915050565b600080fd5b6000819050919050565b61053681610523565b811461054157600080fd5b50565b6000813590506105538161052d565b92915050565b60006020828403121561056f5761056e61051e565b5b600061057d84828501610544565b91505092915050565b61058f81610523565b82525050565b60006020820190506105aa6000830184610586565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006105f56105f06105eb846105b0565b6105d0565b6105b0565b9050919050565b6000610607826105da565b9050919050565b6000610619826105fc565b9050919050565b6106298161060e565b82525050565b60006020820190506106446000830184610620565b92915050565b6000610655826105b0565b9050919050565b6106658161064a565b82525050565b6000602082019050610680600083018461065c565b92915050565b6000815190506106958161052d565b92915050565b6000602082840312156106b1576106b061051e565b5b60006106bf84828501610686565b91505092915050565b60006040820190506106dd600083018561065c565b6106ea6020830184610586565b9392505050565b60008115159050919050565b610706816106f1565b811461071157600080fd5b50565b600081519050610723816106fd565b92915050565b60006020828403121561073f5761073e61051e565b5b600061074d84828501610714565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061079082610523565b915061079b83610523565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156107d0576107cf610756565b5b828201905092915050565b60006107e682610523565b91506107f183610523565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561082a57610829610756565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061086f82610523565b915061087a83610523565b92508261088a57610889610835565b5b82820490509291505056fea26469706673582212208f3966a955546b005272810e97f4abc756289408664045c36eaa2d15b44a02a264736f6c634300080f0033",
    immutableReferences: {},
    generatedSources: [
      {
        ast: {
          nodeType: "YulBlock",
          src: "0:1971:3",
          statements: [
            {
              body: {
                nodeType: "YulBlock",
                src: "47:35:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "57:19:3",
                    value: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "73:2:3",
                          type: "",
                          value: "64",
                        },
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "67:5:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "67:9:3",
                    },
                    variableNames: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "57:6:3",
                      },
                    ],
                  },
                ],
              },
              name: "allocate_unbounded",
              nodeType: "YulFunctionDefinition",
              returnVariables: [
                {
                  name: "memPtr",
                  nodeType: "YulTypedName",
                  src: "40:6:3",
                  type: "",
                },
              ],
              src: "7:75:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "177:28:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "194:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "197:1:3",
                          type: "",
                          value: "0",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "187:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "187:12:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "187:12:3",
                  },
                ],
              },
              name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              nodeType: "YulFunctionDefinition",
              src: "88:117:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "300:28:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "317:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "320:1:3",
                          type: "",
                          value: "0",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "310:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "310:12:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "310:12:3",
                  },
                ],
              },
              name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              nodeType: "YulFunctionDefinition",
              src: "211:117:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "379:81:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "389:65:3",
                    value: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "404:5:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "411:42:3",
                          type: "",
                          value: "0xffffffffffffffffffffffffffffffffffffffff",
                        },
                      ],
                      functionName: {
                        name: "and",
                        nodeType: "YulIdentifier",
                        src: "400:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "400:54:3",
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "389:7:3",
                      },
                    ],
                  },
                ],
              },
              name: "cleanup_t_uint160",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "361:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "371:7:3",
                  type: "",
                },
              ],
              src: "334:126:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "511:51:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "521:35:3",
                    value: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "550:5:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint160",
                        nodeType: "YulIdentifier",
                        src: "532:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "532:24:3",
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "521:7:3",
                      },
                    ],
                  },
                ],
              },
              name: "cleanup_t_address",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "493:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "503:7:3",
                  type: "",
                },
              ],
              src: "466:96:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "635:51:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "645:35:3",
                    value: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "674:5:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_address",
                        nodeType: "YulIdentifier",
                        src: "656:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "656:24:3",
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "645:7:3",
                      },
                    ],
                  },
                ],
              },
              name: "cleanup_t_contract$_MmsToken_$185",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "617:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "627:7:3",
                  type: "",
                },
              ],
              src: "568:118:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "757:101:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "836:16:3",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "845:1:3",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "848:1:3",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nodeType: "YulIdentifier",
                              src: "838:6:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "838:12:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "838:12:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "780:5:3",
                            },
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "827:5:3",
                                },
                              ],
                              functionName: {
                                name: "cleanup_t_contract$_MmsToken_$185",
                                nodeType: "YulIdentifier",
                                src: "787:39:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "787:46:3",
                            },
                          ],
                          functionName: {
                            name: "eq",
                            nodeType: "YulIdentifier",
                            src: "777:2:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "777:57:3",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "770:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "770:65:3",
                    },
                    nodeType: "YulIf",
                    src: "767:85:3",
                  },
                ],
              },
              name: "validator_revert_t_contract$_MmsToken_$185",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "750:5:3",
                  type: "",
                },
              ],
              src: "692:166:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "949:102:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "959:22:3",
                    value: {
                      arguments: [
                        {
                          name: "offset",
                          nodeType: "YulIdentifier",
                          src: "974:6:3",
                        },
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "968:5:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "968:13:3",
                    },
                    variableNames: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "959:5:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "1039:5:3",
                        },
                      ],
                      functionName: {
                        name: "validator_revert_t_contract$_MmsToken_$185",
                        nodeType: "YulIdentifier",
                        src: "990:48:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "990:55:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "990:55:3",
                  },
                ],
              },
              name: "abi_decode_t_contract$_MmsToken_$185_fromMemory",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "offset",
                  nodeType: "YulTypedName",
                  src: "927:6:3",
                  type: "",
                },
                {
                  name: "end",
                  nodeType: "YulTypedName",
                  src: "935:3:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "943:5:3",
                  type: "",
                },
              ],
              src: "864:187:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1102:32:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1112:16:3",
                    value: {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "1123:5:3",
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "1112:7:3",
                      },
                    ],
                  },
                ],
              },
              name: "cleanup_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1084:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "1094:7:3",
                  type: "",
                },
              ],
              src: "1057:77:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1183:79:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "1240:16:3",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "1249:1:3",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "1252:1:3",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nodeType: "YulIdentifier",
                              src: "1242:6:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1242:12:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "1242:12:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "1206:5:3",
                            },
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "1231:5:3",
                                },
                              ],
                              functionName: {
                                name: "cleanup_t_uint256",
                                nodeType: "YulIdentifier",
                                src: "1213:17:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "1213:24:3",
                            },
                          ],
                          functionName: {
                            name: "eq",
                            nodeType: "YulIdentifier",
                            src: "1203:2:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1203:35:3",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "1196:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1196:43:3",
                    },
                    nodeType: "YulIf",
                    src: "1193:63:3",
                  },
                ],
              },
              name: "validator_revert_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1176:5:3",
                  type: "",
                },
              ],
              src: "1140:122:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1331:80:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1341:22:3",
                    value: {
                      arguments: [
                        {
                          name: "offset",
                          nodeType: "YulIdentifier",
                          src: "1356:6:3",
                        },
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "1350:5:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1350:13:3",
                    },
                    variableNames: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1341:5:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "1399:5:3",
                        },
                      ],
                      functionName: {
                        name: "validator_revert_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "1372:26:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1372:33:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "1372:33:3",
                  },
                ],
              },
              name: "abi_decode_t_uint256_fromMemory",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "offset",
                  nodeType: "YulTypedName",
                  src: "1309:6:3",
                  type: "",
                },
                {
                  name: "end",
                  nodeType: "YulTypedName",
                  src: "1317:3:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1325:5:3",
                  type: "",
                },
              ],
              src: "1268:143:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1533:435:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "1579:83:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              nodeType: "YulIdentifier",
                              src: "1581:77:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1581:79:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "1581:79:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "1554:7:3",
                            },
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "1563:9:3",
                            },
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "1550:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1550:23:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1575:2:3",
                          type: "",
                          value: "64",
                        },
                      ],
                      functionName: {
                        name: "slt",
                        nodeType: "YulIdentifier",
                        src: "1546:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1546:32:3",
                    },
                    nodeType: "YulIf",
                    src: "1543:119:3",
                  },
                  {
                    nodeType: "YulBlock",
                    src: "1672:150:3",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "1687:15:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1701:1:3",
                          type: "",
                          value: "0",
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "1691:6:3",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "1716:96:3",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "1784:9:3",
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "1795:6:3",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "1780:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "1780:22:3",
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "1804:7:3",
                            },
                          ],
                          functionName: {
                            name: "abi_decode_t_contract$_MmsToken_$185_fromMemory",
                            nodeType: "YulIdentifier",
                            src: "1726:53:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1726:86:3",
                        },
                        variableNames: [
                          {
                            name: "value0",
                            nodeType: "YulIdentifier",
                            src: "1716:6:3",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    nodeType: "YulBlock",
                    src: "1832:129:3",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "1847:16:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1861:2:3",
                          type: "",
                          value: "32",
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "1851:6:3",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "1877:74:3",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "1923:9:3",
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "1934:6:3",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "1919:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "1919:22:3",
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "1943:7:3",
                            },
                          ],
                          functionName: {
                            name: "abi_decode_t_uint256_fromMemory",
                            nodeType: "YulIdentifier",
                            src: "1887:31:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1887:64:3",
                        },
                        variableNames: [
                          {
                            name: "value1",
                            nodeType: "YulIdentifier",
                            src: "1877:6:3",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              name: "abi_decode_tuple_t_contract$_MmsToken_$185t_uint256_fromMemory",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "1495:9:3",
                  type: "",
                },
                {
                  name: "dataEnd",
                  nodeType: "YulTypedName",
                  src: "1506:7:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "1518:6:3",
                  type: "",
                },
                {
                  name: "value1",
                  nodeType: "YulTypedName",
                  src: "1526:6:3",
                  type: "",
                },
              ],
              src: "1417:551:3",
            },
          ],
        },
        contents:
          "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_contract$_MmsToken_$185(value) -> cleaned {\n        cleaned := cleanup_t_address(value)\n    }\n\n    function validator_revert_t_contract$_MmsToken_$185(value) {\n        if iszero(eq(value, cleanup_t_contract$_MmsToken_$185(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_contract$_MmsToken_$185_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_contract$_MmsToken_$185(value)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_contract$_MmsToken_$185t_uint256_fromMemory(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_contract$_MmsToken_$185_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n}\n",
        id: 3,
        language: "Yul",
        name: "#utility.yul",
      },
    ],
    deployedGeneratedSources: [
      {
        ast: {
          nodeType: "YulBlock",
          src: "0:5697:3",
          statements: [
            {
              body: {
                nodeType: "YulBlock",
                src: "47:35:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "57:19:3",
                    value: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "73:2:3",
                          type: "",
                          value: "64",
                        },
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "67:5:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "67:9:3",
                    },
                    variableNames: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "57:6:3",
                      },
                    ],
                  },
                ],
              },
              name: "allocate_unbounded",
              nodeType: "YulFunctionDefinition",
              returnVariables: [
                {
                  name: "memPtr",
                  nodeType: "YulTypedName",
                  src: "40:6:3",
                  type: "",
                },
              ],
              src: "7:75:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "177:28:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "194:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "197:1:3",
                          type: "",
                          value: "0",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "187:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "187:12:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "187:12:3",
                  },
                ],
              },
              name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              nodeType: "YulFunctionDefinition",
              src: "88:117:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "300:28:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "317:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "320:1:3",
                          type: "",
                          value: "0",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "310:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "310:12:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "310:12:3",
                  },
                ],
              },
              name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              nodeType: "YulFunctionDefinition",
              src: "211:117:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "379:32:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "389:16:3",
                    value: {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "400:5:3",
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "389:7:3",
                      },
                    ],
                  },
                ],
              },
              name: "cleanup_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "361:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "371:7:3",
                  type: "",
                },
              ],
              src: "334:77:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "460:79:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "517:16:3",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "526:1:3",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "529:1:3",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nodeType: "YulIdentifier",
                              src: "519:6:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "519:12:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "519:12:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "483:5:3",
                            },
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "508:5:3",
                                },
                              ],
                              functionName: {
                                name: "cleanup_t_uint256",
                                nodeType: "YulIdentifier",
                                src: "490:17:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "490:24:3",
                            },
                          ],
                          functionName: {
                            name: "eq",
                            nodeType: "YulIdentifier",
                            src: "480:2:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "480:35:3",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "473:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "473:43:3",
                    },
                    nodeType: "YulIf",
                    src: "470:63:3",
                  },
                ],
              },
              name: "validator_revert_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "453:5:3",
                  type: "",
                },
              ],
              src: "417:122:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "597:87:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "607:29:3",
                    value: {
                      arguments: [
                        {
                          name: "offset",
                          nodeType: "YulIdentifier",
                          src: "629:6:3",
                        },
                      ],
                      functionName: {
                        name: "calldataload",
                        nodeType: "YulIdentifier",
                        src: "616:12:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "616:20:3",
                    },
                    variableNames: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "607:5:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "672:5:3",
                        },
                      ],
                      functionName: {
                        name: "validator_revert_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "645:26:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "645:33:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "645:33:3",
                  },
                ],
              },
              name: "abi_decode_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "offset",
                  nodeType: "YulTypedName",
                  src: "575:6:3",
                  type: "",
                },
                {
                  name: "end",
                  nodeType: "YulTypedName",
                  src: "583:3:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "591:5:3",
                  type: "",
                },
              ],
              src: "545:139:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "756:263:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "802:83:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              nodeType: "YulIdentifier",
                              src: "804:77:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "804:79:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "804:79:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "777:7:3",
                            },
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "786:9:3",
                            },
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "773:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "773:23:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "798:2:3",
                          type: "",
                          value: "32",
                        },
                      ],
                      functionName: {
                        name: "slt",
                        nodeType: "YulIdentifier",
                        src: "769:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "769:32:3",
                    },
                    nodeType: "YulIf",
                    src: "766:119:3",
                  },
                  {
                    nodeType: "YulBlock",
                    src: "895:117:3",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "910:15:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "924:1:3",
                          type: "",
                          value: "0",
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "914:6:3",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "939:63:3",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "974:9:3",
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "985:6:3",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "970:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "970:22:3",
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "994:7:3",
                            },
                          ],
                          functionName: {
                            name: "abi_decode_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "949:20:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "949:53:3",
                        },
                        variableNames: [
                          {
                            name: "value0",
                            nodeType: "YulIdentifier",
                            src: "939:6:3",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              name: "abi_decode_tuple_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "726:9:3",
                  type: "",
                },
                {
                  name: "dataEnd",
                  nodeType: "YulTypedName",
                  src: "737:7:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "749:6:3",
                  type: "",
                },
              ],
              src: "690:329:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1090:53:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "1107:3:3",
                        },
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "1130:5:3",
                            },
                          ],
                          functionName: {
                            name: "cleanup_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "1112:17:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1112:24:3",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "1100:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1100:37:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "1100:37:3",
                  },
                ],
              },
              name: "abi_encode_t_uint256_to_t_uint256_fromStack",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1078:5:3",
                  type: "",
                },
                {
                  name: "pos",
                  nodeType: "YulTypedName",
                  src: "1085:3:3",
                  type: "",
                },
              ],
              src: "1025:118:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1247:124:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1257:26:3",
                    value: {
                      arguments: [
                        {
                          name: "headStart",
                          nodeType: "YulIdentifier",
                          src: "1269:9:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1280:2:3",
                          type: "",
                          value: "32",
                        },
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "1265:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1265:18:3",
                    },
                    variableNames: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "1257:4:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "1337:6:3",
                        },
                        {
                          arguments: [
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "1350:9:3",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "1361:1:3",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "1346:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1346:17:3",
                        },
                      ],
                      functionName: {
                        name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                        nodeType: "YulIdentifier",
                        src: "1293:43:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1293:71:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "1293:71:3",
                  },
                ],
              },
              name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "1219:9:3",
                  type: "",
                },
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "1231:6:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "tail",
                  nodeType: "YulTypedName",
                  src: "1242:4:3",
                  type: "",
                },
              ],
              src: "1149:222:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1422:81:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1432:65:3",
                    value: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "1447:5:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "1454:42:3",
                          type: "",
                          value: "0xffffffffffffffffffffffffffffffffffffffff",
                        },
                      ],
                      functionName: {
                        name: "and",
                        nodeType: "YulIdentifier",
                        src: "1443:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1443:54:3",
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "1432:7:3",
                      },
                    ],
                  },
                ],
              },
              name: "cleanup_t_uint160",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1404:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "1414:7:3",
                  type: "",
                },
              ],
              src: "1377:126:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1541:28:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1551:12:3",
                    value: {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "1558:5:3",
                    },
                    variableNames: [
                      {
                        name: "ret",
                        nodeType: "YulIdentifier",
                        src: "1551:3:3",
                      },
                    ],
                  },
                ],
              },
              name: "identity",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1527:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "ret",
                  nodeType: "YulTypedName",
                  src: "1537:3:3",
                  type: "",
                },
              ],
              src: "1509:60:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1635:82:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1645:66:3",
                    value: {
                      arguments: [
                        {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "1703:5:3",
                                },
                              ],
                              functionName: {
                                name: "cleanup_t_uint160",
                                nodeType: "YulIdentifier",
                                src: "1685:17:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "1685:24:3",
                            },
                          ],
                          functionName: {
                            name: "identity",
                            nodeType: "YulIdentifier",
                            src: "1676:8:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "1676:34:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint160",
                        nodeType: "YulIdentifier",
                        src: "1658:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1658:53:3",
                    },
                    variableNames: [
                      {
                        name: "converted",
                        nodeType: "YulIdentifier",
                        src: "1645:9:3",
                      },
                    ],
                  },
                ],
              },
              name: "convert_t_uint160_to_t_uint160",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1615:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "converted",
                  nodeType: "YulTypedName",
                  src: "1625:9:3",
                  type: "",
                },
              ],
              src: "1575:142:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1783:66:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1793:50:3",
                    value: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "1837:5:3",
                        },
                      ],
                      functionName: {
                        name: "convert_t_uint160_to_t_uint160",
                        nodeType: "YulIdentifier",
                        src: "1806:30:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1806:37:3",
                    },
                    variableNames: [
                      {
                        name: "converted",
                        nodeType: "YulIdentifier",
                        src: "1793:9:3",
                      },
                    ],
                  },
                ],
              },
              name: "convert_t_uint160_to_t_address",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1763:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "converted",
                  nodeType: "YulTypedName",
                  src: "1773:9:3",
                  type: "",
                },
              ],
              src: "1723:126:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "1937:66:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "1947:50:3",
                    value: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "1991:5:3",
                        },
                      ],
                      functionName: {
                        name: "convert_t_uint160_to_t_address",
                        nodeType: "YulIdentifier",
                        src: "1960:30:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "1960:37:3",
                    },
                    variableNames: [
                      {
                        name: "converted",
                        nodeType: "YulIdentifier",
                        src: "1947:9:3",
                      },
                    ],
                  },
                ],
              },
              name: "convert_t_contract$_MmsToken_$185_to_t_address",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "1917:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "converted",
                  nodeType: "YulTypedName",
                  src: "1927:9:3",
                  type: "",
                },
              ],
              src: "1855:148:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2096:88:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "2113:3:3",
                        },
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "2171:5:3",
                            },
                          ],
                          functionName: {
                            name: "convert_t_contract$_MmsToken_$185_to_t_address",
                            nodeType: "YulIdentifier",
                            src: "2118:52:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2118:59:3",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "2106:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2106:72:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "2106:72:3",
                  },
                ],
              },
              name: "abi_encode_t_contract$_MmsToken_$185_to_t_address_fromStack",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "2084:5:3",
                  type: "",
                },
                {
                  name: "pos",
                  nodeType: "YulTypedName",
                  src: "2091:3:3",
                  type: "",
                },
              ],
              src: "2009:175:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2310:146:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "2320:26:3",
                    value: {
                      arguments: [
                        {
                          name: "headStart",
                          nodeType: "YulIdentifier",
                          src: "2332:9:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "2343:2:3",
                          type: "",
                          value: "32",
                        },
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "2328:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2328:18:3",
                    },
                    variableNames: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "2320:4:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "2422:6:3",
                        },
                        {
                          arguments: [
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "2435:9:3",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2446:1:3",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "2431:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2431:17:3",
                        },
                      ],
                      functionName: {
                        name: "abi_encode_t_contract$_MmsToken_$185_to_t_address_fromStack",
                        nodeType: "YulIdentifier",
                        src: "2356:65:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2356:93:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "2356:93:3",
                  },
                ],
              },
              name: "abi_encode_tuple_t_contract$_MmsToken_$185__to_t_address__fromStack_reversed",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "2282:9:3",
                  type: "",
                },
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "2294:6:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "tail",
                  nodeType: "YulTypedName",
                  src: "2305:4:3",
                  type: "",
                },
              ],
              src: "2190:266:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2507:51:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "2517:35:3",
                    value: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "2546:5:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint160",
                        nodeType: "YulIdentifier",
                        src: "2528:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2528:24:3",
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "2517:7:3",
                      },
                    ],
                  },
                ],
              },
              name: "cleanup_t_address",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "2489:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "2499:7:3",
                  type: "",
                },
              ],
              src: "2462:96:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2629:53:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          name: "pos",
                          nodeType: "YulIdentifier",
                          src: "2646:3:3",
                        },
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "2669:5:3",
                            },
                          ],
                          functionName: {
                            name: "cleanup_t_address",
                            nodeType: "YulIdentifier",
                            src: "2651:17:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2651:24:3",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "2639:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2639:37:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "2639:37:3",
                  },
                ],
              },
              name: "abi_encode_t_address_to_t_address_fromStack",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "2617:5:3",
                  type: "",
                },
                {
                  name: "pos",
                  nodeType: "YulTypedName",
                  src: "2624:3:3",
                  type: "",
                },
              ],
              src: "2564:118:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2786:124:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "2796:26:3",
                    value: {
                      arguments: [
                        {
                          name: "headStart",
                          nodeType: "YulIdentifier",
                          src: "2808:9:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "2819:2:3",
                          type: "",
                          value: "32",
                        },
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "2804:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2804:18:3",
                    },
                    variableNames: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "2796:4:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "2876:6:3",
                        },
                        {
                          arguments: [
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "2889:9:3",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2900:1:3",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "2885:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2885:17:3",
                        },
                      ],
                      functionName: {
                        name: "abi_encode_t_address_to_t_address_fromStack",
                        nodeType: "YulIdentifier",
                        src: "2832:43:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2832:71:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "2832:71:3",
                  },
                ],
              },
              name: "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "2758:9:3",
                  type: "",
                },
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "2770:6:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "tail",
                  nodeType: "YulTypedName",
                  src: "2781:4:3",
                  type: "",
                },
              ],
              src: "2688:222:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "2979:80:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "2989:22:3",
                    value: {
                      arguments: [
                        {
                          name: "offset",
                          nodeType: "YulIdentifier",
                          src: "3004:6:3",
                        },
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "2998:5:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "2998:13:3",
                    },
                    variableNames: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "2989:5:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "3047:5:3",
                        },
                      ],
                      functionName: {
                        name: "validator_revert_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "3020:26:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3020:33:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "3020:33:3",
                  },
                ],
              },
              name: "abi_decode_t_uint256_fromMemory",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "offset",
                  nodeType: "YulTypedName",
                  src: "2957:6:3",
                  type: "",
                },
                {
                  name: "end",
                  nodeType: "YulTypedName",
                  src: "2965:3:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "2973:5:3",
                  type: "",
                },
              ],
              src: "2916:143:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3142:274:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "3188:83:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              nodeType: "YulIdentifier",
                              src: "3190:77:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3190:79:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "3190:79:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "3163:7:3",
                            },
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "3172:9:3",
                            },
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "3159:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3159:23:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "3184:2:3",
                          type: "",
                          value: "32",
                        },
                      ],
                      functionName: {
                        name: "slt",
                        nodeType: "YulIdentifier",
                        src: "3155:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3155:32:3",
                    },
                    nodeType: "YulIf",
                    src: "3152:119:3",
                  },
                  {
                    nodeType: "YulBlock",
                    src: "3281:128:3",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "3296:15:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "3310:1:3",
                          type: "",
                          value: "0",
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "3300:6:3",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "3325:74:3",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "3371:9:3",
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "3382:6:3",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "3367:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "3367:22:3",
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "3391:7:3",
                            },
                          ],
                          functionName: {
                            name: "abi_decode_t_uint256_fromMemory",
                            nodeType: "YulIdentifier",
                            src: "3335:31:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3335:64:3",
                        },
                        variableNames: [
                          {
                            name: "value0",
                            nodeType: "YulIdentifier",
                            src: "3325:6:3",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              name: "abi_decode_tuple_t_uint256_fromMemory",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "3112:9:3",
                  type: "",
                },
                {
                  name: "dataEnd",
                  nodeType: "YulTypedName",
                  src: "3123:7:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "3135:6:3",
                  type: "",
                },
              ],
              src: "3065:351:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3548:206:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "3558:26:3",
                    value: {
                      arguments: [
                        {
                          name: "headStart",
                          nodeType: "YulIdentifier",
                          src: "3570:9:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "3581:2:3",
                          type: "",
                          value: "64",
                        },
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "3566:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3566:18:3",
                    },
                    variableNames: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "3558:4:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "3638:6:3",
                        },
                        {
                          arguments: [
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "3651:9:3",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3662:1:3",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "3647:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3647:17:3",
                        },
                      ],
                      functionName: {
                        name: "abi_encode_t_address_to_t_address_fromStack",
                        nodeType: "YulIdentifier",
                        src: "3594:43:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3594:71:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "3594:71:3",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "3719:6:3",
                        },
                        {
                          arguments: [
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "3732:9:3",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3743:2:3",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "3728:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3728:18:3",
                        },
                      ],
                      functionName: {
                        name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                        nodeType: "YulIdentifier",
                        src: "3675:43:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3675:72:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "3675:72:3",
                  },
                ],
              },
              name: "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "3512:9:3",
                  type: "",
                },
                {
                  name: "value1",
                  nodeType: "YulTypedName",
                  src: "3524:6:3",
                  type: "",
                },
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "3532:6:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "tail",
                  nodeType: "YulTypedName",
                  src: "3543:4:3",
                  type: "",
                },
              ],
              src: "3422:332:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3802:48:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "3812:32:3",
                    value: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "3837:5:3",
                            },
                          ],
                          functionName: {
                            name: "iszero",
                            nodeType: "YulIdentifier",
                            src: "3830:6:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3830:13:3",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "3823:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3823:21:3",
                    },
                    variableNames: [
                      {
                        name: "cleaned",
                        nodeType: "YulIdentifier",
                        src: "3812:7:3",
                      },
                    ],
                  },
                ],
              },
              name: "cleanup_t_bool",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "3784:5:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "cleaned",
                  nodeType: "YulTypedName",
                  src: "3794:7:3",
                  type: "",
                },
              ],
              src: "3760:90:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "3896:76:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "3950:16:3",
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "3959:1:3",
                                type: "",
                                value: "0",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "3962:1:3",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "revert",
                              nodeType: "YulIdentifier",
                              src: "3952:6:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3952:12:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "3952:12:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "value",
                              nodeType: "YulIdentifier",
                              src: "3919:5:3",
                            },
                            {
                              arguments: [
                                {
                                  name: "value",
                                  nodeType: "YulIdentifier",
                                  src: "3941:5:3",
                                },
                              ],
                              functionName: {
                                name: "cleanup_t_bool",
                                nodeType: "YulIdentifier",
                                src: "3926:14:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "3926:21:3",
                            },
                          ],
                          functionName: {
                            name: "eq",
                            nodeType: "YulIdentifier",
                            src: "3916:2:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3916:32:3",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "3909:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "3909:40:3",
                    },
                    nodeType: "YulIf",
                    src: "3906:60:3",
                  },
                ],
              },
              name: "validator_revert_t_bool",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "3889:5:3",
                  type: "",
                },
              ],
              src: "3856:116:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "4038:77:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "4048:22:3",
                    value: {
                      arguments: [
                        {
                          name: "offset",
                          nodeType: "YulIdentifier",
                          src: "4063:6:3",
                        },
                      ],
                      functionName: {
                        name: "mload",
                        nodeType: "YulIdentifier",
                        src: "4057:5:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4057:13:3",
                    },
                    variableNames: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "4048:5:3",
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: "value",
                          nodeType: "YulIdentifier",
                          src: "4103:5:3",
                        },
                      ],
                      functionName: {
                        name: "validator_revert_t_bool",
                        nodeType: "YulIdentifier",
                        src: "4079:23:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4079:30:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "4079:30:3",
                  },
                ],
              },
              name: "abi_decode_t_bool_fromMemory",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "offset",
                  nodeType: "YulTypedName",
                  src: "4016:6:3",
                  type: "",
                },
                {
                  name: "end",
                  nodeType: "YulTypedName",
                  src: "4024:3:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value",
                  nodeType: "YulTypedName",
                  src: "4032:5:3",
                  type: "",
                },
              ],
              src: "3978:137:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "4195:271:3",
                statements: [
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "4241:83:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              nodeType: "YulIdentifier",
                              src: "4243:77:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "4243:79:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "4243:79:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "4216:7:3",
                            },
                            {
                              name: "headStart",
                              nodeType: "YulIdentifier",
                              src: "4225:9:3",
                            },
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "4212:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4212:23:3",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4237:2:3",
                          type: "",
                          value: "32",
                        },
                      ],
                      functionName: {
                        name: "slt",
                        nodeType: "YulIdentifier",
                        src: "4208:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4208:32:3",
                    },
                    nodeType: "YulIf",
                    src: "4205:119:3",
                  },
                  {
                    nodeType: "YulBlock",
                    src: "4334:125:3",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "4349:15:3",
                        value: {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4363:1:3",
                          type: "",
                          value: "0",
                        },
                        variables: [
                          {
                            name: "offset",
                            nodeType: "YulTypedName",
                            src: "4353:6:3",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulAssignment",
                        src: "4378:71:3",
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "headStart",
                                  nodeType: "YulIdentifier",
                                  src: "4421:9:3",
                                },
                                {
                                  name: "offset",
                                  nodeType: "YulIdentifier",
                                  src: "4432:6:3",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "4417:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4417:22:3",
                            },
                            {
                              name: "dataEnd",
                              nodeType: "YulIdentifier",
                              src: "4441:7:3",
                            },
                          ],
                          functionName: {
                            name: "abi_decode_t_bool_fromMemory",
                            nodeType: "YulIdentifier",
                            src: "4388:28:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4388:61:3",
                        },
                        variableNames: [
                          {
                            name: "value0",
                            nodeType: "YulIdentifier",
                            src: "4378:6:3",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              name: "abi_decode_tuple_t_bool_fromMemory",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "headStart",
                  nodeType: "YulTypedName",
                  src: "4165:9:3",
                  type: "",
                },
                {
                  name: "dataEnd",
                  nodeType: "YulTypedName",
                  src: "4176:7:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "value0",
                  nodeType: "YulTypedName",
                  src: "4188:6:3",
                  type: "",
                },
              ],
              src: "4121:345:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "4500:152:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4517:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4520:77:3",
                          type: "",
                          value:
                            "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "4510:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4510:88:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "4510:88:3",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4614:1:3",
                          type: "",
                          value: "4",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4617:4:3",
                          type: "",
                          value: "0x11",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "4607:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4607:15:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "4607:15:3",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4638:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "4641:4:3",
                          type: "",
                          value: "0x24",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "4631:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4631:15:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "4631:15:3",
                  },
                ],
              },
              name: "panic_error_0x11",
              nodeType: "YulFunctionDefinition",
              src: "4472:180:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "4702:261:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "4712:25:3",
                    value: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "4735:1:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "4717:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4717:20:3",
                    },
                    variableNames: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "4712:1:3",
                      },
                    ],
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "4746:25:3",
                    value: {
                      arguments: [
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "4769:1:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "4751:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4751:20:3",
                    },
                    variableNames: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "4746:1:3",
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "4909:22:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "panic_error_0x11",
                              nodeType: "YulIdentifier",
                              src: "4911:16:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "4911:18:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "4911:18:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "4830:1:3",
                        },
                        {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4837:66:3",
                              type: "",
                              value:
                                "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                            },
                            {
                              name: "y",
                              nodeType: "YulIdentifier",
                              src: "4905:1:3",
                            },
                          ],
                          functionName: {
                            name: "sub",
                            nodeType: "YulIdentifier",
                            src: "4833:3:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4833:74:3",
                        },
                      ],
                      functionName: {
                        name: "gt",
                        nodeType: "YulIdentifier",
                        src: "4827:2:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4827:81:3",
                    },
                    nodeType: "YulIf",
                    src: "4824:107:3",
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "4941:16:3",
                    value: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "4952:1:3",
                        },
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "4955:1:3",
                        },
                      ],
                      functionName: {
                        name: "add",
                        nodeType: "YulIdentifier",
                        src: "4948:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "4948:9:3",
                    },
                    variableNames: [
                      {
                        name: "sum",
                        nodeType: "YulIdentifier",
                        src: "4941:3:3",
                      },
                    ],
                  },
                ],
              },
              name: "checked_add_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "x",
                  nodeType: "YulTypedName",
                  src: "4689:1:3",
                  type: "",
                },
                {
                  name: "y",
                  nodeType: "YulTypedName",
                  src: "4692:1:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "sum",
                  nodeType: "YulTypedName",
                  src: "4698:3:3",
                  type: "",
                },
              ],
              src: "4658:305:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5017:300:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "5027:25:3",
                    value: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "5050:1:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "5032:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5032:20:3",
                    },
                    variableNames: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "5027:1:3",
                      },
                    ],
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "5061:25:3",
                    value: {
                      arguments: [
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "5084:1:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "5066:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5066:20:3",
                    },
                    variableNames: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "5061:1:3",
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "5259:22:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "panic_error_0x11",
                              nodeType: "YulIdentifier",
                              src: "5261:16:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5261:18:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "5261:18:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "x",
                                  nodeType: "YulIdentifier",
                                  src: "5171:1:3",
                                },
                              ],
                              functionName: {
                                name: "iszero",
                                nodeType: "YulIdentifier",
                                src: "5164:6:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "5164:9:3",
                            },
                          ],
                          functionName: {
                            name: "iszero",
                            nodeType: "YulIdentifier",
                            src: "5157:6:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5157:17:3",
                        },
                        {
                          arguments: [
                            {
                              name: "y",
                              nodeType: "YulIdentifier",
                              src: "5179:1:3",
                            },
                            {
                              arguments: [
                                {
                                  kind: "number",
                                  nodeType: "YulLiteral",
                                  src: "5186:66:3",
                                  type: "",
                                  value:
                                    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                                },
                                {
                                  name: "x",
                                  nodeType: "YulIdentifier",
                                  src: "5254:1:3",
                                },
                              ],
                              functionName: {
                                name: "div",
                                nodeType: "YulIdentifier",
                                src: "5182:3:3",
                              },
                              nodeType: "YulFunctionCall",
                              src: "5182:74:3",
                            },
                          ],
                          functionName: {
                            name: "gt",
                            nodeType: "YulIdentifier",
                            src: "5176:2:3",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5176:81:3",
                        },
                      ],
                      functionName: {
                        name: "and",
                        nodeType: "YulIdentifier",
                        src: "5153:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5153:105:3",
                    },
                    nodeType: "YulIf",
                    src: "5150:131:3",
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "5291:20:3",
                    value: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "5306:1:3",
                        },
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "5309:1:3",
                        },
                      ],
                      functionName: {
                        name: "mul",
                        nodeType: "YulIdentifier",
                        src: "5302:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5302:9:3",
                    },
                    variableNames: [
                      {
                        name: "product",
                        nodeType: "YulIdentifier",
                        src: "5291:7:3",
                      },
                    ],
                  },
                ],
              },
              name: "checked_mul_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "x",
                  nodeType: "YulTypedName",
                  src: "5000:1:3",
                  type: "",
                },
                {
                  name: "y",
                  nodeType: "YulTypedName",
                  src: "5003:1:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "product",
                  nodeType: "YulTypedName",
                  src: "5009:7:3",
                  type: "",
                },
              ],
              src: "4969:348:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5351:152:3",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5368:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5371:77:3",
                          type: "",
                          value:
                            "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "5361:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5361:88:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5361:88:3",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5465:1:3",
                          type: "",
                          value: "4",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5468:4:3",
                          type: "",
                          value: "0x12",
                        },
                      ],
                      functionName: {
                        name: "mstore",
                        nodeType: "YulIdentifier",
                        src: "5458:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5458:15:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5458:15:3",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5489:1:3",
                          type: "",
                          value: "0",
                        },
                        {
                          kind: "number",
                          nodeType: "YulLiteral",
                          src: "5492:4:3",
                          type: "",
                          value: "0x24",
                        },
                      ],
                      functionName: {
                        name: "revert",
                        nodeType: "YulIdentifier",
                        src: "5482:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5482:15:3",
                    },
                    nodeType: "YulExpressionStatement",
                    src: "5482:15:3",
                  },
                ],
              },
              name: "panic_error_0x12",
              nodeType: "YulFunctionDefinition",
              src: "5323:180:3",
            },
            {
              body: {
                nodeType: "YulBlock",
                src: "5551:143:3",
                statements: [
                  {
                    nodeType: "YulAssignment",
                    src: "5561:25:3",
                    value: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "5584:1:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "5566:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5566:20:3",
                    },
                    variableNames: [
                      {
                        name: "x",
                        nodeType: "YulIdentifier",
                        src: "5561:1:3",
                      },
                    ],
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "5595:25:3",
                    value: {
                      arguments: [
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "5618:1:3",
                        },
                      ],
                      functionName: {
                        name: "cleanup_t_uint256",
                        nodeType: "YulIdentifier",
                        src: "5600:17:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5600:20:3",
                    },
                    variableNames: [
                      {
                        name: "y",
                        nodeType: "YulIdentifier",
                        src: "5595:1:3",
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: "YulBlock",
                      src: "5642:22:3",
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: "panic_error_0x12",
                              nodeType: "YulIdentifier",
                              src: "5644:16:3",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5644:18:3",
                          },
                          nodeType: "YulExpressionStatement",
                          src: "5644:18:3",
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "5639:1:3",
                        },
                      ],
                      functionName: {
                        name: "iszero",
                        nodeType: "YulIdentifier",
                        src: "5632:6:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5632:9:3",
                    },
                    nodeType: "YulIf",
                    src: "5629:35:3",
                  },
                  {
                    nodeType: "YulAssignment",
                    src: "5674:14:3",
                    value: {
                      arguments: [
                        {
                          name: "x",
                          nodeType: "YulIdentifier",
                          src: "5683:1:3",
                        },
                        {
                          name: "y",
                          nodeType: "YulIdentifier",
                          src: "5686:1:3",
                        },
                      ],
                      functionName: {
                        name: "div",
                        nodeType: "YulIdentifier",
                        src: "5679:3:3",
                      },
                      nodeType: "YulFunctionCall",
                      src: "5679:9:3",
                    },
                    variableNames: [
                      {
                        name: "r",
                        nodeType: "YulIdentifier",
                        src: "5674:1:3",
                      },
                    ],
                  },
                ],
              },
              name: "checked_div_t_uint256",
              nodeType: "YulFunctionDefinition",
              parameters: [
                {
                  name: "x",
                  nodeType: "YulTypedName",
                  src: "5540:1:3",
                  type: "",
                },
                {
                  name: "y",
                  nodeType: "YulTypedName",
                  src: "5543:1:3",
                  type: "",
                },
              ],
              returnVariables: [
                {
                  name: "r",
                  nodeType: "YulTypedName",
                  src: "5549:1:3",
                  type: "",
                },
              ],
              src: "5509:185:3",
            },
          ],
        },
        contents:
          "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint160_to_t_uint160(value) -> converted {\n        converted := cleanup_t_uint160(identity(cleanup_t_uint160(value)))\n    }\n\n    function convert_t_uint160_to_t_address(value) -> converted {\n        converted := convert_t_uint160_to_t_uint160(value)\n    }\n\n    function convert_t_contract$_MmsToken_$185_to_t_address(value) -> converted {\n        converted := convert_t_uint160_to_t_address(value)\n    }\n\n    function abi_encode_t_contract$_MmsToken_$185_to_t_address_fromStack(value, pos) {\n        mstore(pos, convert_t_contract$_MmsToken_$185_to_t_address(value))\n    }\n\n    function abi_encode_tuple_t_contract$_MmsToken_$185__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_contract$_MmsToken_$185_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_t_uint256_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_bool_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bool_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n}\n",
        id: 3,
        language: "Yul",
        name: "#utility.yul",
      },
    ],
    sourceMap:
      "97:1637:2:-:0;;;303:256;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;414:10;406:5;;:18;;;;;;;;;;;;;;;;;;478:14;462:13;;:30;;;;;;;;;;;;;;;;;;540:11;527:10;:24;;;;303:256;;97:1637;;88:117:3;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:118::-;627:7;656:24;674:5;656:24;:::i;:::-;645:35;;568:118;;;:::o;692:166::-;787:46;827:5;787:46;:::i;:::-;780:5;777:57;767:85;;848:1;845;838:12;767:85;692:166;:::o;864:187::-;943:5;974:6;968:13;959:22;;990:55;1039:5;990:55;:::i;:::-;864:187;;;;:::o;1057:77::-;1094:7;1123:5;1112:16;;1057:77;;;:::o;1140:122::-;1213:24;1231:5;1213:24;:::i;:::-;1206:5;1203:35;1193:63;;1252:1;1249;1242:12;1193:63;1140:122;:::o;1268:143::-;1325:5;1356:6;1350:13;1341:22;;1372:33;1399:5;1372:33;:::i;:::-;1268:143;;;;:::o;1417:551::-;1518:6;1526;1575:2;1563:9;1554:7;1550:23;1546:32;1543:119;;;1581:79;;:::i;:::-;1543:119;1701:1;1726:86;1804:7;1795:6;1784:9;1780:22;1726:86;:::i;:::-;1716:96;;1672:150;1861:2;1887:64;1943:7;1934:6;1923:9;1919:22;1887:64;:::i;:::-;1877:74;;1832:129;1417:551;;;;;:::o;97:1637:2:-;;;;;;;",
    deployedSourceMap:
      "97:1637:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;724:592;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1355:376;;;;;;;;;;;;;:::i;:::-;;217:25;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;143:35;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;185:25;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;724:592;865:37;874:15;891:10;;865:8;:37::i;:::-;852:9;:50;844:59;;;;;;1020:15;978:13;;;;;;;;;;;:23;;;1010:4;978:38;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:57;;970:66;;;;;;1099:13;;;;;;;;;;;:22;;;1122:10;1134:15;1099:51;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1091:60;;;;;;1213:15;1199:10;;:29;;;;;;;:::i;:::-;;;;;;;;1275:33;1280:10;1292:15;1275:33;;;;;;;:::i;:::-;;;;;;;;724:592;:::o;1355:376::-;1440:5;;;;;;;;;;1426:19;;:10;:19;;;1418:28;;;;;;1526:13;;;;;;;;;;;:22;;;1567:5;;;;;;;;;;1591:13;;;;;;;;;;;:23;;;1623:4;1591:38;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1526:118;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1504:151;;;;;;1716:5;;;;;;;;;;1695:28;;;217:25;;;;:::o;143:35::-;;;;;;;;;;;;;:::o;185:25::-;;;;:::o;584:132::-;647:9;682:1;677;:6;:30;;;;706:1;701;696;692;:5;;;;:::i;:::-;688:9;;;687:15;;;;:::i;:::-;:20;677:30;669:39;;;;;;584:132;;;;:::o;88:117:3:-;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:118::-;1112:24;1130:5;1112:24;:::i;:::-;1107:3;1100:37;1025:118;;:::o;1149:222::-;1242:4;1280:2;1269:9;1265:18;1257:26;;1293:71;1361:1;1350:9;1346:17;1337:6;1293:71;:::i;:::-;1149:222;;;;:::o;1377:126::-;1414:7;1454:42;1447:5;1443:54;1432:65;;1377:126;;;:::o;1509:60::-;1537:3;1558:5;1551:12;;1509:60;;;:::o;1575:142::-;1625:9;1658:53;1676:34;1685:24;1703:5;1685:24;:::i;:::-;1676:34;:::i;:::-;1658:53;:::i;:::-;1645:66;;1575:142;;;:::o;1723:126::-;1773:9;1806:37;1837:5;1806:37;:::i;:::-;1793:50;;1723:126;;;:::o;1855:148::-;1927:9;1960:37;1991:5;1960:37;:::i;:::-;1947:50;;1855:148;;;:::o;2009:175::-;2118:59;2171:5;2118:59;:::i;:::-;2113:3;2106:72;2009:175;;:::o;2190:266::-;2305:4;2343:2;2332:9;2328:18;2320:26;;2356:93;2446:1;2435:9;2431:17;2422:6;2356:93;:::i;:::-;2190:266;;;;:::o;2462:96::-;2499:7;2528:24;2546:5;2528:24;:::i;:::-;2517:35;;2462:96;;;:::o;2564:118::-;2651:24;2669:5;2651:24;:::i;:::-;2646:3;2639:37;2564:118;;:::o;2688:222::-;2781:4;2819:2;2808:9;2804:18;2796:26;;2832:71;2900:1;2889:9;2885:17;2876:6;2832:71;:::i;:::-;2688:222;;;;:::o;2916:143::-;2973:5;3004:6;2998:13;2989:22;;3020:33;3047:5;3020:33;:::i;:::-;2916:143;;;;:::o;3065:351::-;3135:6;3184:2;3172:9;3163:7;3159:23;3155:32;3152:119;;;3190:79;;:::i;:::-;3152:119;3310:1;3335:64;3391:7;3382:6;3371:9;3367:22;3335:64;:::i;:::-;3325:74;;3281:128;3065:351;;;;:::o;3422:332::-;3543:4;3581:2;3570:9;3566:18;3558:26;;3594:71;3662:1;3651:9;3647:17;3638:6;3594:71;:::i;:::-;3675:72;3743:2;3732:9;3728:18;3719:6;3675:72;:::i;:::-;3422:332;;;;;:::o;3760:90::-;3794:7;3837:5;3830:13;3823:21;3812:32;;3760:90;;;:::o;3856:116::-;3926:21;3941:5;3926:21;:::i;:::-;3919:5;3916:32;3906:60;;3962:1;3959;3952:12;3906:60;3856:116;:::o;3978:137::-;4032:5;4063:6;4057:13;4048:22;;4079:30;4103:5;4079:30;:::i;:::-;3978:137;;;;:::o;4121:345::-;4188:6;4237:2;4225:9;4216:7;4212:23;4208:32;4205:119;;;4243:79;;:::i;:::-;4205:119;4363:1;4388:61;4441:7;4432:6;4421:9;4417:22;4388:61;:::i;:::-;4378:71;;4334:125;4121:345;;;;:::o;4472:180::-;4520:77;4517:1;4510:88;4617:4;4614:1;4607:15;4641:4;4638:1;4631:15;4658:305;4698:3;4717:20;4735:1;4717:20;:::i;:::-;4712:25;;4751:20;4769:1;4751:20;:::i;:::-;4746:25;;4905:1;4837:66;4833:74;4830:1;4827:81;4824:107;;;4911:18;;:::i;:::-;4824:107;4955:1;4952;4948:9;4941:16;;4658:305;;;;:::o;4969:348::-;5009:7;5032:20;5050:1;5032:20;:::i;:::-;5027:25;;5066:20;5084:1;5066:20;:::i;:::-;5061:25;;5254:1;5186:66;5182:74;5179:1;5176:81;5171:1;5164:9;5157:17;5153:105;5150:131;;;5261:18;;:::i;:::-;5150:131;5309:1;5306;5302:9;5291:20;;4969:348;;;;:::o;5323:180::-;5371:77;5368:1;5361:88;5468:4;5465:1;5458:15;5492:4;5489:1;5482:15;5509:185;5549:1;5566:20;5584:1;5566:20;:::i;:::-;5561:25;;5600:20;5618:1;5600:20;:::i;:::-;5595:25;;5639:1;5629:35;;5644:18;;:::i;:::-;5629:35;5686:1;5683;5679:9;5674:14;;5509:185;;;;:::o",
    source:
      '// SPDX-License-Identifier: MIT\r\n\r\npragma solidity ^0.8.10;\r\n\r\nimport "./MmsToken.sol";\r\n\r\ncontract TokenSale {\r\n    address admin;\r\n    MmsToken public tokenContract;\r\n    uint256 public tokenPrice;\r\n    uint256 public tokensSold;\r\n\r\n    event Sell(address _buyer, uint256 _amount);\r\n\r\n    constructor(MmsToken _tokenContract, uint256 _tokenPrice) {\r\n        // Assign an admin\r\n        admin = msg.sender;\r\n        // Token Contract\r\n        tokenContract = _tokenContract;\r\n        // Token Price\r\n        tokenPrice = _tokenPrice;\r\n    }\r\n\r\n    // multiply\r\n    function multiply(uint256 x, uint256 y) internal pure returns (uint256 z) {\r\n        require(y == 0 || (z = x * y) / y == x);\r\n    }\r\n\r\n    function buyTokens(uint256 _numberOfTokens) public payable {\r\n        // require that value is equal to tokens\r\n        require(msg.value == multiply(_numberOfTokens, tokenPrice));\r\n        // require that the contract has enough tokens\r\n        require(tokenContract.balanceOf(address(this)) >= _numberOfTokens);\r\n        // require transfer is successfull\r\n        require(tokenContract.transfer(msg.sender, _numberOfTokens));\r\n        // keep track of tokensSold\r\n        tokensSold += _numberOfTokens;\r\n        // trigger sell event\r\n        emit Sell(msg.sender, _numberOfTokens);\r\n    }\r\n\r\n    // Ending Token TokenSale\r\n    function endSale() public {\r\n        // Require admin\r\n        require(msg.sender == admin);\r\n        // Transfer remaining tokens to admin\r\n        require(\r\n            tokenContract.transfer(\r\n                admin,\r\n                tokenContract.balanceOf(address(this))\r\n            )\r\n        );\r\n        // destroy contract\r\n        selfdestruct(payable(admin));\r\n    }\r\n}\r\n',
    sourcePath:
      "E:\\sem 7\\BT\\Practical\\practical-1\\token_19IT035\\contracts\\TokenSale.sol",
    ast: {
      absolutePath: "project:/contracts/TokenSale.sol",
      exportedSymbols: {
        MmsToken: [185],
        TokenSale: [365],
      },
      id: 366,
      license: "MIT",
      nodeType: "SourceUnit",
      nodes: [
        {
          id: 220,
          literals: ["solidity", "^", "0.8", ".10"],
          nodeType: "PragmaDirective",
          src: "35:24:2",
        },
        {
          absolutePath: "project:/contracts/MmsToken.sol",
          file: "./MmsToken.sol",
          id: 221,
          nameLocation: "-1:-1:-1",
          nodeType: "ImportDirective",
          scope: 366,
          sourceUnit: 186,
          src: "63:30:2",
          symbolAliases: [],
          unitAlias: "",
        },
        {
          abstract: false,
          baseContracts: [],
          canonicalName: "TokenSale",
          contractDependencies: [],
          contractKind: "contract",
          fullyImplemented: true,
          id: 365,
          linearizedBaseContracts: [365],
          name: "TokenSale",
          nameLocation: "106:9:2",
          nodeType: "ContractDefinition",
          nodes: [
            {
              constant: false,
              id: 223,
              mutability: "mutable",
              name: "admin",
              nameLocation: "131:5:2",
              nodeType: "VariableDeclaration",
              scope: 365,
              src: "123:13:2",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_address",
                typeString: "address",
              },
              typeName: {
                id: 222,
                name: "address",
                nodeType: "ElementaryTypeName",
                src: "123:7:2",
                stateMutability: "nonpayable",
                typeDescriptions: {
                  typeIdentifier: "t_address",
                  typeString: "address",
                },
              },
              visibility: "internal",
            },
            {
              constant: false,
              functionSelector: "55a373d6",
              id: 226,
              mutability: "mutable",
              name: "tokenContract",
              nameLocation: "165:13:2",
              nodeType: "VariableDeclaration",
              scope: 365,
              src: "143:35:2",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_contract$_MmsToken_$185",
                typeString: "contract MmsToken",
              },
              typeName: {
                id: 225,
                nodeType: "UserDefinedTypeName",
                pathNode: {
                  id: 224,
                  name: "MmsToken",
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 185,
                  src: "143:14:2",
                },
                referencedDeclaration: 185,
                src: "143:14:2",
                typeDescriptions: {
                  typeIdentifier: "t_contract$_MmsToken_$185",
                  typeString: "contract MmsToken",
                },
              },
              visibility: "public",
            },
            {
              constant: false,
              functionSelector: "7ff9b596",
              id: 228,
              mutability: "mutable",
              name: "tokenPrice",
              nameLocation: "200:10:2",
              nodeType: "VariableDeclaration",
              scope: 365,
              src: "185:25:2",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
              typeName: {
                id: 227,
                name: "uint256",
                nodeType: "ElementaryTypeName",
                src: "185:7:2",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
              },
              visibility: "public",
            },
            {
              constant: false,
              functionSelector: "518ab2a8",
              id: 230,
              mutability: "mutable",
              name: "tokensSold",
              nameLocation: "232:10:2",
              nodeType: "VariableDeclaration",
              scope: 365,
              src: "217:25:2",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
              typeName: {
                id: 229,
                name: "uint256",
                nodeType: "ElementaryTypeName",
                src: "217:7:2",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
              },
              visibility: "public",
            },
            {
              anonymous: false,
              eventSelector:
                "5e5e995ce3133561afceaa51a9a154d5db228cd7525d34df5185582c18d3df09",
              id: 236,
              name: "Sell",
              nameLocation: "257:4:2",
              nodeType: "EventDefinition",
              parameters: {
                id: 235,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 232,
                    indexed: false,
                    mutability: "mutable",
                    name: "_buyer",
                    nameLocation: "270:6:2",
                    nodeType: "VariableDeclaration",
                    scope: 236,
                    src: "262:14:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 231,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "262:7:2",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 234,
                    indexed: false,
                    mutability: "mutable",
                    name: "_amount",
                    nameLocation: "286:7:2",
                    nodeType: "VariableDeclaration",
                    scope: 236,
                    src: "278:15:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 233,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "278:7:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "261:33:2",
              },
              src: "251:44:2",
            },
            {
              body: {
                id: 257,
                nodeType: "Block",
                src: "367:192:2",
                statements: [
                  {
                    expression: {
                      id: 247,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 244,
                        name: "admin",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 223,
                        src: "406:5:2",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "=",
                      rightHandSide: {
                        expression: {
                          id: 245,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "414:3:2",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 246,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "414:10:2",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      src: "406:18:2",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    id: 248,
                    nodeType: "ExpressionStatement",
                    src: "406:18:2",
                  },
                  {
                    expression: {
                      id: 251,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 249,
                        name: "tokenContract",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 226,
                        src: "462:13:2",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_MmsToken_$185",
                          typeString: "contract MmsToken",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "=",
                      rightHandSide: {
                        id: 250,
                        name: "_tokenContract",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 239,
                        src: "478:14:2",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_MmsToken_$185",
                          typeString: "contract MmsToken",
                        },
                      },
                      src: "462:30:2",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_MmsToken_$185",
                        typeString: "contract MmsToken",
                      },
                    },
                    id: 252,
                    nodeType: "ExpressionStatement",
                    src: "462:30:2",
                  },
                  {
                    expression: {
                      id: 255,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 253,
                        name: "tokenPrice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 228,
                        src: "527:10:2",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "=",
                      rightHandSide: {
                        id: 254,
                        name: "_tokenPrice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 241,
                        src: "540:11:2",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "527:24:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 256,
                    nodeType: "ExpressionStatement",
                    src: "527:24:2",
                  },
                ],
              },
              id: 258,
              implemented: true,
              kind: "constructor",
              modifiers: [],
              name: "",
              nameLocation: "-1:-1:-1",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 242,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 239,
                    mutability: "mutable",
                    name: "_tokenContract",
                    nameLocation: "330:14:2",
                    nodeType: "VariableDeclaration",
                    scope: 258,
                    src: "315:29:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_MmsToken_$185",
                      typeString: "contract MmsToken",
                    },
                    typeName: {
                      id: 238,
                      nodeType: "UserDefinedTypeName",
                      pathNode: {
                        id: 237,
                        name: "MmsToken",
                        nodeType: "IdentifierPath",
                        referencedDeclaration: 185,
                        src: "315:14:2",
                      },
                      referencedDeclaration: 185,
                      src: "315:14:2",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_MmsToken_$185",
                        typeString: "contract MmsToken",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 241,
                    mutability: "mutable",
                    name: "_tokenPrice",
                    nameLocation: "354:11:2",
                    nodeType: "VariableDeclaration",
                    scope: 258,
                    src: "346:19:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 240,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "346:7:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "314:52:2",
              },
              returnParameters: {
                id: 243,
                nodeType: "ParameterList",
                parameters: [],
                src: "367:0:2",
              },
              scope: 365,
              src: "303:256:2",
              stateMutability: "nonpayable",
              virtual: false,
              visibility: "public",
            },
            {
              body: {
                id: 284,
                nodeType: "Block",
                src: "658:58:2",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                          id: 281,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            commonType: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                            id: 270,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftExpression: {
                              id: 268,
                              name: "y",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 262,
                              src: "677:1:2",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                            nodeType: "BinaryOperation",
                            operator: "==",
                            rightExpression: {
                              hexValue: "30",
                              id: 269,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "number",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "682:1:2",
                              typeDescriptions: {
                                typeIdentifier: "t_rational_0_by_1",
                                typeString: "int_const 0",
                              },
                              value: "0",
                            },
                            src: "677:6:2",
                            typeDescriptions: {
                              typeIdentifier: "t_bool",
                              typeString: "bool",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "||",
                          rightExpression: {
                            commonType: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                            id: 280,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftExpression: {
                              commonType: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                              id: 278,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              leftExpression: {
                                components: [
                                  {
                                    id: 275,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    leftHandSide: {
                                      id: 271,
                                      name: "z",
                                      nodeType: "Identifier",
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 265,
                                      src: "688:1:2",
                                      typeDescriptions: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256",
                                      },
                                    },
                                    nodeType: "Assignment",
                                    operator: "=",
                                    rightHandSide: {
                                      commonType: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256",
                                      },
                                      id: 274,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      lValueRequested: false,
                                      leftExpression: {
                                        id: 272,
                                        name: "x",
                                        nodeType: "Identifier",
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 260,
                                        src: "692:1:2",
                                        typeDescriptions: {
                                          typeIdentifier: "t_uint256",
                                          typeString: "uint256",
                                        },
                                      },
                                      nodeType: "BinaryOperation",
                                      operator: "*",
                                      rightExpression: {
                                        id: 273,
                                        name: "y",
                                        nodeType: "Identifier",
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 262,
                                        src: "696:1:2",
                                        typeDescriptions: {
                                          typeIdentifier: "t_uint256",
                                          typeString: "uint256",
                                        },
                                      },
                                      src: "692:5:2",
                                      typeDescriptions: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256",
                                      },
                                    },
                                    src: "688:9:2",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256",
                                    },
                                  },
                                ],
                                id: 276,
                                isConstant: false,
                                isInlineArray: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                nodeType: "TupleExpression",
                                src: "687:11:2",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              },
                              nodeType: "BinaryOperation",
                              operator: "/",
                              rightExpression: {
                                id: 277,
                                name: "y",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 262,
                                src: "701:1:2",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              },
                              src: "687:15:2",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                            nodeType: "BinaryOperation",
                            operator: "==",
                            rightExpression: {
                              id: 279,
                              name: "x",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 260,
                              src: "706:1:2",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                            src: "687:20:2",
                            typeDescriptions: {
                              typeIdentifier: "t_bool",
                              typeString: "bool",
                            },
                          },
                          src: "677:30:2",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 267,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "669:7:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 282,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "669:39:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 283,
                    nodeType: "ExpressionStatement",
                    src: "669:39:2",
                  },
                ],
              },
              id: 285,
              implemented: true,
              kind: "function",
              modifiers: [],
              name: "multiply",
              nameLocation: "593:8:2",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 263,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 260,
                    mutability: "mutable",
                    name: "x",
                    nameLocation: "610:1:2",
                    nodeType: "VariableDeclaration",
                    scope: 285,
                    src: "602:9:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 259,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "602:7:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 262,
                    mutability: "mutable",
                    name: "y",
                    nameLocation: "621:1:2",
                    nodeType: "VariableDeclaration",
                    scope: 285,
                    src: "613:9:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 261,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "613:7:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "601:22:2",
              },
              returnParameters: {
                id: 266,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 265,
                    mutability: "mutable",
                    name: "z",
                    nameLocation: "655:1:2",
                    nodeType: "VariableDeclaration",
                    scope: 285,
                    src: "647:9:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 264,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "647:7:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "646:11:2",
              },
              scope: 365,
              src: "584:132:2",
              stateMutability: "pure",
              virtual: false,
              visibility: "internal",
            },
            {
              body: {
                id: 331,
                nodeType: "Block",
                src: "783:533:2",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 297,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            expression: {
                              id: 291,
                              name: "msg",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 4294967281,
                              src: "852:3:2",
                              typeDescriptions: {
                                typeIdentifier: "t_magic_message",
                                typeString: "msg",
                              },
                            },
                            id: 292,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "value",
                            nodeType: "MemberAccess",
                            src: "852:9:2",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "==",
                          rightExpression: {
                            arguments: [
                              {
                                id: 294,
                                name: "_numberOfTokens",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 287,
                                src: "874:15:2",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              },
                              {
                                id: 295,
                                name: "tokenPrice",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 228,
                                src: "891:10:2",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                                {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              ],
                              id: 293,
                              name: "multiply",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 285,
                              src: "865:8:2",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                typeString:
                                  "function (uint256,uint256) pure returns (uint256)",
                              },
                            },
                            id: 296,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            names: [],
                            nodeType: "FunctionCall",
                            src: "865:37:2",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "852:50:2",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 290,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "844:7:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 298,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "844:59:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 299,
                    nodeType: "ExpressionStatement",
                    src: "844:59:2",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 309,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    id: 305,
                                    name: "this",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 4294967268,
                                    src: "1010:4:2",
                                    typeDescriptions: {
                                      typeIdentifier:
                                        "t_contract$_TokenSale_$365",
                                      typeString: "contract TokenSale",
                                    },
                                  },
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier:
                                        "t_contract$_TokenSale_$365",
                                      typeString: "contract TokenSale",
                                    },
                                  ],
                                  id: 304,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  lValueRequested: false,
                                  nodeType: "ElementaryTypeNameExpression",
                                  src: "1002:7:2",
                                  typeDescriptions: {
                                    typeIdentifier: "t_type$_t_address_$",
                                    typeString: "type(address)",
                                  },
                                  typeName: {
                                    id: 303,
                                    name: "address",
                                    nodeType: "ElementaryTypeName",
                                    src: "1002:7:2",
                                    typeDescriptions: {},
                                  },
                                },
                                id: 306,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: "typeConversion",
                                lValueRequested: false,
                                names: [],
                                nodeType: "FunctionCall",
                                src: "1002:13:2",
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: "t_address",
                                  typeString: "address",
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_address",
                                  typeString: "address",
                                },
                              ],
                              expression: {
                                id: 301,
                                name: "tokenContract",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 226,
                                src: "978:13:2",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_contract$_MmsToken_$185",
                                  typeString: "contract MmsToken",
                                },
                              },
                              id: 302,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: "balanceOf",
                              nodeType: "MemberAccess",
                              referencedDeclaration: 16,
                              src: "978:23:2",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                typeString:
                                  "function (address) view external returns (uint256)",
                              },
                            },
                            id: 307,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            names: [],
                            nodeType: "FunctionCall",
                            src: "978:38:2",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: ">=",
                          rightExpression: {
                            id: 308,
                            name: "_numberOfTokens",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 287,
                            src: "1020:15:2",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "978:57:2",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 300,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "970:7:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 310,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "970:66:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 311,
                    nodeType: "ExpressionStatement",
                    src: "970:66:2",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              expression: {
                                id: 315,
                                name: "msg",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 4294967281,
                                src: "1122:3:2",
                                typeDescriptions: {
                                  typeIdentifier: "t_magic_message",
                                  typeString: "msg",
                                },
                              },
                              id: 316,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: "sender",
                              nodeType: "MemberAccess",
                              src: "1122:10:2",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            },
                            {
                              id: 317,
                              name: "_numberOfTokens",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 287,
                              src: "1134:15:2",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                              {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            ],
                            expression: {
                              id: 313,
                              name: "tokenContract",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 226,
                              src: "1099:13:2",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_contract$_MmsToken_$185",
                                typeString: "contract MmsToken",
                              },
                            },
                            id: 314,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "transfer",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 96,
                            src: "1099:22:2",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              typeString:
                                "function (address,uint256) external returns (bool)",
                            },
                          },
                          id: 318,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "1099:51:2",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 312,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "1091:7:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 319,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1091:60:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 320,
                    nodeType: "ExpressionStatement",
                    src: "1091:60:2",
                  },
                  {
                    expression: {
                      id: 323,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 321,
                        name: "tokensSold",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 230,
                        src: "1199:10:2",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "+=",
                      rightHandSide: {
                        id: 322,
                        name: "_numberOfTokens",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 287,
                        src: "1213:15:2",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1199:29:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 324,
                    nodeType: "ExpressionStatement",
                    src: "1199:29:2",
                  },
                  {
                    eventCall: {
                      arguments: [
                        {
                          expression: {
                            id: 326,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: "1280:3:2",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 327,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "1280:10:2",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        {
                          id: 328,
                          name: "_numberOfTokens",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 287,
                          src: "1292:15:2",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        id: 325,
                        name: "Sell",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 236,
                        src: "1275:4:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          typeString: "function (address,uint256)",
                        },
                      },
                      id: 329,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1275:33:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 330,
                    nodeType: "EmitStatement",
                    src: "1270:38:2",
                  },
                ],
              },
              functionSelector: "3610724e",
              id: 332,
              implemented: true,
              kind: "function",
              modifiers: [],
              name: "buyTokens",
              nameLocation: "733:9:2",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 288,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 287,
                    mutability: "mutable",
                    name: "_numberOfTokens",
                    nameLocation: "751:15:2",
                    nodeType: "VariableDeclaration",
                    scope: 332,
                    src: "743:23:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 286,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "743:7:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "742:25:2",
              },
              returnParameters: {
                id: 289,
                nodeType: "ParameterList",
                parameters: [],
                src: "783:0:2",
              },
              scope: 365,
              src: "724:592:2",
              stateMutability: "payable",
              virtual: false,
              visibility: "public",
            },
            {
              body: {
                id: 363,
                nodeType: "Block",
                src: "1381:350:2",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          id: 339,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            expression: {
                              id: 336,
                              name: "msg",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 4294967281,
                              src: "1426:3:2",
                              typeDescriptions: {
                                typeIdentifier: "t_magic_message",
                                typeString: "msg",
                              },
                            },
                            id: 337,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "sender",
                            nodeType: "MemberAccess",
                            src: "1426:10:2",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "==",
                          rightExpression: {
                            id: 338,
                            name: "admin",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 223,
                            src: "1440:5:2",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          src: "1426:19:2",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 335,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "1418:7:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 340,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1418:28:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 341,
                    nodeType: "ExpressionStatement",
                    src: "1418:28:2",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              id: 345,
                              name: "admin",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 223,
                              src: "1567:5:2",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      id: 350,
                                      name: "this",
                                      nodeType: "Identifier",
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 4294967268,
                                      src: "1623:4:2",
                                      typeDescriptions: {
                                        typeIdentifier:
                                          "t_contract$_TokenSale_$365",
                                        typeString: "contract TokenSale",
                                      },
                                    },
                                  ],
                                  expression: {
                                    argumentTypes: [
                                      {
                                        typeIdentifier:
                                          "t_contract$_TokenSale_$365",
                                        typeString: "contract TokenSale",
                                      },
                                    ],
                                    id: 349,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    lValueRequested: false,
                                    nodeType: "ElementaryTypeNameExpression",
                                    src: "1615:7:2",
                                    typeDescriptions: {
                                      typeIdentifier: "t_type$_t_address_$",
                                      typeString: "type(address)",
                                    },
                                    typeName: {
                                      id: 348,
                                      name: "address",
                                      nodeType: "ElementaryTypeName",
                                      src: "1615:7:2",
                                      typeDescriptions: {},
                                    },
                                  },
                                  id: 351,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  kind: "typeConversion",
                                  lValueRequested: false,
                                  names: [],
                                  nodeType: "FunctionCall",
                                  src: "1615:13:2",
                                  tryCall: false,
                                  typeDescriptions: {
                                    typeIdentifier: "t_address",
                                    typeString: "address",
                                  },
                                },
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier: "t_address",
                                    typeString: "address",
                                  },
                                ],
                                expression: {
                                  id: 346,
                                  name: "tokenContract",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 226,
                                  src: "1591:13:2",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_contract$_MmsToken_$185",
                                    typeString: "contract MmsToken",
                                  },
                                },
                                id: 347,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                memberName: "balanceOf",
                                nodeType: "MemberAccess",
                                referencedDeclaration: 16,
                                src: "1591:23:2",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                  typeString:
                                    "function (address) view external returns (uint256)",
                                },
                              },
                              id: 352,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: "functionCall",
                              lValueRequested: false,
                              names: [],
                              nodeType: "FunctionCall",
                              src: "1591:38:2",
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                              {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            ],
                            expression: {
                              id: 343,
                              name: "tokenContract",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 226,
                              src: "1526:13:2",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_contract$_MmsToken_$185",
                                typeString: "contract MmsToken",
                              },
                            },
                            id: 344,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "transfer",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 96,
                            src: "1526:22:2",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              typeString:
                                "function (address,uint256) external returns (bool)",
                            },
                          },
                          id: 353,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "1526:118:2",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 342,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "1504:7:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 354,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1504:151:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 355,
                    nodeType: "ExpressionStatement",
                    src: "1504:151:2",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              id: 359,
                              name: "admin",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 223,
                              src: "1716:5:2",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            ],
                            id: 358,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "1708:8:2",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_address_payable_$",
                              typeString: "type(address payable)",
                            },
                            typeName: {
                              id: 357,
                              name: "address",
                              nodeType: "ElementaryTypeName",
                              src: "1708:8:2",
                              stateMutability: "payable",
                              typeDescriptions: {},
                            },
                          },
                          id: 360,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "typeConversion",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "1708:14:2",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_address_payable",
                            typeString: "address payable",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address_payable",
                            typeString: "address payable",
                          },
                        ],
                        id: 356,
                        name: "selfdestruct",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4294967275,
                        src: "1695:12:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_selfdestruct_nonpayable$_t_address_payable_$returns$__$",
                          typeString: "function (address payable)",
                        },
                      },
                      id: 361,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1695:28:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 362,
                    nodeType: "ExpressionStatement",
                    src: "1695:28:2",
                  },
                ],
              },
              functionSelector: "380d831b",
              id: 364,
              implemented: true,
              kind: "function",
              modifiers: [],
              name: "endSale",
              nameLocation: "1364:7:2",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 333,
                nodeType: "ParameterList",
                parameters: [],
                src: "1371:2:2",
              },
              returnParameters: {
                id: 334,
                nodeType: "ParameterList",
                parameters: [],
                src: "1381:0:2",
              },
              scope: 365,
              src: "1355:376:2",
              stateMutability: "nonpayable",
              virtual: false,
              visibility: "public",
            },
          ],
          scope: 366,
          src: "97:1637:2",
          usedErrors: [],
        },
      ],
      src: "35:1701:2",
    },
    legacyAST: {
      absolutePath: "project:/contracts/TokenSale.sol",
      exportedSymbols: {
        MmsToken: [185],
        TokenSale: [365],
      },
      id: 366,
      license: "MIT",
      nodeType: "SourceUnit",
      nodes: [
        {
          id: 220,
          literals: ["solidity", "^", "0.8", ".10"],
          nodeType: "PragmaDirective",
          src: "35:24:2",
        },
        {
          absolutePath: "project:/contracts/MmsToken.sol",
          file: "./MmsToken.sol",
          id: 221,
          nameLocation: "-1:-1:-1",
          nodeType: "ImportDirective",
          scope: 366,
          sourceUnit: 186,
          src: "63:30:2",
          symbolAliases: [],
          unitAlias: "",
        },
        {
          abstract: false,
          baseContracts: [],
          canonicalName: "TokenSale",
          contractDependencies: [],
          contractKind: "contract",
          fullyImplemented: true,
          id: 365,
          linearizedBaseContracts: [365],
          name: "TokenSale",
          nameLocation: "106:9:2",
          nodeType: "ContractDefinition",
          nodes: [
            {
              constant: false,
              id: 223,
              mutability: "mutable",
              name: "admin",
              nameLocation: "131:5:2",
              nodeType: "VariableDeclaration",
              scope: 365,
              src: "123:13:2",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_address",
                typeString: "address",
              },
              typeName: {
                id: 222,
                name: "address",
                nodeType: "ElementaryTypeName",
                src: "123:7:2",
                stateMutability: "nonpayable",
                typeDescriptions: {
                  typeIdentifier: "t_address",
                  typeString: "address",
                },
              },
              visibility: "internal",
            },
            {
              constant: false,
              functionSelector: "55a373d6",
              id: 226,
              mutability: "mutable",
              name: "tokenContract",
              nameLocation: "165:13:2",
              nodeType: "VariableDeclaration",
              scope: 365,
              src: "143:35:2",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_contract$_MmsToken_$185",
                typeString: "contract MmsToken",
              },
              typeName: {
                id: 225,
                nodeType: "UserDefinedTypeName",
                pathNode: {
                  id: 224,
                  name: "MmsToken",
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 185,
                  src: "143:14:2",
                },
                referencedDeclaration: 185,
                src: "143:14:2",
                typeDescriptions: {
                  typeIdentifier: "t_contract$_MmsToken_$185",
                  typeString: "contract MmsToken",
                },
              },
              visibility: "public",
            },
            {
              constant: false,
              functionSelector: "7ff9b596",
              id: 228,
              mutability: "mutable",
              name: "tokenPrice",
              nameLocation: "200:10:2",
              nodeType: "VariableDeclaration",
              scope: 365,
              src: "185:25:2",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
              typeName: {
                id: 227,
                name: "uint256",
                nodeType: "ElementaryTypeName",
                src: "185:7:2",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
              },
              visibility: "public",
            },
            {
              constant: false,
              functionSelector: "518ab2a8",
              id: 230,
              mutability: "mutable",
              name: "tokensSold",
              nameLocation: "232:10:2",
              nodeType: "VariableDeclaration",
              scope: 365,
              src: "217:25:2",
              stateVariable: true,
              storageLocation: "default",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
              typeName: {
                id: 229,
                name: "uint256",
                nodeType: "ElementaryTypeName",
                src: "217:7:2",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
              },
              visibility: "public",
            },
            {
              anonymous: false,
              eventSelector:
                "5e5e995ce3133561afceaa51a9a154d5db228cd7525d34df5185582c18d3df09",
              id: 236,
              name: "Sell",
              nameLocation: "257:4:2",
              nodeType: "EventDefinition",
              parameters: {
                id: 235,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 232,
                    indexed: false,
                    mutability: "mutable",
                    name: "_buyer",
                    nameLocation: "270:6:2",
                    nodeType: "VariableDeclaration",
                    scope: 236,
                    src: "262:14:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                    typeName: {
                      id: 231,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "262:7:2",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 234,
                    indexed: false,
                    mutability: "mutable",
                    name: "_amount",
                    nameLocation: "286:7:2",
                    nodeType: "VariableDeclaration",
                    scope: 236,
                    src: "278:15:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 233,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "278:7:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "261:33:2",
              },
              src: "251:44:2",
            },
            {
              body: {
                id: 257,
                nodeType: "Block",
                src: "367:192:2",
                statements: [
                  {
                    expression: {
                      id: 247,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 244,
                        name: "admin",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 223,
                        src: "406:5:2",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "=",
                      rightHandSide: {
                        expression: {
                          id: 245,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "414:3:2",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 246,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "414:10:2",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      src: "406:18:2",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    id: 248,
                    nodeType: "ExpressionStatement",
                    src: "406:18:2",
                  },
                  {
                    expression: {
                      id: 251,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 249,
                        name: "tokenContract",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 226,
                        src: "462:13:2",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_MmsToken_$185",
                          typeString: "contract MmsToken",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "=",
                      rightHandSide: {
                        id: 250,
                        name: "_tokenContract",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 239,
                        src: "478:14:2",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_MmsToken_$185",
                          typeString: "contract MmsToken",
                        },
                      },
                      src: "462:30:2",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_MmsToken_$185",
                        typeString: "contract MmsToken",
                      },
                    },
                    id: 252,
                    nodeType: "ExpressionStatement",
                    src: "462:30:2",
                  },
                  {
                    expression: {
                      id: 255,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 253,
                        name: "tokenPrice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 228,
                        src: "527:10:2",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "=",
                      rightHandSide: {
                        id: 254,
                        name: "_tokenPrice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 241,
                        src: "540:11:2",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "527:24:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 256,
                    nodeType: "ExpressionStatement",
                    src: "527:24:2",
                  },
                ],
              },
              id: 258,
              implemented: true,
              kind: "constructor",
              modifiers: [],
              name: "",
              nameLocation: "-1:-1:-1",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 242,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 239,
                    mutability: "mutable",
                    name: "_tokenContract",
                    nameLocation: "330:14:2",
                    nodeType: "VariableDeclaration",
                    scope: 258,
                    src: "315:29:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_MmsToken_$185",
                      typeString: "contract MmsToken",
                    },
                    typeName: {
                      id: 238,
                      nodeType: "UserDefinedTypeName",
                      pathNode: {
                        id: 237,
                        name: "MmsToken",
                        nodeType: "IdentifierPath",
                        referencedDeclaration: 185,
                        src: "315:14:2",
                      },
                      referencedDeclaration: 185,
                      src: "315:14:2",
                      typeDescriptions: {
                        typeIdentifier: "t_contract$_MmsToken_$185",
                        typeString: "contract MmsToken",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 241,
                    mutability: "mutable",
                    name: "_tokenPrice",
                    nameLocation: "354:11:2",
                    nodeType: "VariableDeclaration",
                    scope: 258,
                    src: "346:19:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 240,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "346:7:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "314:52:2",
              },
              returnParameters: {
                id: 243,
                nodeType: "ParameterList",
                parameters: [],
                src: "367:0:2",
              },
              scope: 365,
              src: "303:256:2",
              stateMutability: "nonpayable",
              virtual: false,
              visibility: "public",
            },
            {
              body: {
                id: 284,
                nodeType: "Block",
                src: "658:58:2",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                          id: 281,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            commonType: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                            id: 270,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftExpression: {
                              id: 268,
                              name: "y",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 262,
                              src: "677:1:2",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                            nodeType: "BinaryOperation",
                            operator: "==",
                            rightExpression: {
                              hexValue: "30",
                              id: 269,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: "number",
                              lValueRequested: false,
                              nodeType: "Literal",
                              src: "682:1:2",
                              typeDescriptions: {
                                typeIdentifier: "t_rational_0_by_1",
                                typeString: "int_const 0",
                              },
                              value: "0",
                            },
                            src: "677:6:2",
                            typeDescriptions: {
                              typeIdentifier: "t_bool",
                              typeString: "bool",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "||",
                          rightExpression: {
                            commonType: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                            id: 280,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftExpression: {
                              commonType: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                              id: 278,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              leftExpression: {
                                components: [
                                  {
                                    id: 275,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    leftHandSide: {
                                      id: 271,
                                      name: "z",
                                      nodeType: "Identifier",
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 265,
                                      src: "688:1:2",
                                      typeDescriptions: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256",
                                      },
                                    },
                                    nodeType: "Assignment",
                                    operator: "=",
                                    rightHandSide: {
                                      commonType: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256",
                                      },
                                      id: 274,
                                      isConstant: false,
                                      isLValue: false,
                                      isPure: false,
                                      lValueRequested: false,
                                      leftExpression: {
                                        id: 272,
                                        name: "x",
                                        nodeType: "Identifier",
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 260,
                                        src: "692:1:2",
                                        typeDescriptions: {
                                          typeIdentifier: "t_uint256",
                                          typeString: "uint256",
                                        },
                                      },
                                      nodeType: "BinaryOperation",
                                      operator: "*",
                                      rightExpression: {
                                        id: 273,
                                        name: "y",
                                        nodeType: "Identifier",
                                        overloadedDeclarations: [],
                                        referencedDeclaration: 262,
                                        src: "696:1:2",
                                        typeDescriptions: {
                                          typeIdentifier: "t_uint256",
                                          typeString: "uint256",
                                        },
                                      },
                                      src: "692:5:2",
                                      typeDescriptions: {
                                        typeIdentifier: "t_uint256",
                                        typeString: "uint256",
                                      },
                                    },
                                    src: "688:9:2",
                                    typeDescriptions: {
                                      typeIdentifier: "t_uint256",
                                      typeString: "uint256",
                                    },
                                  },
                                ],
                                id: 276,
                                isConstant: false,
                                isInlineArray: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                nodeType: "TupleExpression",
                                src: "687:11:2",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              },
                              nodeType: "BinaryOperation",
                              operator: "/",
                              rightExpression: {
                                id: 277,
                                name: "y",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 262,
                                src: "701:1:2",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              },
                              src: "687:15:2",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                            nodeType: "BinaryOperation",
                            operator: "==",
                            rightExpression: {
                              id: 279,
                              name: "x",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 260,
                              src: "706:1:2",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                            src: "687:20:2",
                            typeDescriptions: {
                              typeIdentifier: "t_bool",
                              typeString: "bool",
                            },
                          },
                          src: "677:30:2",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 267,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "669:7:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 282,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "669:39:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 283,
                    nodeType: "ExpressionStatement",
                    src: "669:39:2",
                  },
                ],
              },
              id: 285,
              implemented: true,
              kind: "function",
              modifiers: [],
              name: "multiply",
              nameLocation: "593:8:2",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 263,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 260,
                    mutability: "mutable",
                    name: "x",
                    nameLocation: "610:1:2",
                    nodeType: "VariableDeclaration",
                    scope: 285,
                    src: "602:9:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 259,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "602:7:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                  {
                    constant: false,
                    id: 262,
                    mutability: "mutable",
                    name: "y",
                    nameLocation: "621:1:2",
                    nodeType: "VariableDeclaration",
                    scope: 285,
                    src: "613:9:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 261,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "613:7:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "601:22:2",
              },
              returnParameters: {
                id: 266,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 265,
                    mutability: "mutable",
                    name: "z",
                    nameLocation: "655:1:2",
                    nodeType: "VariableDeclaration",
                    scope: 285,
                    src: "647:9:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 264,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "647:7:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "646:11:2",
              },
              scope: 365,
              src: "584:132:2",
              stateMutability: "pure",
              virtual: false,
              visibility: "internal",
            },
            {
              body: {
                id: 331,
                nodeType: "Block",
                src: "783:533:2",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 297,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            expression: {
                              id: 291,
                              name: "msg",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 4294967281,
                              src: "852:3:2",
                              typeDescriptions: {
                                typeIdentifier: "t_magic_message",
                                typeString: "msg",
                              },
                            },
                            id: 292,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "value",
                            nodeType: "MemberAccess",
                            src: "852:9:2",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "==",
                          rightExpression: {
                            arguments: [
                              {
                                id: 294,
                                name: "_numberOfTokens",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 287,
                                src: "874:15:2",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              },
                              {
                                id: 295,
                                name: "tokenPrice",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 228,
                                src: "891:10:2",
                                typeDescriptions: {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                                {
                                  typeIdentifier: "t_uint256",
                                  typeString: "uint256",
                                },
                              ],
                              id: 293,
                              name: "multiply",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 285,
                              src: "865:8:2",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                typeString:
                                  "function (uint256,uint256) pure returns (uint256)",
                              },
                            },
                            id: 296,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            names: [],
                            nodeType: "FunctionCall",
                            src: "865:37:2",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "852:50:2",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 290,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "844:7:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 298,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "844:59:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 299,
                    nodeType: "ExpressionStatement",
                    src: "844:59:2",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          id: 309,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            arguments: [
                              {
                                arguments: [
                                  {
                                    id: 305,
                                    name: "this",
                                    nodeType: "Identifier",
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 4294967268,
                                    src: "1010:4:2",
                                    typeDescriptions: {
                                      typeIdentifier:
                                        "t_contract$_TokenSale_$365",
                                      typeString: "contract TokenSale",
                                    },
                                  },
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier:
                                        "t_contract$_TokenSale_$365",
                                      typeString: "contract TokenSale",
                                    },
                                  ],
                                  id: 304,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  lValueRequested: false,
                                  nodeType: "ElementaryTypeNameExpression",
                                  src: "1002:7:2",
                                  typeDescriptions: {
                                    typeIdentifier: "t_type$_t_address_$",
                                    typeString: "type(address)",
                                  },
                                  typeName: {
                                    id: 303,
                                    name: "address",
                                    nodeType: "ElementaryTypeName",
                                    src: "1002:7:2",
                                    typeDescriptions: {},
                                  },
                                },
                                id: 306,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: "typeConversion",
                                lValueRequested: false,
                                names: [],
                                nodeType: "FunctionCall",
                                src: "1002:13:2",
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: "t_address",
                                  typeString: "address",
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: "t_address",
                                  typeString: "address",
                                },
                              ],
                              expression: {
                                id: 301,
                                name: "tokenContract",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 226,
                                src: "978:13:2",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_contract$_MmsToken_$185",
                                  typeString: "contract MmsToken",
                                },
                              },
                              id: 302,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: "balanceOf",
                              nodeType: "MemberAccess",
                              referencedDeclaration: 16,
                              src: "978:23:2",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                typeString:
                                  "function (address) view external returns (uint256)",
                              },
                            },
                            id: 307,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "functionCall",
                            lValueRequested: false,
                            names: [],
                            nodeType: "FunctionCall",
                            src: "978:38:2",
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: ">=",
                          rightExpression: {
                            id: 308,
                            name: "_numberOfTokens",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 287,
                            src: "1020:15:2",
                            typeDescriptions: {
                              typeIdentifier: "t_uint256",
                              typeString: "uint256",
                            },
                          },
                          src: "978:57:2",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 300,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "970:7:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 310,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "970:66:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 311,
                    nodeType: "ExpressionStatement",
                    src: "970:66:2",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              expression: {
                                id: 315,
                                name: "msg",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 4294967281,
                                src: "1122:3:2",
                                typeDescriptions: {
                                  typeIdentifier: "t_magic_message",
                                  typeString: "msg",
                                },
                              },
                              id: 316,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: "sender",
                              nodeType: "MemberAccess",
                              src: "1122:10:2",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            },
                            {
                              id: 317,
                              name: "_numberOfTokens",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 287,
                              src: "1134:15:2",
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                              {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            ],
                            expression: {
                              id: 313,
                              name: "tokenContract",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 226,
                              src: "1099:13:2",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_contract$_MmsToken_$185",
                                typeString: "contract MmsToken",
                              },
                            },
                            id: 314,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "transfer",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 96,
                            src: "1099:22:2",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              typeString:
                                "function (address,uint256) external returns (bool)",
                            },
                          },
                          id: 318,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "1099:51:2",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 312,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "1091:7:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 319,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1091:60:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 320,
                    nodeType: "ExpressionStatement",
                    src: "1091:60:2",
                  },
                  {
                    expression: {
                      id: 323,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 321,
                        name: "tokensSold",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 230,
                        src: "1199:10:2",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      nodeType: "Assignment",
                      operator: "+=",
                      rightHandSide: {
                        id: 322,
                        name: "_numberOfTokens",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 287,
                        src: "1213:15:2",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      src: "1199:29:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    id: 324,
                    nodeType: "ExpressionStatement",
                    src: "1199:29:2",
                  },
                  {
                    eventCall: {
                      arguments: [
                        {
                          expression: {
                            id: 326,
                            name: "msg",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: "1280:3:2",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_message",
                              typeString: "msg",
                            },
                          },
                          id: 327,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: "sender",
                          nodeType: "MemberAccess",
                          src: "1280:10:2",
                          typeDescriptions: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                        },
                        {
                          id: 328,
                          name: "_numberOfTokens",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 287,
                          src: "1292:15:2",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        id: 325,
                        name: "Sell",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 236,
                        src: "1275:4:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          typeString: "function (address,uint256)",
                        },
                      },
                      id: 329,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1275:33:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 330,
                    nodeType: "EmitStatement",
                    src: "1270:38:2",
                  },
                ],
              },
              functionSelector: "3610724e",
              id: 332,
              implemented: true,
              kind: "function",
              modifiers: [],
              name: "buyTokens",
              nameLocation: "733:9:2",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 288,
                nodeType: "ParameterList",
                parameters: [
                  {
                    constant: false,
                    id: 287,
                    mutability: "mutable",
                    name: "_numberOfTokens",
                    nameLocation: "751:15:2",
                    nodeType: "VariableDeclaration",
                    scope: 332,
                    src: "743:23:2",
                    stateVariable: false,
                    storageLocation: "default",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    typeName: {
                      id: 286,
                      name: "uint256",
                      nodeType: "ElementaryTypeName",
                      src: "743:7:2",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    visibility: "internal",
                  },
                ],
                src: "742:25:2",
              },
              returnParameters: {
                id: 289,
                nodeType: "ParameterList",
                parameters: [],
                src: "783:0:2",
              },
              scope: 365,
              src: "724:592:2",
              stateMutability: "payable",
              virtual: false,
              visibility: "public",
            },
            {
              body: {
                id: 363,
                nodeType: "Block",
                src: "1381:350:2",
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: "t_address",
                            typeString: "address",
                          },
                          id: 339,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            expression: {
                              id: 336,
                              name: "msg",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 4294967281,
                              src: "1426:3:2",
                              typeDescriptions: {
                                typeIdentifier: "t_magic_message",
                                typeString: "msg",
                              },
                            },
                            id: 337,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "sender",
                            nodeType: "MemberAccess",
                            src: "1426:10:2",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          nodeType: "BinaryOperation",
                          operator: "==",
                          rightExpression: {
                            id: 338,
                            name: "admin",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 223,
                            src: "1440:5:2",
                            typeDescriptions: {
                              typeIdentifier: "t_address",
                              typeString: "address",
                            },
                          },
                          src: "1426:19:2",
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 335,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "1418:7:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 340,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1418:28:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 341,
                    nodeType: "ExpressionStatement",
                    src: "1418:28:2",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              id: 345,
                              name: "admin",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 223,
                              src: "1567:5:2",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      id: 350,
                                      name: "this",
                                      nodeType: "Identifier",
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 4294967268,
                                      src: "1623:4:2",
                                      typeDescriptions: {
                                        typeIdentifier:
                                          "t_contract$_TokenSale_$365",
                                        typeString: "contract TokenSale",
                                      },
                                    },
                                  ],
                                  expression: {
                                    argumentTypes: [
                                      {
                                        typeIdentifier:
                                          "t_contract$_TokenSale_$365",
                                        typeString: "contract TokenSale",
                                      },
                                    ],
                                    id: 349,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: true,
                                    lValueRequested: false,
                                    nodeType: "ElementaryTypeNameExpression",
                                    src: "1615:7:2",
                                    typeDescriptions: {
                                      typeIdentifier: "t_type$_t_address_$",
                                      typeString: "type(address)",
                                    },
                                    typeName: {
                                      id: 348,
                                      name: "address",
                                      nodeType: "ElementaryTypeName",
                                      src: "1615:7:2",
                                      typeDescriptions: {},
                                    },
                                  },
                                  id: 351,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  kind: "typeConversion",
                                  lValueRequested: false,
                                  names: [],
                                  nodeType: "FunctionCall",
                                  src: "1615:13:2",
                                  tryCall: false,
                                  typeDescriptions: {
                                    typeIdentifier: "t_address",
                                    typeString: "address",
                                  },
                                },
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier: "t_address",
                                    typeString: "address",
                                  },
                                ],
                                expression: {
                                  id: 346,
                                  name: "tokenContract",
                                  nodeType: "Identifier",
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 226,
                                  src: "1591:13:2",
                                  typeDescriptions: {
                                    typeIdentifier:
                                      "t_contract$_MmsToken_$185",
                                    typeString: "contract MmsToken",
                                  },
                                },
                                id: 347,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                memberName: "balanceOf",
                                nodeType: "MemberAccess",
                                referencedDeclaration: 16,
                                src: "1591:23:2",
                                typeDescriptions: {
                                  typeIdentifier:
                                    "t_function_external_view$_t_address_$returns$_t_uint256_$",
                                  typeString:
                                    "function (address) view external returns (uint256)",
                                },
                              },
                              id: 352,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: "functionCall",
                              lValueRequested: false,
                              names: [],
                              nodeType: "FunctionCall",
                              src: "1591:38:2",
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                              {
                                typeIdentifier: "t_uint256",
                                typeString: "uint256",
                              },
                            ],
                            expression: {
                              id: 343,
                              name: "tokenContract",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 226,
                              src: "1526:13:2",
                              typeDescriptions: {
                                typeIdentifier:
                                  "t_contract$_MmsToken_$185",
                                typeString: "contract MmsToken",
                              },
                            },
                            id: 344,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: "transfer",
                            nodeType: "MemberAccess",
                            referencedDeclaration: 96,
                            src: "1526:22:2",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              typeString:
                                "function (address,uint256) external returns (bool)",
                            },
                          },
                          id: 353,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "functionCall",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "1526:118:2",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_bool",
                            typeString: "bool",
                          },
                        ],
                        id: 342,
                        name: "require",
                        nodeType: "Identifier",
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: "1504:7:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_require_pure$_t_bool_$returns$__$",
                          typeString: "function (bool) pure",
                        },
                      },
                      id: 354,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1504:151:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 355,
                    nodeType: "ExpressionStatement",
                    src: "1504:151:2",
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              id: 359,
                              name: "admin",
                              nodeType: "Identifier",
                              overloadedDeclarations: [],
                              referencedDeclaration: 223,
                              src: "1716:5:2",
                              typeDescriptions: {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: "t_address",
                                typeString: "address",
                              },
                            ],
                            id: 358,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: "ElementaryTypeNameExpression",
                            src: "1708:8:2",
                            typeDescriptions: {
                              typeIdentifier: "t_type$_t_address_payable_$",
                              typeString: "type(address payable)",
                            },
                            typeName: {
                              id: 357,
                              name: "address",
                              nodeType: "ElementaryTypeName",
                              src: "1708:8:2",
                              stateMutability: "payable",
                              typeDescriptions: {},
                            },
                          },
                          id: 360,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: "typeConversion",
                          lValueRequested: false,
                          names: [],
                          nodeType: "FunctionCall",
                          src: "1708:14:2",
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: "t_address_payable",
                            typeString: "address payable",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_address_payable",
                            typeString: "address payable",
                          },
                        ],
                        id: 356,
                        name: "selfdestruct",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4294967275,
                        src: "1695:12:2",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_selfdestruct_nonpayable$_t_address_payable_$returns$__$",
                          typeString: "function (address payable)",
                        },
                      },
                      id: 361,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1695:28:2",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_tuple$__$",
                        typeString: "tuple()",
                      },
                    },
                    id: 362,
                    nodeType: "ExpressionStatement",
                    src: "1695:28:2",
                  },
                ],
              },
              functionSelector: "380d831b",
              id: 364,
              implemented: true,
              kind: "function",
              modifiers: [],
              name: "endSale",
              nameLocation: "1364:7:2",
              nodeType: "FunctionDefinition",
              parameters: {
                id: 333,
                nodeType: "ParameterList",
                parameters: [],
                src: "1371:2:2",
              },
              returnParameters: {
                id: 334,
                nodeType: "ParameterList",
                parameters: [],
                src: "1381:0:2",
              },
              scope: 365,
              src: "1355:376:2",
              stateMutability: "nonpayable",
              virtual: false,
              visibility: "public",
            },
          ],
          scope: 366,
          src: "97:1637:2",
          usedErrors: [],
        },
      ],
      src: "35:1701:2",
    },
    compiler: {
      name: "solc",
      version: "0.8.15+commit.e14f2714.Emscripten.clang",
    },
    networks: {
      80001: {
        events: {},
        links: {},
        address: "0xd6E848516b3e0A019001C54407bD836eF3BF044f",
        transactionHash:
          "0x24dcffb1cf81e8a55dd91e12e13eb3b97690a550c3b7c93fad1c06aeba40729b",
      },
    },
    schemaVersion: "3.4.4",
    updatedAt: "2022-08-03T16:11:21.540Z",
    networkType: "ethereum",
    devdoc: {
      kind: "dev",
      methods: {},
      version: 1,
    },
    userdoc: {
      kind: "user",
      methods: {},
      version: 1,
    },
  },
};

const id = (_id) => {
  return document.getElementById(_id);
};

const showLoading = (show) => {
  if (show) {
    id("loader").style.display = "flex";
    id("content").style.display = "none";
  } else {
    id("loader").style.display = "none";
    id("content").style.display = "block";
  }
};

const App = {
  loading: true,
  web3Provider: null,
  web3: null,
  account: "0x0",
  contracts: {},
  tokenPrice: null,
  tokensSold: null,
  tokensAvailable: 750000,
  balance: null,

  init: () => {
    console.log("App initialized...");
    return App.initWeb3();
  },
  initWeb3: () => {
    if (typeof window.ethereum !== "undefined") {
      App.web3Provider = window.ethereum;
      App.web3 = new Web3(window.ethereum);
    } else {
      App.web3Provider = new Web3.providers.HttpProvider(
        "http://127.0.0.1:7545"
      );
      App.web3 = new Web3(App.web3Provider);
    }
    return App.initContracts();
  },

  initContracts: async () => {
    // readTextFile("js/TokenSale.json", async function (text) {
    App.account = App.web3Provider.selectedAddress;
    console.log(`your Account: ${App.account}`);
    // console.log(JSON.parse(text));
    App.contracts.TokenSale = TruffleContract(abi.tokensale);
    App.contracts.TokenSale.setProvider(App.web3Provider);

    // let data = await App.contracts.TokenSale.deployed();
    // console.log(`TokenSale Address: ${data.address}`);
    // App.tokenPrice = await data.tokenPrice();
    // console.log(`Token Price: ${App.tokenPrice}`);
    // App.tokensSold = await data.tokensSold();
    // console.log(`Token Sold: ${App.tokensSold}`);

    // readTextFile("js/MmsToken.json", async function (text) {
    // console.log(JSON.parse(text));
    App.contracts.MmsToken = TruffleContract(abi.token);
    App.contracts.MmsToken.setProvider(App.web3Provider);

    // let data = await App.contracts.MmsToken.deployed();
    // console.log(`MmsToken Address: ${data.address}`);

    // App.balance = await data.balanceOf(App.account);
    // console.log(`Your Balance: ${App.balance}`);

    App.listenForEvents();

    App.render();
    // });
    // });
  },

  render: async () => {
    // App.account = App.web3Provider.selectedAddress;
    // console.log(`2. your Account: ${App.account}`);
    let tokensale = await App.contracts.TokenSale.deployed();
    App.tokenPrice = await tokensale.tokenPrice();
    App.tokensSold = await tokensale.tokensSold();
    console.log(`TokenSale Address: ${tokensale.address}`);
    console.log(`Token Price: ${App.tokenPrice}`);
    console.log(`Token Sold: ${App.tokensSold}`);

    let token = await App.contracts.MmsToken.deployed();
    App.balance = await token.balanceOf(App.account);
    console.log(`MmsToken Address: ${token.address}`);
    console.log(`Your Balance: ${App.balance}`);

    id("accountAddress").innerText = App.account;
    id("token-price").innerText = App.web3.fromWei(App.tokenPrice, "ether");
    id("token-sold").innerText = App.tokensSold;
    id("progress-bar").style = `width: ${
      (App.tokensSold / App.tokensAvailable) * 100
    }%`;
    id("balance").innerText = App.balance.toNumber();
    id(
      "avatar"
    ).src = `https://avatars.dicebear.com/api/bottts/${App.account}.svg`;

    App.loading = false;
    showLoading(false);
  },

  listenForEvents: async () => {
    let contract = await App.contracts.TokenSale.deployed();
    contract
      .Sell(
        {},
        {
          fromblock: 0,
          toblock: "latest",
        }
      )
      .watch((err, evnt) => {
        console.log("event triggered", evnt);
        App.render();
        showLoading(false);
      });
  },

  // before buying first we need to transfer tokens to tokensale contract
  buyTokens: async () => {
    showLoading(true);
    try {
      let numberOfTokens = Number(id("numberOfToken").value);
      let contract = await App.contracts.TokenSale.deployed();
      let res = await contract.buyTokens(numberOfTokens, {
        from: App.account,
        value: numberOfTokens * App.tokenPrice,
        gas: 500000,
      });
      console.log("Tokens bought...");
      id("form").reset();
    } catch (err) {
      console.log(err);
      showLoading(false);
    }
  },
};

window.addEventListener("load", () => {
  id("content").style.display = "none";
  App.init();
});
