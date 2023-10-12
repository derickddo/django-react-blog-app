import { useState } from "react";
import {
  TextInput,
  Label,
  Textarea,
  FileInput,
  Button,
  Spinner,
} from "flowbite-react";
import SelectInput from "../SelectInput";
import { useNavigate } from "react-router-dom";
import Proptypes from "prop-types";

const PostForm = ({ post, setShowModal }) => {
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");
  const [category, setCategory] = useState(post ? post.category : "");
  const [image, setImage] = useState(post ? post.image: "");
  const navigate = useNavigate();
  const [spin, setSpin] = useState(false);

  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("image", image);
  formData.append("category", category);

  const fetchWithToken = async (url, options) => {
    const token = localStorage.getItem("authToken");
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };

    return await fetch(url, options);
  };
  const postToDRF = async () => {
    const response = await fetchWithToken(!post ? "http://127.0.0.1:8000/api/posts": `http://127.0.0.1:8000/api/posts/${post.id}`, {
      method: post ? 'PUT' : "POST",
      body: formData,
    });
    if (!response.status === 201 | !response.status==200) {
      throw new Error("error occurred", response.status);
    }
    if(post){
      setShowModal(false)
    }
    else{
    navigate("/home");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpin(true);
    postToDRF();
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      encType="multipart/form-data"
      className="flex max-w-md flex-col gap-4"
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Title:" />
        </div>
        <TextInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          id="title"
          placeholder="title"
          required
          type="text"
        />
      </div>
      <div>
        <SelectInput required category={category} setCategory={setCategory} />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="body" value="Body:" />
        </div>
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="body"
          className="h-[8rem]"
          id="body"
          placeholder="body"
          required
        />
      </div>
      <div className="max-w-md" id="fileUpload">
        <div className="mb-2 block">
          <Label htmlFor="file" value="Upload photo:" />
        </div>
        <FileInput
          onChange={(e) => setImage(e.target.files[0])}
          name="image"
          helperText="Select a picture for your post"
          id="file"
          required
          
          
        />
      </div>

      <Button type="submit">
        {" "}
        {spin ? "" : post ? 'Save':"Post"}{" "}
        <Spinner
          className={spin ? "" : "hidden"}
          id="spiner"
          aria-label="Default status example"
        />{" "}
      </Button>
    </form>
  );
};

PostForm.propTypes = {
  post: Proptypes.object,
  setShowModal: Proptypes.func
};

export default PostForm;
