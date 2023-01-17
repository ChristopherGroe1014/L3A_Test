import * as React from 'react' ;

import RealTimeImg from '../../../assets/Landing/real_time.jpg';

import { 
    RealTimeDiv,
    Row,
    TitleDiv,
    RulerContainer,
    Ruler,
    Dot,
    Bar,
    ValueDiv,
    ItemList,
    Item,
    ItemDesc,
    ItemLabel
} from '../Styles/RealTime.styles';

const RealTime = () => {
    const itemList = [
        {
            label : '~80%',
            desc : 'Wider coverage'
        },
        {
            label : 'Fast L2/L3',
            desc : 'Most granular data'
        },
        {
            label : '345+ Million',
            desc : 'Messages per day'
        },
        {
            label : '130+ GB',
            desc : 'Data ingestion per day'
        },
        {
            label : '500+',
            desc : 'Data types'
        }
    ];

    return (
        <RealTimeDiv>
            <TitleDiv>
                Real time data ingestion, cleaning & processing 
            </TitleDiv>
            <Row>
                <img src={RealTimeImg} />
                <RulerContainer>
                    <ValueDiv>
                        <p>Real Time</p>
                        <p>0.25x</p>
                        <p>0.5x</p>
                    </ValueDiv>
                    <Ruler>
                        {
                            [...Array(9)].map((item, index) => (
                                <Dot key={index} />
                            ))
                        }
                        <Bar />
                    </Ruler>
                </RulerContainer>
            </Row>
            
            <ItemList>
                {
                    itemList.map((item, index) => (
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
        </RealTimeDiv>
    )
}

export default RealTime;