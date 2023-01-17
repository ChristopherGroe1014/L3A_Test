import htmlStyled from 'styled-components' ;

export const CloseDiv = htmlStyled.div`
    display : flex;
    justify-content : flex-end;
`

export const MenuList = htmlStyled.div`
    display :flex;

    flex-direction : column;

    align-items : flex-start;
    padding-left : 10px;

    p {
        margin : 0px;
    }
`

export const MenuItem = htmlStyled.p`
    font-size : 24px;
    color : black;

    padding-bottom : 10px;
    border-bottom : 1px solid gray;

    cursor : pointer;
`