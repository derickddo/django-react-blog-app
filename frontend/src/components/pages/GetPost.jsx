import React from "react";
import DropdownComponent from "../DropdownComponent";
import { Textarea, Label, Button } from "flowbite-react";
import Comment from "../Comment";

const GetPost = () => {
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
      <div className="h-[25rem] w-full">
        <img
          src="https://placehold.co/400"
          className="object-cover h-full w-full"
          alt=""
        />
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">Title</h1>
          <DropdownComponent />
        </div>

        <p className="leading-8 mt-2 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          reiciendis, animi sed ut ullam debitis obcaecati commodi dignissimos
          soluta eveniet voluptates, quaerat vel. Dolor commodi necessitatibus
          aperiam facere in atque?
        </p>
      </div>
      <div className="mt-8">
        <h2 className="font-bold">Comment</h2>
        <div className="my-6">
          <Comment />
          <Comment />
          {/* <p className="text-gray-500 mt-5">No comments</p> */}
        </div>
        <form method="post" className="mt-8">
          <div className="" id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
              className="w-full"
            />
            <Button className="mt-4" type="submit">send</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetPost;
