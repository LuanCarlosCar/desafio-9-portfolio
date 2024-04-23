import { FaFigma } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { SiCreatereactapp } from "react-icons/si";

const data = [
  {
    value: "Criação de sites",
    icone: (
      <SiCreatereactapp className=" text-6xl max-sm:text-5xl mb-11 max-sm:mb-2 text-greenmain" />
    ),
  },
  {
    value: "UI Designer",
    icone: (
      <FaFigma className=" text-6xl max-sm:text-5xl max-sm:mb-2 mb-11 text-greenmain" />
    ),
  },
  {
    value: "Sites responsivos",
    icone: (
      <IoIosPhonePortrait className=" text-6xl max-sm:text-5xl max-sm:mb-2 mb-11 text-greenmain" />
    ),
  },
];

export default function ServiceList() {
  return (
    <div className=" mt-14">
      <h2 className=" text-center text-white text-[2rem] max-sm:text-2xl  font-bold">
        Serviços
      </h2>

      <div className=" flex  sm:justify-center sm:items-center flex-wrap gap-[2.8125rem] max-sm:gap-12 p-5">
        {data.map((item) => {
          return (
            <div
              key={item.value}
              className=" max-sm:flex flex-col justify-center items-center w-[21.875rem] h-[15rem] max-sm:w-[19.5rem] max-sm:h-[8.75rem]  bg-[#333333] p-5 max-sm:m-auto border-b-4 border-solid border-greenmain"
            >
              {item.icone}
              <p className=" sm:text-[2rem] font-medium text-[#828282] mb-1">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
