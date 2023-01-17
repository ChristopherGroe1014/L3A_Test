import { makeStyles, withStyles } from "@mui/styles";

import htmlStyled from 'styled-components' ;

import { Button } from "@mui/material";

export const HeaderDiv = htmlStyled.div`

`
export const GradientDiv = htmlStyled.div`
    background-image: radial-gradient(circle at 94.35384114583333% 89.61588541666666%, #F3A78F 0%, 20%, rgba(243,167,143,0) 40%), radial-gradient(circle at 6.503906249999999% 88.037109375%, rgba(0,87,225,0.99) 0%, 25%, rgba(0,87,225,0) 50%), radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #ED5829 0%, 42%, rgba(237,88,41,0) 70%), radial-gradient(circle at 93.6865234375% 11.42578125%, #8015E8 0%, 42%, rgba(128,21,232,0) 70%), radial-gradient(circle at 48.9013671875% 49.521484375%, #FFFFFF 0%, 100%, rgba(255,255,255,0) 100%);
    width  : 100%;
    height : 40px;

    display : flex;
    justify-content : center ;
    align-items : center;
    
    font-size : 15px;
    color : white;
`

export const MenuList = htmlStyled.div`
    display : flex;
    justify-content : space-between ;
    align-items : center ;
    gap : 60px;

    padding-right : 50px;
`

export const HeaderList = htmlStyled.div`
    display : flex;
    justify-content : space-between;
    align-items :center ;

    padding-left : 30px;
    padding-right : 30px;

    height : 70px;

    background-color : white;
`

export const LogoImg = htmlStyled.img`

`

export const MenuItem = htmlStyled.p`
    margin : 0px;
    cursor : pointer ;

    &:hover { 
        color : red;
    }
`

export const BuildingButton = withStyles({
    root : {
        backgroundColor : 'transparent !important',
        border : '1px solid blue !important',
        color : 'blue !important',
        textTransform : 'capitalize !important',
        borderRadius : '0px !important',
        paddingLeft : '20px !important',
        paddingRight : '20px !important',
        paddingTop : '5px !important',
        paddingBottom : '5px !important',
    }
})(Button);