import styled from 'styled-components'

const EmptyStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    p {
        color: #A0BCC2;
        margin: 0;
        font-size: 18px;
    }
`

const EmptyState = () => {
    return (<EmptyStateContainer>
        <p>
            No momento não há médicos listados.
        </p>
    </EmptyStateContainer>)
}

export default EmptyState