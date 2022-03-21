import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect, useState } from 'react'
import Preloader from '../src/components/preloader/Preloader';
config.autoAddCss = false; 

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false);
}, []);

  return (
    <>{loading ? <Preloader /> : <Component {...pageProps} />}</>
  )
}

export default MyApp
