import { makeStyles } from "@mui/styles";

import htmlStyled from 'styled-components' ;

export const HeaderDiv = htmlStyled.div`
    display : flex;
    justify-content : space-between;
    align-items : center ;

    padding-top : 30px;

    background-color : #0000003b ;

    position : fixed ;
    width  :100%;
`

export const LogoImg = htmlStyled.img`
    padding-left : 100px;

    width : 30%;
`

export const NavList = htmlStyled.div`

`

export const LinkList = htmlStyled.div`
    display : flex;
    justify-content : flex-end;
    gap : 30px;

    a {
        text-decoration : none ;
        cursor : pointer;

        
    }
`

export const MenuList = htmlStyled.div`
    display : flex ;
    justify-content : flex-end;
    gap: 30px;

    position : relative ;

    a {
        color : white;
        font-family: "Playfair Display", Sans-serif;
        font-size: 18px;
        text-decoration : none ;

        &:after {
            transition: 0.3s;
            content: " ";
            display: block;
            width: 100%;
            bottom: -13px;
            border-bottom: 3px solid transparent;
        }
        &:hover {
            &:after {
                border-bottom: 3px solid #242e35;
            }
        }
    }
`