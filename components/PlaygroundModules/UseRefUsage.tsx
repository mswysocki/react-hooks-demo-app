import styled from "@emotion/styled";
import React, { useCallback, useRef, useState } from "react";
import { Button } from "../Shared/Button";
import { Display } from "../Shared/Display";
import { SectionContainer } from "../Shared/Section";

export const UseRefUsage = () => {
  return (
    <Container>
      <RefereceValueExample />
      <ReferenceElementExample />
    </Container>
  );
};

// useRef holds a reference for the entire time a component is mounted
// Can be used like useState although it does not cause a re-render when assigned
const RefereceValueExample = () => {
  console.log("Reference Value Example Render");

  const [_, setUselessState] = useState({});
  const count = useRef(0);

  const handleClickIncrementCount = useCallback(() => {
    count.current = count.current + 1;
  }, []);

  const handleClickRerender = useCallback(() => {
    setUselessState({});
  }, []);

  return (
    <SectionContainer>
      <Display>{`Count: ${count.current}`}</Display>
      <ButtonContainer>
        <Button label={"Increment count"} onClick={handleClickIncrementCount} />
      </ButtonContainer>
      <ButtonContainer>
        <Button label={"Re-render"} onClick={handleClickRerender} />
      </ButtonContainer>
    </SectionContainer>
  );
};

// useRef can also be used to hold a reference of elements in the dom
// Can be used to directly access properties
const ReferenceElementExample = () => {
  console.log("Reference Element Example Render");

  const [_, setUselessState] = useState({});
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClickRerender = useCallback(() => {
    setUselessState({});
  }, []);

  return (
    <SectionContainer>
      <Display>{`InputValue: ${inputRef?.current?.value}`}</Display>
      <ButtonContainer>
        <input ref={inputRef} placeholder={'Type something'} />
      </ButtonContainer>
      <ButtonContainer>
        <Button label={"Re-render"} onClick={handleClickRerender} />
      </ButtonContainer>
    </SectionContainer>
  );
};

const ButtonContainer = styled.div`
  margin: 24px;
`;

const Container = styled.div`
  width: 100%;
`;
