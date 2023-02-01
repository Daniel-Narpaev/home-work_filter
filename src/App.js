import { useState } from "react";
import styled from "styled-components";
import { NewExpense } from "./components/forms/NewExpense";
import { Expenses } from "./components/list/Expenses";

function App() {
  const [expenses, setExpenses] = useState([]);
  const addNewExpenseHandler = (data) => {
    const updateExpenses = [...expenses];
    updateExpenses.push(data);
    setExpenses(updateExpenses);
  };
  return (
    <AppContainer>
      <NewExpense onNewExpemseAdd={addNewExpenseHandler} />

      <Expenses expenses={expenses} />

    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 780px;
  margin: 50px auto;
`