import htmlStyled from 'styled-components' ;

export const RealTimeDiv = htmlStyled.div`
    padding-top : 70px;
    padding-bottom : 50px;
    
    width : 100%;

    display : flex;
    flex-direction : column ;
    align-items : center;

    p {
        margin : 0px;
        text-align :center;
    }
`

export const TitleDiv = htmlStyled.p`
    max-width : 400px;
    
    font-size : 30px;
    font-weight : 800;
`

export const Row = htmlStyled.div`
    margin-top : 30px;
    display : flex;

    position : relative;
`

export const RulerContainer = htmlStyled.div`
    position : absolute ;

    top : 200px;
    right : -250px;

    margin-left : 30px;

    display : flex;
    align-items :center;
    flex-direction : column;

    height : fit-content;

    transform : rotate(90deg);
`

export const Ruler = htmlStyled.div`

    border-bottom : 2px solid grey;
    display : flex;
    padding-bottom : 5px;

    justify-content : space-between;

    position : relative;
`
export const ValueDiv = htmlStyled.div`
    padding-bottom : 40px;

    display : flex;
    width : 100%;
    justify-content : space-between;

    p {
        font-size : 10px;
        transform : rotate(-90deg);
    }
`

export const Dot = htmlStyled.div`
    margin-left : 15px;
    margin-right : 15px;

    width : 5px;
    height : 5px;
    border-radius : 50%;
    background-color : grey;
`

export const Bar = htmlStyled.div`
    width : 15px;
    height : 30px;

    background-color : grey;
    border-radius : 3px;

    position : absolute;

    left : 15px;
    top : -5px;
`

export const ItemList = htmlStyled.div`
    padding-top : 50px;

    display : flex;
    width : 100%;
    justify-content : center;
`

export const Item = htmlStyled.div`
    padding-right : 50px;
    padding-left : 50px;

    border-right : 1px solid grey;

    &:last-child {
        border : none !important;
    }

    p {
        margin : 0px;
    }
`

export const ItemLabel = htmlStyled.p`
    font-size : 24px;
    font-weight : 800;
`

export const ItemDesc = htmlStyled.p`
    padding-top : 20px;
    font-size : 15px;
    color : grey;
`