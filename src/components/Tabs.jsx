"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"

const Tabs = () => {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
    console.log(genre, "genre")
    const tabs = [
        {
            name: "En Popüler",
            url: "popular"
        },
        {
            name: "En Son",
            url: "latest"
        },
        {
            name: "Yakında Gelecekler",
            url: "upcoming"
        }
    ]
    return (
        <div className="p-5 m-5 bg-gray-100 dark:bg-gray-600 flex gap-6 items-center justify-center">
            {
                tabs.map((tab, i) => (
                    <Link
                        key={i}
                        className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-amber-600" : ""}`}
                        href={`/?genre=${tab.url}`}
                    >
                        {tab.name}
                    </Link>
                ))
            }

        </div>
    )
}

export default Tabs