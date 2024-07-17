export const getEntrySrc = (id: string | number) => {
    const hostname = process.env.NEXT_PUBLIC_DISCOGS_HOSTNAME

    if (!hostname) {
        throw new Error("DISCOGS_HOSTNAME is not provided")
    }

    return `https://${hostname}/release/${id}`;
  }
  