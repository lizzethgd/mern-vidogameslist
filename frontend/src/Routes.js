import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// View Components
import Home from './core/Home';
import SignUp from './core/SignUp'
import SignIn from './core/SignIn'
import AddVideogame from './core/AddVideogame'
import AddCategory from './core/AddCategory'
import Videogame from './core/Videogame';

// Functional Components

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/addcategory" exact component={AddCategory}/>
        <Route path="/addvideogame" exact component={AddVideogame}/>
        <Route path="/videogame/:videogameId" exact component={Videogame}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;

/*
  <Route path="/videogame/:videogameId" exact component={Videogame}/>
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/addcategory" exact component={AddCategory}/>
        <Route path="/addvideogame" exact component={AddVideogame}/>
        */