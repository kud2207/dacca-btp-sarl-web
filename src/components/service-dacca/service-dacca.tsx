import * as React from 'react';

import { CardGroup, Container } from "react-bootstrap";
import ServiceDacca from './card-service';
interface IServiceDaccaProps {
}

const ServiceDaccaGroup: React.FunctionComponent<IServiceDaccaProps> = () => {
  return(
    <div>
        <h1 className="font-black text-center mb-6">Nos Service</h1>
        <Container >
          <CardGroup className="laptop:flex laptop:justify-around" >
            
            <ServiceDacca />
            <ServiceDacca />
            <ServiceDacca />
          </CardGroup>
        </Container>
    </div>
  ) ;
};

export default ServiceDaccaGroup;
