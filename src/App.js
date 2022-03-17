// import './App.css';
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderForm from './components/HeaderForm';
import Planet from './views/Planet';
import People from './views/People';   
import Film from './views/Film';   


function App() {
  return (
    <BrowserRouter>

    <HeaderForm />

    <Switch>
      <Route path="/planets/:id">
        <Planet/>
      </Route>
      <Route path="/people/:id">
        <People/>
      </Route>
      <Route path="/films/:id">
        <Film/>
      </Route>
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
