import * as React from 'react' ;

import htmlStyled from 'styled-components';

import { makeStyles } from '@mui/styles';

const ItemList = htmlStyled.div`
    display : flex;
    flex-direction : column;
    width : 400px;
    
    p {
        margin :0px;
    }
`
const Item = htmlStyled.div`
    padding-bottom : 20px;
`
const ItemLabel = htmlStyled.p`
    color : black;
    font-size : 15px;
    font-weight : bold;
`

const ItemDesc = htmlStyled.p`
    font-size : 10px;
    color : gray;
`

const About = (props) => {
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
       
    )
}

export default About ;