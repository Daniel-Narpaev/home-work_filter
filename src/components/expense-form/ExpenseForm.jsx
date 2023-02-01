import { useState } from "react";
import styled from "styled-components";
import Button from "../UI/buttons/Buttons";
import FormInput from "../UI/formInput/FormInputs";

export const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const cancelHandler = (event) => {
    event.preventDefault();
    props.onShowForm();
  };

  const titleInpitChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const priceInpitChangeHandler = (event) => {
    setPrice( event.target.value);
  };
  const dateInpitChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      date,
      price: +price,
    };
    props.onNewExpemseAdd(expenseData);

    setDate("")
    setPrice("")
    setTitle("")
  };
  return (
    <div className="blockForm">
      <Form>
        <FormInput
          id="name"
          labelName="Название"
          inputType="text"
          placeholder="Введите название"
          value={title}
          onChange={titleInpitChangeHandler}
        />

        <FormInput
          id="price"
          labelName="Цена"
          inputType="number"
          value={price}
          onChange={priceInpitChangeHandler}
        />

        <FormInput
          id="date"
          labelName="Дата"
          inputType="date"
          placeholder="DD/MM/YYYY"
          value={date}
          onChange={dateInpitChangeHandler}
        />

        <StyledBtn>
          <Button title="Отмена" onClick={cancelHandler} />
          <Button title="Сохранить" onClick={saveHandler} />
        </StyledBtn>
      </Form>
    </div>
  );
};

const Form = styled.form`
    padding: 30px 40px;
    background-color: #AD9BE9;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 15px;
`
const StyledBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end; 
    background-color: #AD9BE9;
`