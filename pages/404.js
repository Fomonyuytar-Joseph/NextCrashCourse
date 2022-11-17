import Link from "next/link";



const PageNotFound = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <h3>Check if you are in the correct page</h3>
            <Link href="/">Go back to the homepage</Link>
            </div>
    )

}


export default PageNotFound;
