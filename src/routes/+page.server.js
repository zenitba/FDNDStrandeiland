import { gql } from 'graphql-request'
import { hygraph } from '$lib/utils/hygraph.js'

export async function load() {  
  let query = gql`
  query wishes {
    reactions {
      id
      fullname
      submitField
      date
      likeButton
    }
    wishes {
      id
      heading
      description
      date
      label
      image {
        url
        image {
          url
          label
        }
        label
        }
      }
    }
  `

  const request = await hygraph.request(query)

  return request
  
}
