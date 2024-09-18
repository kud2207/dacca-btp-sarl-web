import * as React from 'react';

interface IReseauxSocialProps {
}

const ReseauxSocial: React.FunctionComponent<IReseauxSocialProps> = () => {
  return(
    <div className='gap-3 flex '>
        <i className="bi bi-facebook text-white hover:text-green-600"></i>
        <i className="bi bi-google text-white hover:text-green-600"></i>
        <i className="bi bi-twitter-x text-white hover:text-green-600"></i>
    </div>
  ) ;
};

export default ReseauxSocial;
