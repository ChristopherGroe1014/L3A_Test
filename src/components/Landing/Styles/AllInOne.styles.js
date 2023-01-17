import htmlStyled from 'styled-components' ;

export const AllInOneDiv = htmlStyled.div`
    padding-top : 40px;
    
    width : 100%;

    display : flex;
    flex-direction : column ;
    justify-content : center;
    align-items : center;

    @keyframes displayIn {
        0% {
            opacity : 0;
        }
        50% {
            opacity : 0.5;
        }
        100% {
            opacity : 1;
        }
    }

    animation: displayIn 2s ease forwards;
`
export const TitleDiv = htmlStyled.p`
    max-width : 1000px;
    font-size : 100px;
    font-weight : 800;

    color : black;
    text-align : center;

    @media screen and (max-width: 950px) {
        font-size : 80px;
        max-width : 800px;
    }

    @media screen and (max-width: 780px) {
        font-size : 60px;
        max-width : 650px;
    }

    @media screen and (max-width: 590px) {
        font-size : 40px;
        max-width : 500px;
    }

    @media screen and (max-width: 590px) {
        font-size : 35px;
        max-width : 450px;
    }
`

export const DescDiv = htmlStyled.p`
    max-width : 1000px;
    font-size : 24px;
    color : black;
    text-align : center;

    padding-left : 20px;
    padding-right : 20px;

    @media screen and (max-width: 860px) {
        font-size : 20px;
        max-width : 700px;
    }

    @media screen and (max-width: 750px) {
        font-size : 18px;
        max-width : 600px;
    }

    @media screen and (max-width: 500px) {
        font-size : 15px;
        max-width : 500px;
    }
`

export const LinkDiv = htmlStyled.div`
    padding-top : 30px;

    text-decoration : none !imortant;
    color : green;

    display : flex;
    align-items : center;
    justify-content: center;

    cursor : pointer;
`

export const ItemList = htmlStyled.div` 

    @keyframes displayIn {
        0% {
            opacity : 0;
        }
        50% {
            opacity : 0.5;
        }
        100% {
            opacity : 1;
        }
    }

    animation: displayIn 2s ease forwards;

    margin-top : 50px;
    padding-top : 10px;
    padding-bottom : 30px;
    padding-left : 5%;
    padding-right : 5%;

    width : 100%;
    background-color: lightgray;

    display :flex;
    justify-content : space-around;
    align-items : flex-end;
    flex-wrap : wrap;
`

export const Item = htmlStyled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;

    padding-left : 10px;
    padding-right : 10px;

    margin-top : 30px;
`
export const ItemLabel = htmlStyled.p`
    font-size : 15px;
    font-weight : bold;
    text-align : center;
`

export const ItemDesc = htmlStyled.p`
    font-size : 10px;

    color : gray;
    text-align : center;
`

export const ItemImg = htmlStyled.img`
    width : 30px;
    margin-bottom : 20px;
`

export const ItemImgDiv = htmlStyled.div`
    width : 50px;
    height : 50px;

    mask-size: cover;

    background-color : blue;
    mask : url('${props => props.imgSrc}') no-repeat;
`