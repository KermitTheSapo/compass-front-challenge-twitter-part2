import styled from "styled-components";

export const Div = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.colors.background};
`