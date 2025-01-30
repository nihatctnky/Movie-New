"use client"

import Image from 'next/image'; // Image bileşenini doğru şekilde import ettiğinizden emin olun
import { useRouter } from 'next/navigation';

const Movies = ({ dt }) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(`/movie/${dt?.id}`)}
            className="min-w-[400px] relative cursor-pointer"
        >
            <Image
                style={{ objectFit: "cover" }}
                src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`}
                width={400}
                height={400}
                alt={dt?.title || 'Movie poster'}
                className="rounded-lg" // Görselin köşelerini yuvarlatmak için
            />

            <div className="absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded-lg">
                <div className="text-2xl font-bold text-white">{dt?.title}</div>
                <div className="text-white">{dt?.release_date} - {dt?.vote_average}</div>
            </div>
        </div>
    );
};

export default Movies;
