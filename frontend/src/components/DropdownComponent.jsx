"use client";

import { Dropdown } from "flowbite-react";
import { HiPencil, HiX, HiDotsHorizontal } from "react-icons/hi";

const DropdownComponent = () => {
  return (
    <Dropdown
      dismissOnClick={false}
      renderTrigger={() => <span  className="cursor-pointer"><HiDotsHorizontal></HiDotsHorizontal></span> }
    >
      <Dropdown.Item icon={HiX}>Delete</Dropdown.Item>
      <Dropdown.Item icon={HiPencil}>Edit</Dropdown.Item>
    </Dropdown>
  );
};
export default DropdownComponent;
