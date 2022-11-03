const MiniProject = (props) => {
  const { img, title } = props;

  const divClasses =
    "mini flex bg-white p-2 border border-orange-600 border-solid duration-300 relative before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-1 before:bg-orange-600 before:duration-500 before:hover:left-1/4 before:hover:w-1/2 ";

  const imgClasses =
    "w-36 relative before:absolute before:w-full before:h-full before:bg-gray-600 before:top-0 before:left-0 before:z-10";

  const titleClasses =
    "uppercase text-white font-bold text-lg absolute top-1/2 left-4";

  return (
    <div className={divClasses}>
      <img src={img} alt={title} className={imgClasses} />
      <span
        className={`${
          title === "All" ? `${titleClasses} left-16` : titleClasses
        }`}
      >
        {title}
      </span>
    </div>
  );
};

export default MiniProject;
