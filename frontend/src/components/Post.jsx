import PropTypes from "prop-types";


const Post = ({ post, truncateText }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-3 post">
      <div className="h-[17rem] w-[100%] lg:w-[25rem]">
        <img
          className="h-[100%] w-[100%] object-cover rounded-md cursor-pointer hover:shadow-lg"
          src={
            post.image
              ? `${post.image}`
              : "https://placehold.co/400"
          }
          alt=""
        />
      </div>
      <div className="w-[100%] lg:w-[25rem]">
        <div className=" flex items-center gap-10">
          <span className="text-gray-400 text-sm">
            {post.time_since_created} ago
          </span>
          <span className="bg-red-700 px-3 py-1 rounded-[0.1rem] font-bold text-white text-sm">
            {post.category}
          </span>
        </div>
        <h2 className="font-bold text-lg mt-2">{post.title}</h2>
        <p className="mt-3  leading-8 text-gray-500 font-medium">
          
          {truncateText(post.content, 22)}
          
        </p>
        <div className="flex justify-between mt-3 items-center">
          <div className="flex gap-2 items-center">
            <img
              className="w-10 rounded-full "
              src={post.author_avatar}
              alt={post.author_firstname}
            />
            <span>{post.author_firstname}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object,
  truncateText: PropTypes.func.isRequired
};

export default Post;
