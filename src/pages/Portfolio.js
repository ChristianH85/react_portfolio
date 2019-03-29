import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import suit2 from '../suit2.jpg'

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: "#495057",
    },
    gridList: {
      width: '50%',
      height: 400,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    
  });
  
  /**
   * The example data is structured as follows:
   *
   * import image from 'path/to/image.jpg';
   * [etc...]
   *
   * const tileData = [
   *   {
   *     img: image,
   *     title: 'Image',
   *     author: 'author',
   *   },
   *   {
   *     [etc...]
   *   },
   * ];
   */
  function TitlebarGridList(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} cellWidth={200} className={classes.gridList}>
          <GridListTile key="Subheader" cols={5} style={{ height: 'auto',textColor: 'blue'}}>
            <ListSubheader component="div" className="gridHead"style={{background: 'white',color: 'rgb(50, 50, 223)', fontSize: '2em', fontWeight: 700}}>Projects</ListSubheader>
          </GridListTile>
          
            <GridListTile className="tile">
              <img src={suit2} alt={suit2} />
              <GridListTileBar
                title="[Coding Connect]"
                subtitle={<span>Project 3</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
            <GridListTile >
              <img src={suit2} alt={suit2} />
              <GridListTileBar
                title="[Coding Connect]"
                subtitle={<span>Project 3</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
            <GridListTile >
              <img src={suit2} alt={suit2} />
              <GridListTileBar
                title="[Coding Connect]"
                subtitle={<span>Project 3</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
            <GridListTile className="tile">
              <img src={suit2} alt={suit2} />
              <GridListTileBar
                title="[Coding Connect]"
                subtitle={<span>Project 3</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
            <GridListTile >
              <img src={suit2} alt={suit2} />
              <GridListTileBar
                title="[Coding Connect]"
                subtitle={<span>Project 3</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
            <GridListTile >
              <img src={suit2} alt={suit2} />
              <GridListTileBar
                title="[Coding Connect]"
                subtitle={<span>Project 3</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
        </GridList>
      </div>
    );
  }
  
  TitlebarGridList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(TitlebarGridList);
// class Portfolio extends Component{

//     render(){
//         return(
//             <div>Hello <p>I am a web developer with a thirst for knowledge and a knack for problem solving. I recently completed
//             the Full Stack Web Developer boot camp at the University of Texas, Austin. Please feel
//            free to look around and contact me if you have any questions or opportunities. Thank you for Visiting. Christian K. Henry</p></div>
//         )
//     }
// }
// export default Portfolio