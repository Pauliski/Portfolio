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

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Paul Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App />
      </main>
    </div>
  );
}
