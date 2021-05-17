import { GET_CHANNELS } from './types';
import { gql } from '@apollo/client';

import { client } from '../../lib/apollo';

export const getChannels = () => async (dispatch) => {
  const response = await client.query({
    query: gql`
      query channels {
        channels {
          id
          channel_name
          channel_url
          description
          socialblade_category
          subscribers
          bio_email
          location
        }
      }
    `,
  });
  dispatch({ type: GET_CHANNELS, payload: response.data.channels });
};