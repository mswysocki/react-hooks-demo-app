import styled from "@emotion/styled";
import React, { useCallback, useContext, useState } from "react";
import { Button } from "../Shared/Button";
import { Description } from "../Shared/Description";

const descriptionText = ``;

type CountState = {
  count: number;
};

export const UseStateWithObject = () => {
  // Don't useState with an object value as it will cause unnecessary Re-renders of the child component.
  const [countState, setCountState] = useState<CountState>({ count: 0 });

  console.log("parent render");

  const handleIncrementCount = useCallback(() => {
    const newCountState: CountState = { count: countState.count + 1 };
    setCountState(newCountState);
  }, [setCountState, countState]);

  // Will cause child component to re-render the same component
  const handleSetStateWithSameCount = useCallback(() => {
    const newCountState: CountState = { count: countState.count };
    setCountState(newCountState);
  }, [countState.count]);

  return (
    <Container>
      <Description descriptionText={descriptionText} />
      <ChildComponent countState={countState} />
      <ButtonContainer>
        <Button label="Increment Count" onClick={handleIncrementCount} />
      </ButtonContainer>

      <ButtonContainer>
        <Button label="Same Count" onClick={handleSetStateWithSameCount} />
      </ButtonContainer>
    </Container>
  );
};

type ChildProps = {
  countState: CountState;
};

const ChildComponent = (props: ChildProps) => {
  const { countState } = props;

  console.log("child render");

  return <DisplayCount>{countState.count}</DisplayCount>;
};

const Container = styled.div`
  display: flex;

  flex-direction: column;
`;

const DisplayCount = styled.div`
  font-size: 48px;

  margin: 24px;
`;

const ButtonContainer = styled.div`
  margin: 24px;
`;
