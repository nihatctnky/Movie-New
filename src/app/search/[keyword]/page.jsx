import Movies from "@/components/Movies";

const Page = async ({ params }) => {
    const keyword = params.keyword;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=505e00f7d9a153189a5d8105711482fa&query=${keyword}&language=en-US&include_adult=false`);

    const data = await res.json();

    return (
        <div >
            {
                !data?.results?.length ?  // Eğer sonuç yoksa
                    <div>Aranılan şey bulunamadı!!!</div> :
                    <div className="flex items-center flex-wrap">
                        {
                            data?.results?.map((dt, i) => {
                                return <Movies key={i} dt={dt} />  // JSX içinde return eklemelisiniz
                            })}
                    </div>
            }
        </div>
    );
}

export default Page;
