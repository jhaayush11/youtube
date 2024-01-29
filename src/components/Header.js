import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <img
          className="h-16 w-14 m-2 p-2 mr-1 pr-0 mt-0 cursor-pointer"
          src="https://as2.ftcdn.net/v2/jpg/03/11/74/39/1000_F_311743939_nzIeolYSBXgWJNsOuKbAkdCM7LpW4mnh.jpg"
          alt=""
        />
        <img
          className="h-16 w-16 m-2 p-2 ml-1 pl-0 mt-0 cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN-nMKP7ysfeCD37Vg1ySYOHqxEliUdLZ9zg&usqp=CAU"
          alt=""
        />
      </div>
      <div className="flex h-12 w-6/12 m-2 p-2 ">
        <input
          className="w-9/12 text-lg rounded-l-full border-2 border-black text"
          type="text"
          placeholder="Search"
        />
        <img
          className=" bg-gray-200 border-2 border-black rounded-r-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVaaAm2Fw0-QJkIuxpisv9LAmmD9XV-Jynpg&usqp=CAU"
          alt=""
        />
      </div>
      <img
        className="flex h-12 w-12 m-2 p-2 "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWXWTR6Kyr4AS4XzYn8dHiK8maax2z1TPxA&usqp=CAU"
        alt=""
      />
    </div>
  );
}

export default Header;
