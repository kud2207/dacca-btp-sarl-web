import * as React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import { bodyCarusell } from "../../constants/body-carousell";

interface IBodyCarouselsProps {}

const BodyCarousels: React.FunctionComponent<IBodyCarouselsProps> = () => {
    const carousels = [...bodyCarusell]
  return (
    <div>
      <Container>
        <Carousel controls={false}>
          {carousels.map((carouselsTab)=>(
            <Carousel.Item interval={carouselsTab.interval} key={carouselsTab.id}>
            <Image src={carouselsTab.lienImg} className="mobile:h-[450px] laptop:h-[500px] w-full"/>
            <Carousel.Caption>
              <h3 className="font-bold">{carouselsTab.titre}</h3>
              <p>{carouselsTab.sousTitre}</p>
            </Carousel.Caption>
          </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default BodyCarousels;
