import { useState } from "react";
import styled from "styled-components";
import { ExpenseForm } from "../expense-form/ExpenseForm.jsx";
import Button from "../UI/buttons/Buttons.jsx";


export const NewExpense = ({onNewExpemseAdd}) => {
    const [showForm, setShowForm] = useState(false)

    const showExpenseForm = () => {
        setShowForm((prevState) => {
            return !prevState
        })
    }
    return (
        <>
            {showForm ?(
               <AddContainer>
                 <ExpenseForm onShowForm={showExpenseForm} onNewExpemseAdd={onNewExpemseAdd}/>
               </AddContainer>
            ):(<AddForm>
                 <Button title="Добавить новый расход" onClick={showExpenseForm}/>
               </AddForm>)
            }     
        </>
    )
}

const AddContainer = styled.div`
    background-color: #AD9BE9;
    width: 100%;
    height: 91px;
    margin-top: 50px;
    margin-bottom: 200px;
    border-radius: 15px;
`
const AddForm = styled.div`
    background-color: #AD9BE9;
    width: 100%;
    height: 91px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`