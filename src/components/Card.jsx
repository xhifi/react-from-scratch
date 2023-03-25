import Link from "./Link";

const Card = ({ children, title, image, path, ...rest }) => {
  return (
    <Link to={path} className="text-dark text-decoration-none col" {...rest}>
      <div className="card h-100">
        <img src={image.url} className="card-img-top" alt={image.alt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {children && <p className="card-text">{children}</p>}
        </div>
      </div>
    </Link>
  );
};

export default Card;
