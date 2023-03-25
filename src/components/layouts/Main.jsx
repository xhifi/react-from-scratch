import Navigation from "../Navigation";
import Link from "../Link";
import Footer from "../Footer";
import NavData from "../../../src/data/navigation";

function Main({ children }) {
  return (
    <div>
      <Navigation data={NavData} />
      {children}
      <Link to="https://www.google.com">Google</Link>
      <Link to={2}>About</Link>
      <Footer />
    </div>
  );
}

export default Main;
