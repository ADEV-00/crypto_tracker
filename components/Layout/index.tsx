import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }: any) => {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center justify-between">
      <Head>
        <title>Crypto Tracker</title>
      </Head>
      <header className="text-center font-bold text-white text-3xl my-10">
        Crypto Tracker
      </header>
      <main className="glass_effect w-6/12 px-5 rounded-lg h-[80vh] overflow-y-scroll mb-10 scroll_hidden">{children}</main>
    </div>
  );
};

export default Layout;
