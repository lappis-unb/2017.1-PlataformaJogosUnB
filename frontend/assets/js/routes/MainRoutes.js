import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom';
import IndexPage from "../pages/IndexPage";
import AboutPage from "../pages/AboutPage";
import GamesPage from "../pages/GamesPage";
import GamePage from '../pages/GamePage';

export default class MainRoutes extends React.Component {

    render () {

        return (
            <div>
                <Switch>
                  <Route exact path="/" component={IndexPage} />
                  <Route exact path="/games/" component={GamesPage} />
                  <Route path="/games/:id" component={GamePage} />
                  <Route exact path="/about/" component={AboutPage} />
                </Switch>
            </div>
        );

    }
}
