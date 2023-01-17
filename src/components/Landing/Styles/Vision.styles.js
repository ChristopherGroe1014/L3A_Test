import htmlStyled from 'styled-components' ;

export const VisionDiv = htmlStyled.div`
    padding-top : 150px;

    display : flex;
    justify-content : center;
    align-items :center;
    flex-direction : column;

    p {
        text-align :center;
        margin : 0px;
    }
`

export const TitleDiv = htmlStyled.p`
    font-size : 32px;
    font-weight : bold;
    max-width : 960px;
`

export const DescDiv = htmlStyled.p`
    max-width : 960px;
    
    font-size : 20px;
    color : gray;

    padding-top : 20px;
    padding-bottom : 20px;
`

export const LinkDiv = htmlStyled.p`
    text-decoration : underline;
    font-size : 15px;
`