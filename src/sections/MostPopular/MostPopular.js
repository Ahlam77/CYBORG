import "./MostPopular.css";


import {
  Card,
  SectionHeader,
  SectionWrapper,
  PrimaryButton,
} from "../../components/index";

import MostPopularData from "../../Data/MostPopularData";



function MostPopular() {
 
  const cards = MostPopularData.map((card) => {
    return (
      <Card
      key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        rate={card.rate}
        download={card.download}
      />
    );
  });

  return (
    <>
      <SectionWrapper>
        <SectionHeader>Most Popular</SectionHeader>
        <div className="most-popular-items">{cards}</div>
        <div className="col-lg-12">
          <div className="prim-btn">
            <PrimaryButton>Discover Popular</PrimaryButton>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

export default MostPopular;
