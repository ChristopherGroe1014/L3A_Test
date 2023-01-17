import * as React from 'react' ;

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;

import Routing from './Routes';

import {
    Box
} from '@mui/material' ;

import { makeStyles } from '@mui/styles';
import Header from './Layouts/Header';

const useStyles = makeStyles((theme) => ({
    root : {
    }
}))

const Main = (props) => {
    const classes = useStyles() ;

    return (
        <Box className={classes.root}>
            <Header />
            <Routing />
        </Box>
    )
}

Main.propTypes = {
    
}
const mapStateToProps = state => ({
    
}) ;
const mapDispatchToProps = {
   
} ;
export default connect(mapStateToProps, mapDispatchToProps)(Main) ;