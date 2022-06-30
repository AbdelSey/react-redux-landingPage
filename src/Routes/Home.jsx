import React from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Services from "../components/Services";
import { useSelector } from "react-redux";
import NavPopUp from "../components/NavPopUp";

const Home = () => {
  const { isOpen } = useSelector((store) => store.navBar);

  return (
    <>
      {isOpen && <NavPopUp />}
      <NavBar />
      <Main />
      <Services />
    </>
  );
};

export default Home;
