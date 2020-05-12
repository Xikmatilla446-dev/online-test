import React from 'react';

import {Route, NavLink, Switch, Redirect } from 'react-router-dom'


import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'
import FormComponent from "../form/FormComponent";
import CountdownTimer from "../count-down-timer/CountdownTimer";
import CheckboxComponent from "../checkbox/Checkbox";

class Navbar extends React.Component {

    state = {
        sideDrawerOpen: false
    };


    drawerToggleClickHandler = () => {

        this.setState((prevState) => {
            return {sideDrawerOpen: !this.state.sideDrawerOpen};
        });

    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    };


    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {

            backdrop = <Backdrop click={this.backdropClickHandler}/>
        }

        const {invoice} = this.props;

        return (
            <div style={{height: '100'}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}

                <main style={{marginTop: '100px'}}>
                    <Switch>
                        <Route path='/' component={FormComponent}/>
                        <Route path='/:id' component={CheckboxComponent}/>
                    </Switch>
                </main>



            </div>
        );
    }
}

export default Navbar;
