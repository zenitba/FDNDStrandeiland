import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load(filter) {
  let query = gql`
    query Wishes($filter: String) {
      wishes(filter: $filter) {
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
  `;

  const sdgLabel = `SDG-${filter}`; // Format SDG label based on your data structure

  const variables = {
    filter: filter ? `wish.image.label:${sdgLabel}` : '', // Filter by SDG label
  };

  try {
    const request = await hygraph.request(query, variables);
    return request;
  } catch (error) {
    console.error('Error fetching wishes:', error);
    throw new Error('Failed to load wishes');
  }
}
