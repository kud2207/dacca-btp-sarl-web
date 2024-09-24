import * as React from 'react';
import NavDashboard from './nav';

interface IHomeDashboardProps {
    Toggle : ()=> void
}  

const HomeDashboard: React.FunctionComponent<IHomeDashboardProps> = ({Toggle}) => {

    return (
    <div className=''>
        <NavDashboard Toggle={Toggle} />
        <div className='container-fluid'>
            <div className="row g-3 my-2 bg-white w-full h-full">
               
            </div>
        </div>
    </div>
  );
};

export default HomeDashboard;
