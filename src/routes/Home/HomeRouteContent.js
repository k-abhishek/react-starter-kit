import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'; 
import classNames from 'classnames';  

const styles = theme => ({
    body: {
        margin: '0 auto',
        padding: '4',
        textAlign: 'center'
    },
    fonts: {
        fontFamily: 'Amatic SC, cursive',
        fontSize: '2rem'
    },
    header: {
        fontSize: '5rem',
    }
});
class HomeRouteContent extends Component {
    state= {}
    componentDidMount(){
       
    }

    render(){
        const { classes } = this.props
        return(
            <div className={classes.body}>
                <h1 className={classNames(classes.header, classes.fonts)}><b>Welcome to React Starter Kit!!</b></h1>
                <p className={classes.fonts}>development path: /src/routes/Home/HomeRoutesContents.js</p>
            </div>
        );
    }
}

export default withStyles(styles)(HomeRouteContent)