import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }: any) => {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center justify-between">
      <Head>
        <title>Crypto Tracker</title>
      </Head>
      <header className="text-center font-bold text-white text-3xl mt-10">Crypto Tracker</header>
      <main className="bg-red-500 w-6/12">{children}</main>
    </div>
  );
};

export default Layout;
