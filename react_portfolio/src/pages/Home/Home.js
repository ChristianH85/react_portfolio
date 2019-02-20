import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import suit2 from '../../suit2.jpg'

import Footer from '../../Footer';
import {SideNav, SideNavItem,Button} from 'react-materialize'
import Nav from '../../Nav';

class Home extends Component{
    render(){
        return(
            <div className="imageHome">
           
           <div className ="seperator"></div>
                <div className="row" id= "content">
                {/* <div className="col s12 offset-l2 m6 offset-l4"> */}
                <Avatar id ="avatar"alt="https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" src={suit2}/>
                {/* </div> */}
                    <div className="col s12 offset-l2 m8 offset-l2">
                        <div className="card">
                            <div className="back">
                               <div className="card-image" >
                               {/* <img src={require('./suit2.jpg')}alt="./suit.jpg" /> */}
                                <span className="card-title">About Me</span>
                                </div>
                                <div className="card-content">
                                
                                        <p>I am a web developer with a thirst for knowledge and a knack for problem solving. I recently completed
                                         the Full Stack Web Developer Bootcamp at the University of Texas, Austin. Please feel
                                        free to look around and contact me if you have any questions or opportunities. </p>
                                        <p id="thanks">Thank you for Visiting. Christian K. Henry</p>
                                </div>
                                
                            </div>    
                        </div>
                    </div>
                </div>    
                        
            </div>
        )
    }
}
export default Home