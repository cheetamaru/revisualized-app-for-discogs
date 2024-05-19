export const getConsumerKey = () => {
    const key = process.env.DISCOGS_CONSUMER_KEY

    if (!key) {
        throw new Error("DISCOGS_CONSUMER_KEY is not provided")
    }

    return key
}

export const getConsumerSecret = () => {
    const secret = process.env.DISCOGS_CONSUMER_SECRET

    if (!secret) {
        throw new Error("DISCOGS_CONSUMER_KEY is not provided")
    }

    return secret
}
