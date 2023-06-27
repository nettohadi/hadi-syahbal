import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="bg-slate-900 text-gray-100 h-full overflow-auto">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
    </Head>
    <header className="h-32 flex justify-center items-center w-full p-6">
      <div className="w-full max-w-3xl flex justify-between items-center">
        <Link href={"/"}>
          <img
            className="border border-white rounded-full p-0.5 cursor-pointer"
            src="/favicons/favicon.ico"
            alt="home"
            width="40"
            height="40"
          />
        </Link>

        <ul className="flex gap-8 h-auto">
          <li className="float-right">LinkedIn</li>
          <li className="float-right">Github</li>
        </ul>
      </div>
    </header>
    <div className="w-full flex justify-center items-center p-6">
      <div className="w-full max-w-3xl">{children}</div>
    </div>
    <footer></footer>
  </div>
);

export default Layout;
