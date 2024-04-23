import { AiOutlineMail } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { RiEmotionHappyLine } from "react-icons/ri";
import imagAbout from "../../../public/imgabout.svg";
import Image from "next/image";

const data = [
  {
    label: "Meu nome",
    value: "Iuri Silva",
    icone: (
      <RiEmotionHappyLine className=" text-4xl  max-sm:text-3xl text-greenmain" />
    ),
  },
  {
    label: "E-mail",
    value: "iuricold99@gmail.com",
    icone: (
      <AiOutlineMail className="  text-4xl  max-sm:text-3xl text-greenmain" />
    ),
  },
  {
    label: "Instagram",
    value: "@iuricode",
    icone: (
      <IoLogoInstagram className=" text-4xl   max-sm:text-3xl text-greenmain" />
    ),
  },
  {
    label: "Telefone",
    value: "(14) 9999-9999",
    icone: <LuPhone className=" text-4xl   max-sm:text-3xl text-greenmain" />,
  },
];

export default function About() {
  return (
    <div>
      <div className=" mt-14 mb-[3.5rem]">
        <div className=" flex justify-between items-center max-sm:block">
          <div>
            <h2 className=" font-bold text-white text-4xl max-sm:text-2xl max-sm:text-center mb-2">
              Olá, eu sou o <br /> Iuri Silva :)
            </h2>
            <p className=" max-sm:text-center text-lg text-[#828282] max-sm:text-base mb-8">
              Desenvolvedor Front-End & UI Designer
            </p>

            <div className=" flex items-center max-sm:justify-center gap-3">
              <button className=" w-[9.375rem] bg-greenmain text-black text-center py-2 font-medium ">
                Download CV
              </button>
              <button className=" w-[9.375rem] border border-solid border-[#333333] text-center py-2 font-medium text-white ">
                Entrar em contato
              </button>
            </div>
          </div>
          <Image
            width={300}
            height={254}
            src={imagAbout}
            className="max-sm:hidden"
            alt=""
          />
        </div>
      </div>

      <div className=" mb-14 sm:flex flex-col justify-center items-center">
        <h2 className=" text-[2rem] max-sm:text-2xl text-center text-white mb-[0.875rem]">
          Sobre mim
        </h2>
        <p className=" inline-block sm:w-[46.6875rem] text-lg max-sm:text-base text-center text-[#828282]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className=" flex flex-wrap gap-12 p-5">
        {data.map((item) => {
          return (
            <div
              key={item.label}
              className=" w-[7.6875rem] flex flex-col justify-center items-center m-auto"
            >
              <div className=" flex flex-col justify-center items-center bg-[#212121] rounded-full w-[3.875rem]   h-[3.875rem]  max-sm:w-[2.8125rem] max-sm:h-[2.8125rem] mb-[0.875rem] ">
                {item.icone}
              </div>
              <p className=" font-bold sm:text-lg text-white mb-1 ">
                {item.label}
              </p>
              <p className=" sm:text-base text-[#828282]">{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
