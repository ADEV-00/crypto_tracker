import Head from "next/head";
import Link from "next/link";

const Layout = ({children}) => {
    return(
        <div>
            <Head>
                <title>Crypto Tracker</title>
            </Head>
            <header></header>
            <main>{children}</main>
        </div>
    )
}

export default Layout;