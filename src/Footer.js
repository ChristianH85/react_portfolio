import React, {Component} from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Footer extends Component{
    render(){
        return(
            <div>
                 <footer className="footer " style={{background:`linear-gradient(45deg,${this.props.bColor} 30%, ${this.props.fColor} 90%)`}}>
            <div >
             
                        <div className="row">

                        <div className="col s1 offset-l4 l1 offset-l5">
                        <a className="foot" href="https://www.linkedin.com/in/christian-henry-27a7a7167/" title=" LinkedIn!"><i class="fab fa-linkedin"></i></a>
                        </div>
                        <div className="col s1 offset-l1  l4 offset-l1">
                        <a className="foot" href="https://github.com/ChristianH85" title="GitHub!"><i className="fab fa-github"></i></a>
                        </div>

                        </div>
                    </div>
            

            <div className="footer-copyright blue darken-2">
                <div className="container">
                    <div className="center-align">
                        Copyright © 2018 by<a className="lime-text text-lighten-4" href="https://www.linkedin.com/in/christian-henry-27a7a7167/" >Christian</a>
                    </div>
                </div>
            </div>
        </footer>
            </div>
        )
    }
}
export default Footer