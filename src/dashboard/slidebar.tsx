import * as React from 'react';

interface ISlidebarProps {
}

const Slidebar: React.FunctionComponent<ISlidebarProps> = (props) => {
  return(
    <div className='bg-white'>
        <div>
            <i className='bi bi-bootstrap-fill my-2'></i>
            <span className='brand-name fs-4'>Kageu Ulrich</span>
        </div>
        <hr className="text-dark" />
        <div className="list-group list-group-flush">
            <a className="list-groupe-item list-group-item-action my-2">
                <i className="bi bi-speedometer2"></i>
                <span>Dashboard</span>
            </a>
            <a className='list-group-item list-group-item-action my-2'>
                <i className='bi bi-house'>
                    <span>Home</span>
                </i>
            </a>
        
        </div>
    </div>
  ) ;
};

export default Slidebar;
