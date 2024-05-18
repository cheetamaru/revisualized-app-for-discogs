const WantlistPage = async ({params}: { params: { slug: string } }) => {
    const { slug } = params;

    const res = await fetch("http://localhost:3000/api/user?user="+slug, { cache: "force-cache" })

    const data = await res.json()

    return (
        <>
            <div>SLUG: {slug}</div>
            <div>NAME: { data?.username }</div>
            <img src={data?.avatar_url} />
        </>
    )
}

export default WantlistPage;