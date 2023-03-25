import { Link as RRLink } from "react-router-dom";
// Components

function Link({ to, children, ...restProps }) {
  const path = String(to);
  if (path.startsWith("http")) {
    return (
      <a href={path} target="_blank" rel="noreferrer" {...restProps}>
        {children}
      </a>
    );
  }
  return (
    <RRLink to={path} {...restProps}>
      {children}
    </RRLink>
  );
}

export default Link;
