import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }: any) => {
  return (
    <div className="w-full overflow-hidden min-h-screen bg-gray-900 flex flex-col items-center justify-between relative">
      <Head>
        <title>Crypto Tracker</title>
      </Head>
      <div className="absolute top-[-150px] left-[-150px] blur-[250px]">
        <svg
          width="594"
          height="627"
          viewBox="0 0 594 627"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M250.026 5.9681C303.104 -15.7616 357.932 32.9931 413.111 48.6314C470.62 64.93 549.038 49.4259 581.179 99.8198C614.229 151.638 569.356 218.471 560.199 279.245C553.648 322.72 559.645 369.559 535.045 406C511.653 440.651 459.853 440.975 430.753 470.992C386.304 516.843 384.895 608.857 323.031 624.698C266.254 639.236 223.326 569.743 175.09 536.457C127.352 503.515 70.7469 480.593 41.5658 430.47C10.6717 377.405 -14.181 309.254 9.93839 252.785C34.144 196.113 117.513 196.23 160.483 152.056C201.131 110.268 196.074 28.0557 250.026 5.9681Z"
            fill="#00F0FF"
          />
        </svg>
      </div>
      <div className="absolute bottom-[-150px] right-[-100px] blur-[250px]">
        <svg
          width="572"
          height="625"
          viewBox="0 0 572 625"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M130.776 126.508C174.202 83.2967 198.67 9.53049 258.641 0.831231C318.671 -7.87656 358.925 56.9478 411.111 85.8438C460.174 113.01 527.065 116.26 554.952 164.902C583.178 214.134 571.352 278.17 552.897 333.154C536.308 382.581 492.151 413.933 458.009 453.741C419.968 498.095 394.093 553.521 341.826 579.252C277.945 610.7 199.189 643.57 137.505 611.522C75.8179 579.472 74.4724 492.951 50.0836 427.677C28.669 370.363 -12.1071 314.339 4.00192 254.216C19.794 195.275 87.1909 169.879 130.776 126.508Z"
            fill="#00FFB2"
          />
        </svg>
      </div>

      <header className="text-center font-bold text-white text-3xl my-10">
        Crypto Tracker
      </header>
      <main className="glass_effect w-6/12 px-5 rounded-lg h-[80vh] overflow-y-scroll mb-10 scroll_hidden">
        {children}
      </main>
    </div>
  );
};

export default Layout;
