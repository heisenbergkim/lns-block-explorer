import gql from "graphql-tag";

export const GET_TRANSACTIONS = gql`
  {
    transactions {
      blockNumber
      transactionHash
      from
      to
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
  query getBlockInfo($TxId: Int!) {
    block(number: $TxId) {
      number
      hash
      timestamp
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
