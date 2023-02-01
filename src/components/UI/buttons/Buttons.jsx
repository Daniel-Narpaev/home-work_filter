import styled from "styled-components"

const Button = (props) => {
    return (
        <BtnContainer onClick={props.onClick}>{props.title}</BtnContainer>
    )
}
export default Button

const BtnContainer = styled.button`
    background-color:#4A026B;
    color: white;
    margin: 7px;
    padding: 10px 30px;
    border-radius: 10px;
    height: 51px;
    border: none;
`