import styled from "@emotion/styled";
import React, { useCallback, useContext, useRef, useState } from "react";
import { Button } from "../Shared/Button";
import { Description } from "../Shared/Description";
import { SectionContainer } from "../Shared/Section";

const descriptionText = ``;

type CountState = {
  count: number;
};

export const UseStateWithObject = () => {
  // Avoid useState with an object value as it will cause unnecessary Re-renders of the child component.
  // Expect similar behavior from functions, jsx, or lists
  const [countState, setCountState] = useState<CountState>({ count: 0 });

  console.log("parent render");
  const totalRenders = useRef(0);
  totalRenders.current++;

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
      <SectionContainer>
        <ChildComponent countState={countState} />
        <DisplayCount>{`Parent Render Count: ${totalRenders.current}`}</DisplayCount>
        <ButtonContainer>
          <Button label="Increment Count" onClick={handleIncrementCount} />
        </ButtonContainer>

        <ButtonContainer>
          <Button label="Same Count" onClick={handleSetStateWithSameCount} />
        </ButtonContainer>
      </SectionContainer>
    </Container>
  );
};

type ChildProps = {
  countState: CountState;
};

const ChildComponent = (props: ChildProps) => {
  const { countState } = props;

  console.log("child render");
  const totalRenders = useRef(0);
  totalRenders.current++;

  return (
    <Container>
        <DisplayCount>{`Child Render Count: ${totalRenders.current}`}</DisplayCount>
        <DisplayCount>{`Count: ${countState.count}`}</DisplayCount>
    </Container>
  )
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
