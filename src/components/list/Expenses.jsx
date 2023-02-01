import { useState } from "react";
import { ExpenseItem } from "../expense-item/ExpenseItem";
import FilterExpenses from "./FilterExpenses/FilterExpenses";
import Chart from "../chart/Chart";
import styled from "styled-components";

export const Expenses = ({expenses}) => {
  const [selectYear, setSelectYear] = useState("2023")

  const yearChangeHandler = (event) => {
   setSelectYear(event.target.value) 
  }

  const filteredItems = expenses.filter((element) => {
    const stringifiedYear = new Date(element.date).getFullYear().toString()
    return stringifiedYear === selectYear
  })
    return( 
    <UlList>
      <FilterExpenses value={selectYear} onChange={yearChangeHandler}/>
      <Chart expenses={filteredItems}/>
        {!expenses.length ? (
        <h1 className="nothing">Посты не найдены!</h1>
      ) : ( 
         filteredItems.map((element) => {
            return (
                 <ExpenseItem
                 key={element.title}
                 date={element.date}
                 title={element.title}
                 price={element.price}
                 />
            )})
          )}     
    </UlList>)
}

const UlList = styled.ul`
  margin-top: 28px;
  width: 100%;
  background-color: black;
  border: 1px solid rgb(255, 255, 255);
  padding: 28px 16px;
  border-radius: 15px;
`