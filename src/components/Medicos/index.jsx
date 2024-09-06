/* eslint-disable react/prop-types */
import styled from "styled-components"

const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const StyledLi = styled.li`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    background-color: #D1E8E4;
    padding: 24px;
    border-radius: 16px;
    color: #A0BCC2;
    font-size: 24px;
    p {
        margin: 0;
    }
    strong {
        font-weight: 600;
        color: #4A6572;
        flex-grow: 1;
    }
`

const Tag = styled.p`
    margin: 0;
    padding: 8px;
    background-color: #2BDEFD;
    font-weight: 400;
    font-size: 16px;
    color: #4A6572;
    border-radius: 4px;
`

const Medicos = ({ items }) => {
    return (<StyledUl>
        {items.map(item => (<StyledLi key={item.crm}>
            <p>{item.id}</p> 
            <p>|</p>  
            <strong>
                {item.nome}
            </strong>
            <p>{item.crm}</p> 
            <Tag>{item.especialidade}</Tag>
        </StyledLi>))}
    </StyledUl>)
}

export default Medicos