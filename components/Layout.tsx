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
    </Head>
    <header className="h-32 flex justify-end items-center p-5">
      <ul className="flex gap-8 h-auto">
        <li className="float-right">LinkedIn</li>
        <li className="float-right">Github</li>
      </ul>
    </header>
    <div className="w-full flex justify-center items-center p-6">
      <div className="w-full max-w-3xl">{children}</div>
    </div>
    <footer></footer>
  </div>
);

export default Layout;
