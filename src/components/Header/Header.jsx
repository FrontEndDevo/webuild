import header from "../../assets/images/header.jpg";
const Header = () => {
  return (
    <div className="relative ">
      <img src={header} alt="" />
      <span className="absolute w-full h-full bg-gray-900 opacity-70 top-0 left-0 z-10"></span>
    </div>
  );
};

export default Header;
