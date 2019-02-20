import React, {Component} from 'react'


class Footer extends Component{
    render(){
        return(
            <div>
                 <footer className="footer  light-blue darken-2">
            <div >
                <div className="row">
                    <div className="col s6 offset-s3 l4 offset-l4">
                        <h3 className="white-text">Links</h3>
                        
                        <div className="row">
                        <ul >
                        
                        <div className="col s6 offset-s2 l4 offset-l2">
                        <li><a className="white-text text-lighten-3" href="https://www.linkedin.com/in/christian-henry-27a7a7167/" target="_blank" title=" LinkedIn!"><i class="fab fa-linkedin"></i></a></li>
                        <li><a className="white-text text-lighten-3" href="https://github.com/ChristianH85" target="_blank" title="GitHub!"><i className="fab fa-github"></i></a></li>
                        </div>
                        <div>
                            <li><a className="white-text text-lighten-3" href="/home">Home</a></li>
                            <li><a className="white-text text-lighten-3" href="/portfolio">Portfolio</a></li>
                            
                        </div>
                             
                        </ul>
                        </div>
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