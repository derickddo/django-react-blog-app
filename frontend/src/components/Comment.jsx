import React from 'react'
import { Avatar } from 'flowbite-react'
import DropdownComponent from './DropdownComponent'

const Comment = () => {
  return (
    <div className="flex w-100 items-start gap-[0.5rem] mb-8 ">
          <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
              className="w-[10rem] lg:w-[4rem]"
            />
            <div className="">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">2 days ago</span>
                <DropdownComponent />
              </div>
              <p className="mt-2 leading-7 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui explicabo mollitia dolorum rem dicta illum tempore, saepe quibusdam pariatur perferendis enim, labore vero quidem blanditiis iusto sapiente, deleniti voluptas nam.</p>
            </div>
          </div>
  )
}

export default Comment