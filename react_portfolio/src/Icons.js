import React,{Component} from 'react'
import { Card } from '@material-ui/core';


class Icons extends Component{

    render(){
        return(
<section>
            <section className="iconCard">
            <div className='row'>
            <div className="col s4 m2 offset-l2">
              <i id= "icon" className="fab fa-github"></i>
              </div>
              <div className="col s4 m2 offset-l2">
              <i id= "icon" className="fab fa-css3-alt"></i>
              </div>
              <div className="col s4 m2 offset-l2">
              <i id= "icon" className="fab fa-node" ></i>
              </div>
              <div className="col s4 m2 offset-l2">
              <i id= "icon" className="fab fa-react"></i>
              </div>
              <div className="col s4 m2 offset-l2">
              <i id= "icon" className="fab fa-html5"></i>
              </div>
              <div className="col s4 m2 offset-l2">
              <i id= "icon"class="fab fa-js-square"></i>
              </div>
              </div>
              </section>
          </section>
        )}
}
export default Icons