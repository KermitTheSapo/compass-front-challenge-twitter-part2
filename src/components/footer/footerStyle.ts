import styled from "styled-components";

export const footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: var(--PrimaryBlue);
    display: flex;
    align-self: center;
    justify-content: center;
    font-family: 'Nunito', sans-serif;
    height: 7vh;
`

export const footer__content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    margin-left: 50px;
    height: 100%;
`
export const footer__title = styled.h2`
    color: var(--White);
    font-size: 1.5rem;
    font-weight: 700;
`
export const footer__paragraph = styled.p`
    color: var(--White);
    font-size: 1rem;
`
export const footer__btn = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
`
export const footer__link = styled.a`
    border-radius: 3rem;
    height: 50%;

`
export const btn__login = styled.button`
    border-radius: 3rem;
    border: none;
    height: 100%;
    font-weight: 700;
    width: 70px;
    background-color: transparent;
    color: var(--White);
    border: solid 1px var(--White);

    &:hover{
        background-color: var(--White);
        color: var(--PrimaryBlue);
    }

`
export const btn__sign = styled.button`
    border-radius: 3rem;
    border: none;
    height: 100%;
    font-weight: 700;
    width: 70px;

    &:hover{
        color: var(--PrimaryBlue);
        border: solid 1px var(--Black);
    }

`