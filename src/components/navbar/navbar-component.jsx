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

                          </div>
        );
    }
}

export default Navbar;
