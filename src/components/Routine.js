import React from 'react'
import styled from 'styled-components'
import { Checkbox } from 'antd';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    height: 58px;
    box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.5);
    margin-left: 40px;
    margin-right: 40px;
    margin-bottom: 24px;
    border-radius: 4px;
`;

const ContainerRoutine = styled.div`
    height: 58px;
    display: flex;
    align-items: center;
`;

const RoutineName = styled.h3`
    margin: 0 0 0 24px;
    font-size: 1.2rem;
`;

const HabitChecked = styled(Checkbox)`

`;

const Details = styled.a`
  margin-right: 24px;
  margin-left: 24px;
  font-weight: 500;
  color: #ff1654;
`;

function Routine({ routine }) {

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  return (
    <Container>
      <ContainerRoutine>
        <RoutineName>{routine}</RoutineName>
      </ContainerRoutine>
      <div>
        <HabitChecked onChange={onChange}></HabitChecked>
        <Details>Details</Details>
      </div>

    </Container>
  );
}

export default Routine