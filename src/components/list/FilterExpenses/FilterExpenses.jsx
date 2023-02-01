import React from 'react';
import styled from 'styled-components';


const FilterExpenses = ({value, onChange}) => {
   return (
    <div>
        <ExpensesFilterControl>
            <LabelText>Filter by year</LabelText>
                <Select value={value} onChange={onChange}>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </Select>        
        </ExpensesFilterControl>
    </div>
   )
}

export default FilterExpenses

const Select = styled.select`
    width: 120px;
    height: 50px;
    font-size: 20px;
    padding-left: 15px;
    font-weight: bolder;
    border-radius: 8px;
`
const ExpensesFilterControl = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`
const LabelText = styled.label`
    color: white;
    font-weight: bold;
    padding-top: 10px;
`