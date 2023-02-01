import styled from 'styled-components';

const ChartBar = ({ maximumPrice, currentPrice, label }) => {

const fillHeight = (100 * currentPrice) / maximumPrice  

return (
    <ChartBarContainer>
        <Scale>
            <ChartBarFill style={{height:`${fillHeight}%`}}/>
        </Scale>
        <ChartBarLabel>{label}</ChartBarLabel>
    </ChartBarContainer>)
}

export default ChartBar

const ChartBarContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Scale = styled.div`
    width: 100%;
    height: 100%;
    background-color: #c3b4f3;
    border: 1px solid #313131;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`
const ChartBarFill = styled.div`
    background-color:rgb(23, 0, 104);
    width: 100%;
    transition: all 0.3s ease-out;
`
const ChartBarLabel = styled.p`
    font-weight: bold;
    font-size: 0.6rem;
    text-align: center;
`