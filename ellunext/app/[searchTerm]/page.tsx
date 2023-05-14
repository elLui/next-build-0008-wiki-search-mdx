import getWikiResults from "@/lib/getWikiResults";
import Item from "@/app/[searchTerm]/components/Item";


type Props = {
    params: {
        searchTerm: string;
    }
}

export async function generateMetaData({params: {searchTerm}}: Props) {

    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
    // we are able to declare this here, due to next.js deduping the fetch
    const data = await wikiData;

    // spaces === %20 in the url
    const displayTerm = searchTerm.replaceAll("%20", " ");

    // !! !reversed boolean as opposed to declaration statement
    if (!data?.query?.pages) {
        return {
            title: `${displayTerm} not found | Ellunext`,
            description: `Search results for ${displayTerm}`
        }
    }

    // return {
    //     title: displayTerm,
    //     description: `Search results for ${displayTerm}`,
    // }


    return {
        title: `${searchTerm} | Ellunext`,
        description: `Search results for ${searchTerm}`
    }
}

export default async function SearchResults({params: {searchTerm}}: Props) {


    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);


    const data = await wikiData;

    // these may not be defined
    const results: Result[] | undefined = data?.query?.pages;


    const content = (

        <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
            {results ? Object.values(results).map(result => {
                return <Item key={result.pageid} result={result}/>
            }) : <h2 className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold"
            >
                {`${searchTerm} not found`}
            </h2>}
        </main>

    )


    return content;
}
