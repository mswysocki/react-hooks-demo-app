import styled from "@emotion/styled/";
import React, { useCallback, useState } from "react";
import { Button } from "../Shared/Button";
import { Description } from "../Shared/Description";

const descriptionText = ``;

export const BasicUseState = () => {
  console.log("parent render");
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((previous) => previous + 1);
  }, [setCount]);

  const keepCountSame = useCallback(() => {
    setCount(count);
  }, [count]);

  return (
    <Container>
      <Description descriptionText={descriptionText} />
      <ChildComponent count={count} />
      <ButtonContainer>
        <Button label={"Increment Count"} onClick={incrementCount} />
      </ButtonContainer>
      <ButtonContainer>
        <Button label={"Same Count"} onClick={keepCountSame} />
      </ButtonContainer>
    </Container>
  );
};

type ChildProps = {
  count: number;
};

const ChildComponent = (props: ChildProps) => {
  const { count } = props;

  console.log("child render");

  return <DisplayCount>{count}</DisplayCount>;
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
