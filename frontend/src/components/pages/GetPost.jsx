import{ useEffect, useState } from "react";
import DropdownComponent from "../DropdownComponent";
import { Textarea, Label, Button } from "flowbite-react";
import Comment from "../Comment";
import { useParams } from "react-router-dom";

const GetPost = () => {
  const [post, setPost] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/posts/${id}`, {
        method: "GET",
      });
      if (!response===200){
        throw new Error('error', response.status)
      }
      const data = await response.json()
      setPost(data)
      console.log(post)
    };
    getPost()
  }, [id, post]);
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
      <div className="h-[25rem] w-full">
        <img
          src={post.image ? post.image :"https://placehold.co/400"}
          className="object-cover h-full w-full"
          alt=""
        />
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">{post.title}</h1>
          <DropdownComponent post={post} post_edit={true}/>
        </div>

        <p className="leading-8 mt-2 text-gray-500">
          {post.content}
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
            <Button className="mt-4" type="submit">
              send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

GetPost.propTypes = {
 
}

export default GetPost;
