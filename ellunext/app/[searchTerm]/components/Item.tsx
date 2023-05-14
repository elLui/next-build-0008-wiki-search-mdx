import Link from 'next/link'


type Props = {
    result: Result;
}


export default function Item({result}: Props) {
    const itemTextColumn = (<div className="flex flex-col justify-center">
            <h2>
                <Link href={`https://en.wikipedia.org/?curied=${result.pageid}`} target="_blank"
                      className="text-xl font-bold underline">
                    {result.title}
                </Link>
            </h2>
            <p className="text-sm text-gray-600">{result.extract}</p>
        </div>)


    const content = result?.thumbnail?.source ? (<article className="m-4 max-w-lg">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col justify-center">
                    <img
                        src={result.thumbnail.source}
                        alt={result.title}
                        height={result.thumbnail.height}
                        width={result.thumbnail.width}
                        loading={"lazy"}
                    />
                </div>
                {itemTextColumn}
            </div>
        </article>

    ) : (

        <article className="m-4 max-w-lg">
            {itemTextColumn}
        </article>

    )

    return content;
}
