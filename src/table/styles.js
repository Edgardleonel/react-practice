import styled from 'styled-components';

export const TableStyle = styled.div`
tr {
    background: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
}

`;