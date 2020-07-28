import styled from 'styled-components';

export const ThemeStyles = styled.div`
h1 {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
}

`;