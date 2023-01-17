import * as React from 'react';

import htmlStyled from 'styled-components' ;

const MenuItem = ({children, label}) => {
    const [isHidden, setIsHidden] = React.useState(true);

    return (
        <MenuItemDiv onMouseOver={() => setIsHidden(false)} onMouseOut={() => setIsHidden(true)}>
            {label}
            {
                <MenuPadArea  
                    isHidden={isHidden} 
                    onMouseOver = {() => setIsHidden(false)}  
                    onMouseOut={() => setIsHidden(true)}
                >
                    <MenuPad
                       
                    >
                        {children}
                    </MenuPad>
                </MenuPadArea>
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

const MenuPadArea = htmlStyled.div`
    display : ${props => props.isHidden ? "none" : "block"} ;
    position : absolute;

    z-index : 1000;
`

const MenuPad = htmlStyled.div`
    margin-top : 20px;

    box-shadow : 1px 1px 9px 0px grey;

    padding : 10px;

    background-color : white;


`