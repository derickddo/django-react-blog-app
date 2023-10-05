import React from "react";
import { TextInput, Label, Textarea, FileInput, Button } from "flowbite-react";
import SelectInput from "../SelectInput";

const PostForm = () => {
  return (
    <form method="post" action="http://127.0.0.1:8000/api/posts" className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Title:" />
        </div>
        <TextInput name="title" id="title" placeholder="title" required type="text" />
      </div>
      <div>
        <SelectInput />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="body" value="Body:" />
        </div>
        <Textarea className="h-[8rem]" id="body" placeholder="body" required />
      </div>
      <div className="max-w-md" id="fileUpload">
        <div className="mb-2 block">
          <Label htmlFor="file" value="Upload photo:" />
        </div>
        <FileInput helperText="Select a picture for your post" id="file" />
      </div>

      <Button type="submit">Post</Button>
    </form>
  );
};

export default PostForm;
