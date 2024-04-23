import { FaHtml5 } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const data = [
  {
    id: 1,
    icone: (
      <FaHtml5 className=" text-7xl max-sm:text-5xl mb-2 text-greenmain" />
    ),
  },
  {
    id: 2,
    icone: (
      <IoLogoCss3 className=" text-7xl max-sm:text-5xl mb-2 text-greenmain" />
    ),
  },
  {
    id: 3,
    icone: (
      <SiJavascript className=" text-7xl max-sm:text-5xl mb-2 text-greenmain" />
    ),
  },
  {
    id: 4,
    icone: (
      <SiTailwindcss className=" text-7xl max-sm:text-5xl mb-2 text-greenmain" />
    ),
  },
  {
    id: 5,
    icone: (
      <GrReactjs className=" text-7xl max-sm:text-5xl mb-2 text-greenmain" />
    ),
  },
  {
    id: 6,
    icone: (
      <TbBrandNextjs className=" text-7xl max-sm:text-5xl mb-2 text-greenmain" />
    ),
  },
];

export default function Skills() {
  return (
    <div className=" mt-14 ">
      <h2 className=" text-center text-white text-[2rem] max-sm:text-2xl  font-bold mb-6">
        Minhas skills
      </h2>

      <div className=" flex sm:justify-center flex-wrap gap-12 p-5">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className=" border border-solid border-[#333333] bg-[#212121] h-[9.375rem] w-[9.375rem] max-sm:h-[5.625rem] max-sm:w-[5.625rem] flex flex-col justify-center items-center max-sm:m-auto"
            >
              {item.icone}
            </div>
          );
        })}
      </div>
    </div>
  );
}
