import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Home from './pages/Home/Home';
import {SideNav, SideNavItem,Button} from 'react-materialize'
import suit2 from './suit2.jpg'
import Portfolio from './pages/Portfolio';
import Footer from './Footer';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ProjectCard from './Images.js'
import { Card } from '@material-ui/core';
import Icons from './Icons';
import BetterBacks from 'betterbacks'; 
import bubbly from 'bubbly-bg'

const styles = {
  background:{
    // backgroundColor: "#a2a0af",
    height:650   
      },
  root: {
        flexGrow: 1,
      },
  
  // menuButton: {
  //       marginLeft: 0,
  //       marginRight: 0,
  //       width: 50,
  //       align:'right'
  //     },
  list: {
    width: 300,
    background:'linear-gradient(45deg, #d4cd89 30%, 	#eee3a8 90%)'
  }
};

// let settings = {
//   animate: false,
//   type: 'circles',
//   density: 'low',
//   themeColor: this.state.color,
//   dark: true
//   }; 
const StyledBar = withStyles({
root: {
  // background: 'linear-gradient(45deg, #12155f 30%, 	#280ad1 90%)',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  menuButton: {
        width: 20,
        // marginRight: 20,
      },
  // padding: '0 30px',
  boxShadow: '0 1px 2px 2px #2c2b2b',
},
label: {
  textTransform: 'capitalize',
},
})(AppBar);
class App extends Component {




  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    bColor:'#080857',
    fColor:'#240da7'
  };

  componentDidMount() {
  // this.loadBG() 
//   bubbly({
//     colorStart: "#4c004c",
//     colorStop: "#1a001a",
//     bubbleFunc: () => `hsla(${Math.random() * 360}, 100%, 50%, ${Math.random() * 0.25})`
// });
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  componentDidUpdate(){
    // this.reloadBG()
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }


  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  // loadBG=()=>{
  //   let settings = {
  //     animate: false,
  //     type: 'circles',
  //     density: 'low',
  //     themeColor: this.state.color,
  //     dark: true
  //     }; 
      
  //   BetterBacks('.first', settings);
  // }
  // reloadBG=()=>{
  //   let settings = {
  //     animate: false,
  //     type: 'circles',
  //     density: 'low',
  //     themeColor: this.state.color,
  //     dark: true
  //     }; 
  //     BetterBacks('.first', settings);
  // }
   

  handleClick=(event)=>{
    console.log(this.id)
    let id= event.target.id
    console.log(id)
    let bbg=""
    let fbg=""
    
    if(id==="arsenal"){
    bbg ="#660707"
    fbg="#a11907"
    }else if(id==="panda"){
    bbg ="#1d1d1d"
    fbg="#4e4e4e"
  }else if(id==="holy"){
    bbg ="#133a20"
    fbg="#0ca747"
  }else{
    bbg="#080857"
    fbg="#240da7"
  }
    
    console.log(bbg)
    this.setState({
      bColor: bbg,
      fColor:fbg
    })
  }
  render() {
    const { classes } = this.props;
    

    const sideList = (
      <div className={classes.list}>
        <List > 
          <Avatar alt="https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" src={suit2}/>
            <ListItem button  onClick={this.handleClick} id='default' name="default"><b>Default</b>  
            </ListItem>
            <ListItem button onClick={this.handleClick} id='panda' name="panda"><b>Panda</b>  
            </ListItem>
            <ListItem button onClick={this.handleClick} id='arsenal' name="arsenal"><b>Arsenal</b>  
            </ListItem>
            <ListItem button onClick={this.handleClick} id='holy' name="hocro"><b>Holy Cross</b>  
            </ListItem>
        </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </div>
    );
    // let settings = {
    //   animate: false,
    //   type: 'circles',
    //   density: 'low',
    //   themeColor: this.state.color,
    //   dark: true
    //   }; 
    
    return (
    
      <div className="first">
      
       {/* { BetterBacks('.first', settings)} */}
      {/* <Button variant="contained" color="primary">Hello</Button> */}
      <StyledBar position="fixed" id ="bar" style= {{background:`linear-gradient(45deg,${this.state.bColor} 30%, ${this.state.fColor} 90%)`}}>
      {/* <div className='row'> */}
      {/* +this.state.bColor+ */}
        <Typography id='logo' variant="title" color="inherit" >
            Christian Henry
        </Typography>
      
      
      {/* <Button onClick={this.toggleDrawer('left', true)} className= {classes.menuButton}>Open Left</Button> */}
        <IconButton style ={{padding:0, width:400, }} disableRipple="true" color="inherit" aria-label="Menu">
        <MenuIcon id="menu" onClick={this.toggleDrawer('left', true)} />
        </IconButton>
        {/* <i class="fas fa-igloo"></i> */}
       
      {/* </div> */}
                 
  <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          {/* <div
          id= 'list'
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          > */}
            {sideList}
          {/* </div> */}
        </SwipeableDrawer>
   
      </StyledBar>
      
      {/* <div><NavBar/></div> */}
      
        {/* <Navbar fixed='true' className="chNav" brand='Christian' right>
            <NavItem href='get-started.html'><Icon>account_circle</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
         </Navbar> */}
         
        
         <button id= "bt"><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Skills</Link></button>
         <div className='row'>
         <Element name="test1" className="element" >
          <Home/>
          </Element>
          </div>
          
          <div className ="seperator"></div>
          <div className='row'>
          <div className="col s12 m8 offset-l2">
          <Element name="test2" className="element" >
          <div className ="seperator" ></div>
          <Icons/>
          </Element>
          </div>
          </div>
          <button id= "btn"><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500}>Projects</Link></button>
          <div className ="seperator"></div>
          <div className ="seperator"></div>
          <div className='row'>
          <Element name="test3" className="element" >
          <ProjectCard/>
          </Element>
          </div>
          
          <button id= "btn"onClick={this.scrollToTop}>To the top!</button>
          {/* <Portfolio/> */}
          <Footer {...this.state}/>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
