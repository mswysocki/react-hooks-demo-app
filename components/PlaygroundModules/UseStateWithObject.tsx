import styled from "@emotion/styled";
import React, { useCallback, useRef, useState } from "react";
import { Button } from "../Shared/Button";
import { Container } from "../Shared/Container";
import { Description } from "../Shared/Description";
import { SectionContainer } from "../Shared/Section";

const descriptionText = `This example is very similar to the previous example. Instead, when using the useState hook,
the state is stored in an object. Generally this is a bad pattern as passing objects around often causes child 
components to unnecessarily re-render. Open the console and see when components are re-rendering.`;

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

const DisplayCount = styled.div`
  font-size: 48px;

  margin: 24px;
`;

const ButtonContainer = styled.div`
  margin: 24px;
`;
