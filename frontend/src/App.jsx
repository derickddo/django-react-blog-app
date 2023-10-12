import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Posts from "./components/Posts";
import { Route, Routes } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import GetPost from "./components/pages/GetPost";
import LoginForm from "./components/forms/LoginForm";

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

  function truncateText(text, wordCount) {
    const words = text.split(' ');
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(' ') + '...';
    } else {
      return text;
    }
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
  }, []);

  useEffect(() => {
    getPosts()
  }, [posts]);


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
              truncateText={truncateText}
              
            />
            </>
          }
        />
        <Route path="/get-post/:id" element={<GetPost truncateText={truncateText} />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      <FooterComponent />
    </>
  );
};

export default App;
