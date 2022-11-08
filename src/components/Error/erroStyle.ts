import styled from "styled-components";


export const ErrorDiv = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.colors.background};
    position: absolute;
    z-index: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.h2`
    font-size: 2rem;
    color: var(--Dark6);
    font-weight: 700;
    height: 8vh;
`
export const Btn = styled.button`
    height: 39px;
    width: 77px;
    border-radius: 9999px;
    background-color: var(--PrimaryBlue);
    border: none;
    outline: none;
    font-size: 0.938rem;
    color: var(--White);
    font-weight: 700;
    margin-right: 10px;
`