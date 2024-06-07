export const getConsumerKey = () => {
    const val = process.env.DISCOGS_CONSUMER_KEY

    if (!val) {
        throw new Error("DISCOGS_CONSUMER_KEY is not provided")
    }

    return val
}

export const getConsumerSecret = () => {
    const val = process.env.DISCOGS_CONSUMER_SECRET

    if (!val) {
        throw new Error("DISCOGS_CONSUMER_KEY is not provided")
    }

    return val
}

export const getPersonalToken = () => {
    const val = process.env.DISCOGS_PERSONAL_TOKEN

    if (!val) {
        throw new Error("DISCOGS_PERSONAL_TOKEN is not provided")
    }

    return val
}