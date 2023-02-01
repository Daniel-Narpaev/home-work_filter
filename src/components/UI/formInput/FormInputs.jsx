import styled from "styled-components"

const FormInput = (props) => {
    return (
    <InputBox>
        <Label htmlFor={props.id}>{props.labelName}</Label>
        <Input
        placeholder={props.placeholder || ""} 
        id={props.id} 
        type={props.inputType}
        onChange={props.onChange}
        value={props.value}/>
    </InputBox>
   
    )
}

export default FormInput

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #AD9BE9;
    height: 66px;
    border-radius: 15px;
`
const Input = styled.input`
    background-color: white;
    width: 300px;
    height: 39px;
    background: #FFFFFF;
    border-radius: 8px;
`
const Label = styled.label`
    background-color: #AD9BE9;
`