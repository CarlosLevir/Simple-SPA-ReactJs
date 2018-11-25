import React from "react";
import Home from "./components/home/home";
import { Container } from 'react-materialize';
import Contact from './components/contact/contact';
import { Switch, Route } from 'react-router-dom';
import Credits from './components/credits/credits';

const Main = () => (
  <main>
    <Container>
      <Switch>      
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/credits" component={Credits} />
      </Switch>
    </Container>
  </main>  
);

export default Main;