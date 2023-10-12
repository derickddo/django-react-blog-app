import { Carousel } from "flowbite-react";
import "../custom.css";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [images, setImages] = useState([]);
  const API_URL = `https://api.unsplash.com/photos/random/?client_id=z77nLFUDx3_JbaIgUz8dsVwYLHQESWe1IosqOCrnHMs&count=5`;

  useEffect(() => {
    const getImage = async () => {
      const response = await fetch(API_URL, { method: "GET" });
      if(!response.status==200){
        throw new Error('error', response.status)
      }
      const data = await response.json();
      setImages(data);
      console.log(data);
    };
    getImage();
  }, []);

  return (
    <div className="h-[20rem] bg-black z-10">
      <Carousel className="">
        <img
          className="absolute"
          alt="..."
          src={
            images?.length == 0
              ? "https://placehold.co/400"
              : images[0].urls.regular
          }
        />
        <img
          alt="..."
          src={
            images?.length == 0
              ? "https://placehold.co/400"
              : images[1].urls.regular
          }
        />
        <img
          alt="..."
          src={
            images?.length == 0
              ? "https://placehold.co/400"
              : images[2].urls.regular
          }
        />
        <img
          alt="..."
          src={
            images?.length == 0
              ? "https://placehold.co/400"
              : images[3].urls.regular
          }
        />
        <img
          alt="..."
          src={
            images?.length == 0
              ? "https://placehold.co/400"
              : images[4].urls.regular
          }
        />
      </Carousel>
    </div>
  );
};

export default HeroSection;
