import React from "react";
import { Dropdown, Navbar, Avatar, Modal } from "flowbite-react";
import ModalComponent from "./ModalComponent";
import "../custom.css"
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar className="sticky top-0 z-10 shadow-md">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto flex flex-wrap items-center justify-between">
      <Navbar.Brand href="home">
        {/* <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white tracking-widest">
          Blogging
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={true}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/home" >Home </Link>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link>
          
          <ModalComponent />
        </Navbar.Link>
      </Navbar.Collapse>
      </div>
      
    </Navbar>
  );
};
export default NavbarComponent;
