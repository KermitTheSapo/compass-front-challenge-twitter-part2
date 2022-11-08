import styled from "styled-components";


export const happening__news = styled.div`
    display: flex;
    height: 120px;
    padding-left: 15px;
`

export const news__div = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
`

export const news__content = styled.div`` 

export const news__content__theme = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: ${props => props.theme.colors.paragraph};
    
    margin-bottom: 6px;
` 

export const news__content__title = styled.h3`
    font-weight: 700;
    font-size: 0.938rem;
    color: ${props => props.theme.colors.text};
    line-height: 17.9px;
` 
export const news__content__div=  styled.div`
    display: flex;
` 
export const content__trending = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: ${props => props.theme.colors.paragraph};
    padding-right: 4px;
` 

export const content__hashtag = styled.p`
    font-weight: 500;
    font-size: 0.875rem;
    color: var(--PrimaryBlue);
` 

export const news__figure = styled.figure`
     display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 90%;
    width: 100%;
    padding-top: 10px;
` 

export const figure__img = styled.img`
    border-radius: 10px;
` 

