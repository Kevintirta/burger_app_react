import React,{Component } from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class layout extends Component {

    state = {
        showSideDrawer:true
    }

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer:false});
    }

    ToogleDrawerHandler = () =>{
        console.log("in toogle drawer handler");
        this.setState({showSideDrawer:true});
    }


    render(){ 
        return(
            <Aux>
            <Toolbar clicked={this.ToogleDrawerHandler}/>
            <SideDrawer open={this.state.showSideDrawer } closed={this.sideDrawerClosedHandler}/>
            <main className="Content"> 
                {this.props.children}
            </main>
        </Aux>
        )
    }    
}

export default layout;

 
