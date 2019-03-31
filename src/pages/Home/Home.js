import React, {Component} from 'react'
import Avatar from '@material-ui/core/Avatar';
import suit2 from '../../suit2.jpg'

class Home extends Component{
    render(){
        return(
            <div className="imageHome">
              <div className ="seperator"></div>
                <div className="row" id= "content">
                    <Avatar id ="avatar"alt="https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg" src={suit2}/>
                        <div className="col s12 offset-l2 m8 offset-l2">
                            <section >
                                <div >
                                <div className="card-title"> 
                                About Me
                                    </div>
                                    <div className="card-content">
                                    
                                            <p>I am a web developer with a thirst for knowledge and a knack for problem solving. I recently completed
                                            the Full Stack Web Developer Bootcamp at the University of Texas, Austin. Please feel
                                            free to look around and contact me if you have any questions or opportunities. </p>
                                            <p id="thanks">Thank you for Visiting. Christian K. Henry</p>
                                    </div>  
                                </div>    
                            </section>
                        </div>
                </div>              
            </div>
        )
    }
}
export default Home