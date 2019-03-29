import React,{Component} from 'react'
import Navbar from 'react-materialize';
import NavItem from 'react-materialize';
import Icon from 'react-materialize';

class Nav extends Component{
    render(){
        return(
            <Navbar fixed='true' className="chNav" brand='Christian' right>
            <NavItem href='get-started.html'><Icon>account_circle</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
         </Navbar> 
        )
    }
}
export default Nav