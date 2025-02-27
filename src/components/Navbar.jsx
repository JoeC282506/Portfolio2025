import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="  mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="text-4xl">JC</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/JoeC282506?tab=repositories"
          target="_blank"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
