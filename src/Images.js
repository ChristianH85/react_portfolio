import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import projects from './Projects.js';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
//   card: {
//     maxWidth: 400,
//   },
  media: {
    height: 80,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
 
});

class ProjectCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
        
        <div className='row'>
        {projects.map(pro=>{return(
        <div className= 'col s12 m4 '>

      <Card className={classes.card} key={pro.title}>
        <CardHeader
          
          title={pro.title}
          
        />
        <CardMedia
          className={classes.media}
          image={pro.img}
          title={pro.title}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Live" href={pro.live} >
            <i  className="material-icons">
              play_arrow
            </i>
          </IconButton>
          <IconButton aria-label="Code" href= {pro.git}>
            <i className="material-icons">
            code
            </i>
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{pro.title}</Typography>
            <Typography paragraph>
              {pro.about}
            </Typography>
            
          </CardContent>
        </Collapse>
      </Card>
      </div>)
    })}
      </div>
    );
  }
}

ProjectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectCard);
