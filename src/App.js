import React, { Component } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './App.css';
import Home from './pages/Home/Home';
import tobago from './tobago.jpg'
import Footer from './Footer';
import { Link, Element, Events, animateScroll as scroll, scroller } from 'react-scroll'
import ProjectCard from './Images.js'
import Icons from './Icons';


const styles = {
  background:{
    color:'#faebd7',
    height:650   
      },
  root: {
        flexGrow: 1,
      },
  list: {
    width: 300,
    height:999,
    background:'linear-gradient(45deg, #d4cd89 30%, 	#eee3a8 90%)'
  }
};
const StyledBar = withStyles({
root: {
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  menuButton: {
        width: 20,
      },
  boxShadow: '0 1px 2px 2px #2c2b2b',
},
// label: {
//   textTransform: 'capitalize',
// },
})(AppBar);
class App extends Component {

  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    bColor:'#080857',
    fColor:'#240da7',
    bgColor:'#3a332bcb'
  };

  componentDidMount() {
  
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

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

  handleClick=(event)=>{
    console.log(this.id)
    let id= event.target.id
    console.log(id)
    let bbg=""
    let fbg=""
    let cbg=""
    if(id==="arsenal"){
    bbg ="#660707"
    fbg="#a11907"
    cbg="#4a38f1cb"
    }else if(id==="panda"){
    bbg ="#1d1d1d"
    fbg="#4e4e4e"
    cbg="#4b4b4ad7"
  }else if(id==="holy"){
    bbg ="#133a20"
    fbg="#0ca747"
    cbg="#c9ac07d0"
  }
  else{
    bbg="#080857"
    fbg="#240da7"
    cbg="#3a332bcb"
  }
    
    console.log(bbg)
    this.setState({
      bColor: bbg,
      fColor:fbg,
      bgColor:cbg
    })
  }
  render() {
    const { classes } = this.props;
    

    const sideList = (
      <div className={classes.list} id = "list">
        <List id= "rest"> 
            <ListItem id = "theme">THEMES</ListItem>
            <ListItem button  onClick={this.handleClick} id='default' name="default">Default
            </ListItem>
            <ListItem button onClick={this.handleClick} id='panda' name="panda">Panda
            </ListItem>
            <ListItem button onClick={this.handleClick} id='arsenal' name="arsenal">Arsenal 
            </ListItem>
            <ListItem button onClick={this.handleClick} id='holy' name="hocro">Holy Cross
            </ListItem>
        </List>
        <ListItem id = "theme">NAV</ListItem>
        <ListItem><Link activeClass="active"  to="test1" spy={true} smooth={true} duration={500}>Top</Link></ListItem>
          <ListItem><Link activeClass="active"  to="test2" spy={true} smooth={true} duration={500}>Skills</Link></ListItem>
          <ListItem><Link activeClass="active"  to="test3" spy={true} smooth={true} duration={500}>Projects</Link></ListItem>
        <ListItem id = "theme">SOCIAL</ListItem>
        <div className="row">
          <div className="col s1 m2 offset-s2 offset-m3 ">   
             <a id="side" href="https://www.linkedin.com/in/christian-henry-27a7a7167/" title=" LinkedIn!"><i className="fab fa-linkedin"></i></a>
         </div> 
         <div className="col s1 m2 offset-s2  offset-m1">
            <a id="side" href="https://github.com/ChristianH85" title="GitHub!"><i className="fab fa-github"></i></a>
         </div>
        </div>

        {/* <div id = "list"> */}
        <img id="bagomon" alt="https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" src={tobago}></img>
        {/* </div> */}
       
      </div>
    );
    
    return (
    
      <div className="first">
      <StyledBar position="fixed" id ="bar" style= {{background:`linear-gradient(45deg,${this.state.bColor} 30%, ${this.state.fColor} 90%)`}}>
        <Typography id='logo' variant="title" color="inherit" >
            Christian Henry
        </Typography>
      
      

        <IconButton style ={{padding:0, width:400, }} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
          <MenuIcon id="menu" />
        </IconButton>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
            {sideList}
        </SwipeableDrawer>
   
      </StyledBar>
         <button id= "bt"><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Skills</Link></button>
         <div style={{backgroundColor:`${this.state.bgColor}`}}>
          <div className='row' >
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
            <div>
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
          </div>  
          <Footer {...this.state}/>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
