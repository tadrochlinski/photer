import styled from "styled-components";

const Button = styled.button`
    padding: 0px 7px;
    height: 30px;
    border: 0;
    border-radius: 20px;    
    background: ${props => props.primary ? "#0080ff" : "#f2f2f2"};
    color: ${props => props.primary ? "#fff" : "black"};
    transition: 250ms background;
        
    &:hover, &:focus{
        outline: 0;
        cursor: pointer;
        background: ${props => props.primary ? "#0070ee" : "#e1e1e1"};;
        /* #0070ee */
    }
`

export default Button;