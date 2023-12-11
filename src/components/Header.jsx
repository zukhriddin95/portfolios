
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img className="max-w-[250px] h-[60px]" src={logo} alt="logo" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
