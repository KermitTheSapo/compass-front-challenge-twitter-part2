import styled from "styled-components";

export const Main = styled.main`
    min-height: 80vh;
    background-color: ${props => props.theme.colors.background};
    width: 45vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 50px;
`
export const main__header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 42.5%;
    height: 53px;
    position: fixed;
    top: 0;
    background-color: ${props => props.theme.colors.background};
    border-right: solid 1px ${props => props.theme.colors.border};
    border-top: solid 1px ${props => props.theme.colors.border};
    border-left: solid 1px ${props => props.theme.colors.border};
`
export const main__header__title = styled.h2`
    font-weight: 700;
    font-size: 1.188rem;
    color: ${props => props.theme.colors.text};
    margin-left: 15px;
`
export const main__header__img = styled.img`
    margin-right: 15px;
`

export const main__borderHeader = styled.div`
    position: fixed;
    width: 42%;
    height: 1px;
    background-color: ${props => props.theme.colors.border};
`

export const Post = styled.section`
    display: flex;
    width: 95%;
    flex-direction: column-reverse;
    justify-content: flex-end;
`
export const post__form = styled.form`

`
export const post__input = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    top: 53px;
    background-color: ${props => props.theme.colors.background};
    width: 42.6%;
    margin-bottom: 5px;
    border-left: solid 1px ${props => props.theme.colors.border};
    border-right: solid 1px ${props => props.theme.colors.border};
`

export const input__img = styled.img`
    border-radius: 50%;
    margin-right: 13px;
    margin-left: 15px;
`

export const input__text = styled.input`
    border: none;
    outline: none;
    font-weight: 500;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    &::placeholder{
        color: ${props => props.theme.colors.paragraph}; 
    }
`

export const post__emoji = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 101px;
    width: 42.6%;
    background-color: ${props => props.theme.colors.background};
    margin-bottom: 20px;
    border-left: solid 1px ${props => props.theme.colors.border};
    border-right: solid 1px ${props => props.theme.colors.border};
`
export const emoji__div = styled.div`
width: 40%;
    display: flex;
    justify-content: space-evenly;
    margin-left: 75px;
`
export const label = styled.label`
background-color: transparent;
    cursor: pointer;
`
export const LabelImg = styled.img`

`
export const upload__img = styled.input`
    text-decoration: none;
    height: 20px;
    width: 20px;
    background-color: transparent;
    color: red;
    display: none;
`
export const icons = styled.img`

`
export const post__submit = styled.button`
    height: 39px;
    width: 77px;
    border-radius: 9999px;
    background-color: var(--PrimaryBlue);
    opacity: 0.5;
    border: none;
    outline: none;
    font-size: 0.938rem;
    color: var(--White);
    font-weight: 700;
    margin-right: 10px;
`

export const main__borderScroll = styled.div`
    width: 40%;
    height: 1px;
    background-color: ${props => props.theme.colors.border};
    position: fixed;
    top: 140px;
`

export const Margin = styled.div`
    height:5vh;
`

export const main__margin = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
    margin-top: 7vh;
`
export const post__tweet = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 378px;
    border: solid 1px ${props => props.theme.colors.border};
`
export const tweet__figure__img = styled.img`
    border-radius: 50%;
`
export const tweet__figure = styled.figure`
    height: 94%;
    margin-right: 11px;
`
export const tweet__main = styled.div`
    display: flex;
    flex-direction: column;
`
export const tweet__main__user = styled.div`
    display: flex;
    align-items: center;
    height: 22px;
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
    color: ${props => props.theme.colors.paragraph};
    margin-bottom: 10px;
    word-break: break-word;
    max-width: 80%;
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