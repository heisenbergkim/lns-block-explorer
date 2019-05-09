import gql from "graphql-tag";
//Query하고 싶은 필드만을 명시함...

export const GET_TRANSACTIONS = gql`
  {
    transactions {
      blockNumber
      transactionHash
      from
      to
      status
    }
  }
`;

export const GET_BLOCKS = gql`
  {
    blocks {
      number
      hash
      timestamp
    }
  }
`;

export const GET_BLOCK_ONE = gql`
  query getBlockInfo($BlockId: Int!) {
    block(number: $BlockId) {
      number
      hash
      parentHash
      mixHash
      nonce
      sha3Uncles
      logsBloom
      transactionsRoot
      stateRoot
      receiptsRoot
      miner
      difficulty
      totalDifficulty
      extraData
      size
      gasLimit
      gasUsed
      timestamp
    }
  }
`;

export const GET_TRANSACTION_ONE = gql`
  query getTrnsactionInfo($TxId: String!) {
    transaction(transactionHash: $TxId) {
      transactionHash
      blockHash
      blockNumber
      from
      to
      gasUsed
      cumulativeGasUsed
      contractAddress
      status
      v
      r
      s
    }
  }
`;

// get ERC20 token transfers
export const GET_TOKENS = gql`
  {
    receiptsAwait {
      transactionHash
      from
      to
      logs {
        topics
        data
      }

      contractInfoDoc {
        coinName
        symbol
      }
    }
  }
`;
