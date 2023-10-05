import {
  Button,
  Label,
  Modal,
  TextInput,
  Textarea,
  FileInput,
} from "flowbite-react";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import PostForm from "./forms/PostForm";

const ModalComponent = () => {
  const [openModal, setOpenModal] = useState("");

  return (
    <>
      <Link onClick={() => setOpenModal("form-elements")}>Post</Link>
      <Modal
        show={openModal === "form-elements"}
        size="lg"
        popup
        onClose={() => setOpenModal(undefined)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 mb-2">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Post Something
            </h3>
          </div>

          <PostForm />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalComponent;
