import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../src/components/sidebar/Sidebar/Sidebar";
import Navbar from "../src/components/navbar/Navbar";
import { useState } from "react";

const DivStyle = styled.h1`
  color: blue;
  font-size: 35px;
  font-weight: bold;
`;

export default function Home() {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const toggleSidebar = () => {
    setDisplaySidebar(!displaySidebar);
  };
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Paul Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar toggleSidebar={toggleSidebar} sidebarIsOpen={displaySidebar}/>
      </main> 
    </div>
  );
}
