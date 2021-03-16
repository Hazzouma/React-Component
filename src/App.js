import React, {Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import ProfilPhoto from './Components/ProfilPhoto/ProfilPhoto';
import FullName from './Components/FullName/FullName';
import Address from './Components/Address/Address'

function App() {
  return (
    <Fragment>
      <Navbar/>
      <ProfilPhoto/>
      <FullName/>
      <Address/>
    </Fragment>
  );
}

export default App;
