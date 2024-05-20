import { getConsumerKey, getConsumerSecret } from '@/utils/envHelpers/discogs';
import { DiscogsClient } from '@lionralfs/discogs-client';

const createClient = () => {
    const client = new DiscogsClient({
        auth: {
            method: 'discogs',
            consumerKey: getConsumerKey(),
            consumerSecret: getConsumerSecret(),
        },
    });
    
    console.log("Created!")

    return client;
}

const apiClient = createClient()

export default apiClient;
