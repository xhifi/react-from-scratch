import Main from "../components/layouts/Main";
import Article from "../components/Article";

const About = () => {
  return (
    <Main>
      <p>
        We are an NGO that helps in locating missing chicken. Weather your
        neighbour's dog ate them, or the sheila living in the front stole one is
        yet not known.
      </p>
      <Article
        heading="Imran Khan is not a terrorist, it was only Pathan"
        content="Yesterday some extravagant show was displayed by the National Democratic Parties of Banana Republic of Pakistan. We saw some marvelous examples of how you can treat your people as sheep and chicken."
      />
    </Main>
  );
};

export default About;
