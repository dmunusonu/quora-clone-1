import React from "react";
import { Route, Switch } from "react-router";
import { Login } from "../components";
import { HomeMain } from "../components/HomeContents/HomeMain";


const Router = () => {
    return (
     
        <Route path="/homemaincontainer">
          <HomeMain/>
        </Route>
      
      </Switch>
    );
};

export default Router;
