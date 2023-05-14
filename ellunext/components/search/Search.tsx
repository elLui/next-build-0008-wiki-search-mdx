"use client";

import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

export default function Search() {

    const [search, setSearch] = useState("");
    const router = useRouter();


    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        // prevent default form submission
        e.preventDefault();
        // clear search input
        setSearch("");
        // redirect to search page url with included search terms
        router.push(`/${search}/`);
    }


    return (

        <form className="w-50 flex justify-center md:justify-between" onSubmit={submitHandler}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white p-2 w-80 text-xl rounded-xl"
                placeholder="Search"
            />
            <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
                🚀
            </button>
        </form>

    )
}
