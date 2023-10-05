import React, { useEffect } from "react";
import Post from "./Post";
import Activity from "./Activity";
import { Link } from "react-router-dom";

const Posts = ({ posts, fixed }) => {
  return (
    <>
      <div
        className={`bg-white top-[3.5rem] h-20 flex items-center  transition-all ${
          fixed ? "sticky" : ""
        }`}
        id="post-header"
      >
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto ">
          <h3 className="font-bold   text-xl">Recent Posts</h3>
        </div>
      </div>

      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto mb-8  leading-6 ">
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-4 lg:col-span-3">
            {/* post-container */}
            <div className="grid  mt-2 gap-10">
              {posts.map((post) => 
                <Link to={`/get-post/${post.id}`} key={post.id}>
                  <Post post={post} key={post.id}/>
                </Link>
              )}
            </div>
          </div>
          <Activity fixed={fixed} />
        </div>
      </div>
    </>
  );
};

export default Posts;
