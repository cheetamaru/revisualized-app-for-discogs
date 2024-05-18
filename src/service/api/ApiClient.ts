import { getConsumerKey, getConsumerSecret } from '@/utils/envHelpers/discogs';
import { DiscogsClient } from '@lionralfs/discogs-client';

const createClient = () => {
    const client = new DiscogsClient();
    
    console.log("Created!")

    return client;
}

const apiClient = createClient()

export default apiClient;

// export const apiClient = new DiscogsClient({
//     auth: {
//         method: 'discogs',
//         consumerKey: getConsumerKey(),
//         consumerSecret: getConsumerSecret(),
//     },
// });