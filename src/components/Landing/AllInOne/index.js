import * as React from 'react' ;

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import ApiImg from '../../../assets/Landing/api.png';
import PowerImg from '../../../assets/Landing/power.png';
import EyeImg from '../../../assets/Landing/eye.png';
import TransparencyImg from '../../../assets/Landing/transparency.webp';
import SourceImg from '../../../assets/Landing/source.webp';

import {
    Grid,
    useMediaQuery
} from '@mui/material';

import { 
    TitleDiv,
    AllInOneDiv,
    DescDiv,
    LinkDiv,
    ItemLabel,
    ItemDesc,
    Item,
    ItemImg,
    ItemList,
    ItemImgDiv
} from '../Styles/AllInOne.styles';


const AllInOne = () => {
    const itemList = [
        {
            label : "Unified API",
            desc : "Live & historical data",
            img : ApiImg
        },
        {
            label : "Power Query",
            desc : "Live & historical data",
            img : PowerImg
        },
        {
            label : "Opensource",
            desc : "Live & historical data",
        },
        {
            label : "Decentralization",
            desc : "Live & historical data"
        },
        {
            label : "Analytics",
            desc : "Live & historical date"
        },
        {
            label : "Transparency",
            desc : "Live & historical data",
        },
        {
            label : "Free data feeds",
            desc : "Live & historical data",
            img : EyeImg
        }
    ];

    return (
        <AllInOneDiv>
            <TitleDiv>All-in-one decentralized data infrastructure.</TitleDiv>
            <DescDiv>
                Our mission is to address the information asymmetry in crypto. L3 Atom stores billions of crypto and Web3 data points, transactions, and historical records so anyone can access them without censorship. 
            </DescDiv>
            <LinkDiv>
                Version 3 is Live! <ArrowForwardIcon />
            </LinkDiv>
            <ItemList>
                {
                    itemList.map((item, index) => (
                        <Item key={index}>
                            <ItemImgDiv imgSrc={item.img} />
                            <ItemLabel>
                                {
                                    item.label
                                }
                            </ItemLabel>
                            <ItemDesc>
                                {
                                    item.desc
                                }
                            </ItemDesc>
                        </Item>
                    ))
                }
            </ItemList>
        </AllInOneDiv>
    )
}

export default AllInOne ;