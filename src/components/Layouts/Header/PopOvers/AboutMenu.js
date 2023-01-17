import * as React from 'react' ;

import { 
    Popover
} from '@mui/material';

import htmlStyled from 'styled-components';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    popover : {
        zIndex : "1500 !important",
        left : '330px !important',
        width : '500px',
        padding : '20px !important'
    }
}))

const ItemList = htmlStyled.div`
    display : flex;
    flex-direction : column;

    p {
        margin :0px;
    }
`
const Item = htmlStyled.div`
    padding-top : 20px;
`
const ItemLabel = htmlStyled.p`
    font-size : 15px;
    font-weight : bold;
`

const ItemDesc = htmlStyled.p`
    font-size : 10px;
    color : gray;
`


const AboutMenu = (props) => {
    const {
        open , anchorEl , handlePopOver
    } = props ;

    const classes = useStyles() ;

    const itemsList = [
        {
            label : "Vision",
            desc : "End Users can subscribe to live data feeds for free, i.e., Coinbase BTC/USD"
        },
        {
            label : "Research",
            desc : "End Users can subscribe to live data feeds for free, i.e., Coinbase BTC/USD"
        },
        {
            label : "Docs",
            desc : "End Users can subscribe to live data feeds for free, i.e., Coinbase BTC/USD"
        },
        {
            label : "Updates",
            desc : "End Users can subscribe to live data feeds for free, i.e., Coinbase BTC/USD"
        },
        {
            label : "Career",
            desc : "End Users can subscribe to live data feeds for free, i.e., Coinbase BTC/USD"
        },
    ]

    return (
        <Popover
            id="about-popover"
            anchorEl={anchorEl}
            open={open}

            onClose={handlePopOver}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            classes={{
                paper : classes.popover
            }}
        >
            <ItemList>
                {
                    itemsList.map((item, index) => (
                        <Item key={index}>
                            <ItemLabel>
                                {item.label}
                            </ItemLabel>
                            <ItemDesc>
                                {item.desc}
                            </ItemDesc>
                        </Item>
                    ))
                }
            </ItemList>
        </Popover>
    )
}

export default AboutMenu ;