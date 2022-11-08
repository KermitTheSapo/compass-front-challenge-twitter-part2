import { Link } from "react-router-dom"
import styled from "styled-components";

export const SectionLogin = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LoginDiv = styled.form`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-evenly;
    height: 476px;
`
export const Icon = styled.img`
    height: 41px;
    width: 50px;
`
export const Title = styled.h1`
    font-weight: 900;
    font-size: 2.625rem;
    color: ${props => props.theme.colors.text};
    font-family: 'Roboto', sans-serif;
`
export const InputLogin = styled.input`
    width: 450px;
    height: 70px;
    border-radius: 6px;
    background-color: transparent;
    border: 1px solid #00000033;
    font-size: 1.125rem;
    padding-left: 20px;
    font-family: 'Roboto', sans-serif;
`

export const BtnLogin = styled.button`
    width: 450px;
    height: 60px;
    border-radius: 76px;
    background-color: var(--PrimaryBlue);
    font-weight: 700;
    font-size: 1.125rem;
    color: var(--White);
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
`
export const Actions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 450px;
`
export const LinkActions = styled(Link)`
    text-decoration: none;
`
export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 1.125rem;
    color: var(--PrimaryBlue);
    font-family: 'Roboto', sans-serif;
`

export const ParagraphError = styled.p`
    font-weight: 400;
    font-size: 1.125rem;
    color: red;
    font-family: 'Roboto', sans-serif;
`