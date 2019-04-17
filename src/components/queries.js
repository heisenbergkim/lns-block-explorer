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

// const GET_DOG_PHOTO = gql`
//   query Dog($breed: String!) {
//     dog(breed: $breed) {
//       id
//       displayImage
//     }
//   }
// `;
