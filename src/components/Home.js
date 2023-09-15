import React from "react";
/* import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext"; */
import NavBar from "./navigationBar/NavBar";
import Trending from "../pages/Trending/Trending";

const Home = () => {
  return (
    <>
        <NavBar></NavBar>
        <Trending></Trending>
    </>
  );
};

export default Home;