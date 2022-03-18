import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../src/components/sidebar/Sidebar/Sidebar";
import Navbar from "../src/components/navbar/Navbar";
import { useState } from "react";
import Hero from "../src/components/hero/Hero";
import App from "../src/components/App/App";
import ThemeContextProvider from "../context/ThemeContext";
import Footer from "../src/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Paul Arokoola | @pauliski - Software Engineer</title>
        <meta name="description" content="Paul Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </main>
    </div>
  );
}
