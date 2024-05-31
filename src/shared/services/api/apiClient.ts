import { getConsumerKey, getConsumerSecret, getPersonalToken } from '@/utils/envHelpers/discogs';
import { DiscogsClient } from '@lionralfs/discogs-client';

const createClient = () => {
    const client = new DiscogsClient({
        userAgent: 'DiscogsRevisualized/1.0',
        auth: {
            method: 'discogs',
            consumerKey: getConsumerKey(),
            consumerSecret: getConsumerSecret(),
            userToken: getPersonalToken(),
        },
    });
    
    console.log("Created!")

    return client;
}

const apiClient = createClient()

export default apiClient;
