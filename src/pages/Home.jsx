import Card from "../components/Card";
import CardLayout from "../components/CardLayout";
import Main from "../components/layouts/Main";

import cardsData from "../data/cards";

const Home = () => {
  return (
    <Main>
      <CardLayout cols="3">
        {cardsData.cards.map((card, placement) => {
          return (
            <Card
              title={card.title}
              image={{ url: card.image.imageUrl, alt: card.image.imageAlt }}
              path={card.refersTo}
              key={placement}
            >
              {card.content}
            </Card>
          );
        })}
      </CardLayout>
    </Main>
  );
};

export default Home;
