import styled from "styled-components";


export const post__tweet = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    min-height: 125px;
    border:  solid 1px ${props => props.theme.colors.border};
    width: 615px;
`
export const tweet__figure__img = styled.img`
    border-radius: 50%;
`
export const tweet__figure = styled.figure`
    height: 12vh;
    margin-right: 11px;
    margin-top: 10px;
    align-self: flex-start;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
export const tweet__main = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    min-width: 500px;
`
export const tweet__main__user = styled.div`
    display: flex;
    align-items: center;
    height: 22px;
    margin-top: 10px;
`
export const name__text = styled.h3`
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-size: 0.938rem;  
    margin-right: 4px;
    
`
export const name__nick = styled.h4`
    font-weight: 500;
    color: ${props => props.theme.colors.paragraph};
    font-size: 0.938rem;  
    margin-right: 4px;
`
export const name__dot = styled.h5`
    font-weight: 400;
    color: ${props => props.theme.colors.paragraph};
    font-size: 0.938rem;  
    margin-right: 4px;
`
export const name__time = styled.h5`
    font-weight: 500;
    color: ${props => props.theme.colors.paragraph};
    font-size: 0.938rem;  
    margin-right: 4px;
`
export const tweet__main__content = styled.p`
    font-weight: 500;
    font-size: 0.938rem;
    color: ${props => props.theme.colors.text};
    word-break: break-word;
    max-width: 80%;
    margin-bottom: 10px;
`
export const tweet__main__media = styled.div`
    margin-bottom: 16px;
`
export const main__media__img = styled.img`
    height: 247px;
    width: 509px;
    border-radius: 10px;
`
export const tweet__main__actions = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-bottom: 15px;

`
export const actions__div = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
`

export const actionsImg = styled.img`
    height: 16.07px;
    width: 15.19px;
`

export const tweet__main__show = styled.div`
    margin-bottom: 10px;
`
export const show__link = styled.a`
    text-decoration: none;
`
export const show__paragraph = styled.p`
    font-weight: 500;
    font-size:0.813rem;
    color: var(--PrimaryBlue);
`
export const main__borderScrolll = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.colors.border};
`

export const SpanNumber = styled.span`
    color: ${props => props.theme.colors.paragraph};
`