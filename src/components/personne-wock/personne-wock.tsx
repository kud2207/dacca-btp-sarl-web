import * as React from 'react';
import PersonneComposant from './personne-composant';
import { Container } from 'react-bootstrap';

interface IPersonneWockProps {
}

const PersonneWock: React.FunctionComponent<IPersonneWockProps> = () => {
  return(
    <div className=''>
   <Container>
   <h2 className='font-bold text-center'>Different People — One Missio</h2>
        <div
        className="d-flex flex-row overflow-auto"
        style={{ whiteSpace: 'nowrap' }}
      >

        <PersonneComposant/>
        <PersonneComposant/>
        <PersonneComposant/>
        <PersonneComposant/>
        <PersonneComposant/>
      </div>
   </Container>
    </div>
  ) ;
};

export default PersonneWock;
