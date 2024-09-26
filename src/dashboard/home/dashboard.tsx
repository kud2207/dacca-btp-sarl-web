import * as React from 'react';
import Slidebar from './slidebar';
import HomeDashboard from './home';

interface IDashboardProps {

}



const Dashboard: React.FunctionComponent<IDashboardProps> = () => {
  const [toggle, setToggle] = React.useState(true)
  
  const Toggle= () =>{
    setToggle(!toggle)
  }
  return(
    <div className='container-fluid bg-secondary min-vh-100'>
      <div className='row'>
       {toggle &&  <div className='col-2 bg-white vh-100 shadow-none'>
        <Slidebar/>
        </div>}
        <div className="col">
          <HomeDashboard  Toggle={Toggle}/>
        </div>
      </div>
    </div>
  ) ;
};

export default Dashboard;
