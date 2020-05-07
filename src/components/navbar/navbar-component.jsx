import React from 'react';



import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'

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
            <div style={{height: '100%'}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}

                <main style={{marginTop: '64px'}}>

                    <h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque corporis distinctio iste iure minima
                        nihil quaerat quisquam quo voluptate. Blanditiis eveniet molestias nihil perspiciatis quia rerum.
                        Ducimus eius, est.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque corporis distinctio iste iure minima
                        nihil quaerat quisquam quo voluptate. Blanditiis eveniet molestias nihil perspiciatis quia rerum.
                        Ducimus eius, est.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque corporis distinctio iste iure minima
                        nihil quaerat quisquam quo voluptate. Blanditiis eveniet molestias nihil perspiciatis quia rerum.
                        Ducimus eius, est.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque corporis distinctio iste iure minima
                        nihil quaerat quisquam quo voluptate. Blanditiis eveniet molestias nihil perspiciatis quia rerum.
                        Ducimus eius, est.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque corporis distinctio iste iure minima
                        nihil quaerat quisquam quo voluptate. Blanditiis eveniet molestias nihil perspiciatis quia rerum.
                        Ducimus eius, est.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque corporis distinctio iste iure minima
                        nihil quaerat quisquam quo voluptate. Blanditiis eveniet molestias nihil perspiciatis quia rerum.
                        Ducimus eius, est.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque corporis distinctio iste iure minima
                        nihil quaerat quisquam quo voluptate. Blanditiis eveniet molestias nihil perspiciatis quia rerum.
                        Ducimus eius, est.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque corporis distinctio iste iure minima
                        nihil quaerat quisquam quo voluptate. Blanditiis eveniet molestias nihil perspiciatis quia rerum.
                        Ducimus eius, est.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque corporis distinctio iste iure minima
                        nihil quaerat quisquam quo voluptate. Blanditiis eveniet molestias nihil perspiciatis quia rerum.
                        Ducimus eius, est.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque corporis distinctio iste iure minima
                        nihil quaerat quisquam quo voluptate. Blanditiis eveniet molestias nihil perspiciatis quia rerum.
                        Ducimus eius, est.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque corporis distinctio iste iure minima
                        nihil quaerat quisquam quo voluptate. Blanditiis eveniet molestias nihil perspiciatis quia rerum.
                        Ducimus eius, est.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque corporis distinctio iste iure minima
                        nihil quaerat quisquam quo voluptate. Blanditiis eveniet molestias nihil perspiciatis quia rerum.
                        Ducimus eius, est.</h2>
                </main>
            </div>
        );
    }
}

export default Navbar;
