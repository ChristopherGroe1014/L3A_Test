import * as React from 'react';

import htmlStyled from 'styled-components' ;

const MenuItem = ({children, label}) => {
    return (
        <MenuItem>
            {label}
        </MenuItem>
    )
}

export default MenuItem ;

const ItemDiv = htmlStyled.div`
    border : 1px solid red;
    position : relative;
`