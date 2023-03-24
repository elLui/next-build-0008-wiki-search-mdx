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

        // redirect to search page
        router.push(`/${search}/`);
    }


    return (

        <form onSubmit={submitHandler} className="w-50 flex justify-center md:justify-between">
            <input
                type="text"
                value={search}
                placeholder={"dondea"}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-white p-2 w-80 text-xl rounded-xl shadow-lg"
            />
            <button

                type="submit"
                className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">🚀
            </button>
        </form>

    )
}
