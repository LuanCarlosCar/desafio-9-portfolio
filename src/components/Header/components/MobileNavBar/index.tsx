"use client";

import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function MobileNavBar() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={`hidden max-sm:block`}>
      <header className=" flex justify-between items-center">
        <h1 className=" text-sm font-bold text-white">Portfólio</h1>

        <HiOutlineMenuAlt3
          onClick={() => setIsVisible(!isVisible)}
          className=" text-xl text-white cursor-pointer"
        />
      </header>

      {isVisible && (
        <nav>
          <ul>
            <li className=" text-lg text-white  mb-2 cursor-pointer">
              Sobre mim
            </li>
            <li className=" text-lg text-white  mb-2 cursor-pointer">
              Projetos
            </li>
            <li className=" text-lg text-white  mb-2 cursor-pointer ">
              Serviços
            </li>
            <li className=" text-lg text-white  mb-2 cursor-pointer">
              Minhas skills
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
