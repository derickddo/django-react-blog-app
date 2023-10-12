import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button } from "flowbite-react";
import PropTypes from "prop-types";
import { Spinner } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DeleteComponent = ({ setShowModal, post }) => {
  const [spin, setSpin] = useState(false);
    const navigate = useNavigate()

  const deletePost = async () => {
    const token = localStorage.getItem("authToken");
    const response = await fetch(
      `http://1.2.7.0.0.1:8000/api/posts/${post.id}`,
      {
        method: "DELETE",
        headers: `Authorization: Bearer !${token}`,
      }
    );
    if (!response === 200) {
      throw new Error("error", response.status);
    }
    const data = await response.json();
    console.log(data);
    navigate('/home')
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSpin(true);
    deletePost();
  };
  return (
    <form onSubmit={handleSubmit} method="post" className="text-center">
      <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
        Are you sure you want to delete this post?
      </h3>
      <div className="flex justify-center gap-4">
        <Button type="submit" color="failure">
          {spin ? "" : "Yes 'm sure"}
          <Spinner
            className={spin ? "" : "hidden"}
            id="spiner"
            aria-label="Default status example"
          />
        </Button>
        <Button color="gray" onClick={() => setShowModal(false)}>
          No, cancel
        </Button>
      </div>
    </form>
  );
};
DeleteComponent.propTypes = {
  setShowModal: PropTypes.func,
  post: PropTypes.object,
};
export default DeleteComponent;
