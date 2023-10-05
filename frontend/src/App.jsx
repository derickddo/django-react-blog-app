import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import React, { useEffect, useState, useRef } from "react";
import HeroSection from "./components/HeroSection";
import Posts from "./components/Posts";
import { Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import GetPost from "./components/pages/GetPost";

const App = () => {
 
  const [posts, setPosts] = useState([]);
  const [isFixed, setIsFixed] = useState(false);
  
  const API_URL = 'http://127.0.0.1:8000/api/posts'

  const getPosts = async() => {
    const response = await fetch(API_URL)
    if(!response.ok){
      throw new Error(`An error occured ${response.status}`)
    }
    const data = await response.json()
    setPosts(data)
  }
 

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 350;
      const scrollY = window.scrollY;
      
      if (scrollY >= threshold) {
        setIsFixed(true);
      }
      else{
        setIsFixed(false)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  useEffect(() => {
    getPosts()
  }, []);


  return (
    <>
      <NavbarComponent />
      
      <Routes>
        <Route
          path="/home"
          exact
          element={
            <>
            <HeroSection />
            <Posts
              posts={posts}
              fixed={isFixed}
              
            />
            </>
          }
        />
        <Route path="/get-post/:id" element={<GetPost />} />
      </Routes>
      <FooterComponent />
    </>
  );
};

export default App;
