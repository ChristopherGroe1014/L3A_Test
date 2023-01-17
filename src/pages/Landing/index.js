import * as React from 'react' ;

import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux' ;

import Footer from '../../components/Layouts/Footer';


import {
    Box,
    Grid,
} from '@mui/material' ;

import { makeStyles } from '@mui/styles' ;

const useStyles = makeStyles((theme) => ({
    root : {
        color : 'white',
    },
})) ;

const Landing = (props) => {

    const classes = useStyles();
    const navigate = useNavigate() ;
    
    return (
        <Box className={classes.root}>
            <Box className={classes.background}/>
            <Footer />
        </Box>
    )
}


const mapStateToProps = state => ({
})
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Landing) ;

