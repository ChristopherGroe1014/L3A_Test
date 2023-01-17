import * as React from 'react';

import htmlStyled from 'styled-components' ;

const MenuItem = ({children, label}) => {
    const [isHidden, setIsHidden] = React.useState(true);

    return (
        <MenuItemDiv onMouseOver={() => setIsHidden(false)} onMouseOut={() => setIsHidden(true)}>
            {label}
            {
                <MenuPad
                    isHidden={isHidden} 
                    onMouseOver = {() => setIsHidden(false)}  
                    onMouseOut={() => setIsHidden(true)}
                >
                    {children}
                </MenuPad>
            }
        </MenuItemDiv>
    )
}

export default MenuItem ;

const MenuItemDiv = htmlStyled.div`
    z-index : 1;
    position : relative;
    cursor : pointer;

    &:hover {
        color : red;
    }
`

const MenuPad = htmlStyled.div`
    border: 1px solid gray;
    border-radius : 5px;

    padding : 10px;

    position : absolute;
    background-color : white;

    z-index : 1000;

    display : ${props => props.isHidden ? "none" : "block"}
`