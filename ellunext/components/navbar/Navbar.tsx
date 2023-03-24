import clsx from "clsx";
import Link from "next/link";
import Search from "@/components/search/Search";

export default function Navbar() {

    return (

        <nav
            className={clsx("bg-slate-600", "flex", "flex-col", "md:flex-row", "sticky", "top-0", "p-4", "drop-shadow-xl")}>
            <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">

                <Link href="/">
                    supa dupa
                </Link>

                <Search/>


            </h1>

        </nav>

    )
}
