const MiniProject = (props) => {
  const { img, title } = props;

  return (
    <div className="mini">
      <img src={img} alt={title} />
      <span>{title}</span>
    </div>
  );
};

export default MiniProject;
