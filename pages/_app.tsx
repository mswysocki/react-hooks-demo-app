import '../scripts/wdyr.js'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import whyDidYouRender from "@welldone-software/why-did-you-render";
import React from 'react';

if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  whyDidYouRender(React);
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
