import Movies from "@/components/Movies";


const Page = async ({ searchParams }) => {

    const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? `movie/${searchParams.genre}` : "trending/all/day"}?api_key=505e00f7d9a153189a5d8105711482fa&language=en-US&page=1`, {
        next: { revalidate: 10000 }
    });
    const data = await res.json()
    console.log(data, "data")

    return (
        <div className="flex items-center justify-center flex-wrap gap-3">
            {
                data?.results?.map((dt, i) => (
                    <Movies key={i} dt={dt} />
                ))
            }
        </div>
    )
}

export default Page