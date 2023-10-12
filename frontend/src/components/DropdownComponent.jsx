import PropTypes from "prop-types";
import { Dropdown } from "flowbite-react";
import PostForm from "./forms/PostForm";
import { HiDotsHorizontal, HiPencil, HiTrash } from "react-icons/hi";
import { useState } from "react";
import { Modal, Button } from "flowbite-react";
import DeleteComponent from "./DeleteComponent";

const DropdownComponent = ({ post }) => {
  const [showModal, setShowModal] = useState(false);
  const [editPost, setEditPost] = useState(false);

  const handleEditClick = () => {
    setEditPost(true);
    setShowModal(true);
  };
  const handleDeleteClick = () => {
    setShowModal(true);
    setEditPost(false);
  };

  return (
    <>
      <Dropdown
        dismissOnClick={false}
        renderTrigger={() => (
          <span>
            <HiDotsHorizontal className="cursor-pointer"></HiDotsHorizontal>
          </span>
        )}
      >
        <Dropdown.Item onClick={handleEditClick}>
          <HiPencil></HiPencil>
          Edit
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDeleteClick}>
          <HiTrash></HiTrash>Delete
        </Dropdown.Item>
      </Dropdown>

      <Modal show={showModal} onClose={() => setShowModal(false)} size={"lg"}>
        {" "}
        {editPost ? <Modal.Header>Edit Post</Modal.Header> : ''}
        <Modal.Body>
          {editPost ? (
            <PostForm setShowModal={setShowModal} post={post} />
          ) : (
            <DeleteComponent post={post} setShowModal={setShowModal} />
          )}
        </Modal.Body>
        {editPost ? (
          <Modal.Footer>
            <Button type="button" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        ) : (
          ""
        )}
      </Modal>
    </>
  );
};
DropdownComponent.propTypes = {
  post_edit: PropTypes.bool,
  post: PropTypes.object,
};
export default DropdownComponent;
