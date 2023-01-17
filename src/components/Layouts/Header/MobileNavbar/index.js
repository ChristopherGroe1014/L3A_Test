import * as React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;

import { makeStyles } from '@mui/styles';

import {
    Drawer, IconButton,
} from '@mui/material' ;

import { MenuList, MenuItem } from '../../Styles/MobileNavbar.styles';
import { CloseDiv } from '../../Styles/MobileNavbar.styles';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles((theme) => ({
    drawer: {
        zIndex : 10000,
        "& .MuiBackdrop-root": {
            display: "none"
        },
        "& a" : {
            textDecoration : "none",
            color : theme.palette.common.label + " !important",
            "& :hover" : {
                color : "white !important"
            }
        },
    },
    drawerPaper: {
        width : "100%",
        backgroundColor : theme.palette.common.lightBlack + " !important",
        color : theme.palette.common.label + " !important",
        '& ::-webkit-scrollbar': {
            display: 'none !important',
        },
    },
})) ;



const MobileNavbar = (props) => {
  
    const classes = useStyles() ;
    
    const {
        isDrawMobileNavbar, handleDrawMobileNavbar,
        menuList
    } = props ;

    React.useEffect(() => {
        console.log(menuList)
    }, [menuList]) ;

    return (
            <Drawer
                variant='persistent'
                anchor='right'
                open={isDrawMobileNavbar}
                className={classes.drawer}
                classes={{
                    paper : classes.drawerPaper
                }}
            >
                <CloseDiv>
                    <IconButton onClick={() => handleDrawMobileNavbar()}><CloseIcon/></IconButton>
                </CloseDiv>
                <MenuList>
                    {
                        menuList && menuList.map((item, index) => (
                            <MenuItem key={index}>
                                {item.label}
                            </MenuItem>
                        ))
                    }
                </MenuList>
            </Drawer> 
    )  
}

MobileNavbar.propTypes = {
  
}
const mapStateToProps = state => ({
    
})
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(MobileNavbar) ;