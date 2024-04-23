export default function DescktopNavBar() {
  return (
    <header className=" max-sm:hidden flex justify-between items-center p-5">
      <h1 className=" text-[1.625rem] font-bold text-white">Portfólio</h1>

      <nav>
        <ul className=" flex items-center  gap-11">
          <li className=" text-lg text-white  cursor-pointer">Sobre mim</li>
          <li className=" text-lg text-white  cursor-pointer">Projetos</li>
          <li className=" text-lg text-white  cursor-pointer ">Serviços</li>
          <li className=" text-lg text-white  cursor-pointer">Minhas skills</li>
        </ul>
      </nav>
    </header>
  );
}
