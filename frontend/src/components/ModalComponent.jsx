import { Modal } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import  PropTypes  from "prop-types";

const ModalComponent = ({element, name, form_title}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Link onClick={() => setOpenModal(true)}>{name}</Link>
      <Modal
        show={openModal === true}
        size="lg"
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>
          {form_title}
        </Modal.Header>
        <Modal.Body>
          {element}
        </Modal.Body>
      </Modal>
    </>
  );
};
ModalComponent.propTypes = {
  element: PropTypes.node,
  name: PropTypes.string.isRequired,
  form_title: PropTypes.string.isRequired,
}
export default ModalComponent;
