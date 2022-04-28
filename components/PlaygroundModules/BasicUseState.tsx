import styled from "@emotion/styled/";
import React, { useCallback, useRef, useState } from "react";
import { Button } from "../Shared/Button";
import { Container } from "../Shared/Container";
import { Description } from "../Shared/Description";
import { SectionContainer } from "../Shared/Section";

const descriptionText = `In the component below, the useState hook is used to 
keep track of a count. The state is saved across renders and is initialized to 0 on
initial mount. When the component is unmounted the state will be lost. Click the increment
button for the count to be incremented. Open the console and check which components 
re-render when the 'Increment' button is clicked and when the 'Same Count' button is clicked.`;

export const BasicUseState = () => {
  console.log("parent render");
  const [count, setCount] = useState(0);

  const totalRenders = useRef(0);
  totalRenders.current++;

  // Increment the count and re-render parent and child
  const incrementCount = useCallback(() => {
    setCount((previous) => previous + 1);
  }, [setCount]);

  // Keeping the count the same does not cause the child component to re-render
  const keepCountSame = useCallback(() => {
    setCount(count);
  }, [count]);

  return (
    <Container>
      <Description descriptionText={descriptionText} />
      <SectionContainer>
        <ChildComponent count={count} />
        <DisplayCount>{`Parent Render Count: ${totalRenders.current}`}</DisplayCount>
        <ButtonContainer>
          <Button label="Increment Count" onClick={incrementCount} />
        </ButtonContainer>

        <ButtonContainer>
          <Button label="Same Count" onClick={keepCountSame} />
        </ButtonContainer>
      </SectionContainer>
    </Container>
  );
};

type ChildProps = {
  count: number;
};

const ChildComponent = (props: ChildProps) => {
  const { count } = props;

  console.log("child render");
  const totalRenders = useRef(0);
  totalRenders.current++;

  return (
    <Container>
      <DisplayCount>{`Child Render Count: ${totalRenders.current}`}</DisplayCount>
      <DisplayCount>{`Count: ${count}`}</DisplayCount>
    </Container>
  );
};

const DisplayCount = styled.div`
  font-size: 48px;

  margin: 24px;
`;

const ButtonContainer = styled.div`
  margin: 24px;
`;
