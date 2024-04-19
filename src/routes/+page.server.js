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
            sdgs {
                id
                image {
                    url
                    id
                }
            }
        }
    `

    const request = await hygraph.request(query)

    const filteredSdgsData = request.sdgs.filter(sdg => sdg.id === 'clqaylmlc7d6t0bw5cimmx01d'); // Filter sdgs data based on a specific condition

    return {
        data: {
            sdgs: filteredSdgsData,
            ...request
        }
    }
}