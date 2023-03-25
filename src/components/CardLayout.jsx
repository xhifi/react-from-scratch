const CardLayout = ({ children, cols }) => {
  return (
    <div className="container-fluid">
      <div className={`row row-cols-1 row-cols-md-${parseInt(cols)} g-4`}>
        {children}
      </div>
    </div>
  );
};

export default CardLayout;
