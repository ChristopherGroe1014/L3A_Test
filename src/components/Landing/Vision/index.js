import * as React from 'react' ;

import {
    VisionDiv,
    DescDiv,
    TitleDiv,
    LinkDiv
} from '../Styles/Vision.styles';

const Vision = () => {
    return (
        <VisionDiv>
            <TitleDiv>
                Our vision is to democratize data, address information asymmetry at a scale. 
            </TitleDiv>
            <DescDiv>
                Data & information is the most valuable commodity in the world. Without quality, reliable data all webpages, mobile apps, and the entire internet will stop working.
            </DescDiv>
            <DescDiv>
                We believe, access to reliable unedited information is a fundamental right, an aspect of a free and democratic society, and the only way to scale crypto & web3. The Core Principles of L3Atom Protocol, by design, has no single authority that can alter its data, how the information is distributed or controlled, or who can see what and when. The infrastructure and entire technology stack is open-source and governed by an open-source community.
            </DescDiv>
            <LinkDiv>
                Read L3A Protocal vision
            </LinkDiv>
        </VisionDiv>
    )
}

export default Vision ;