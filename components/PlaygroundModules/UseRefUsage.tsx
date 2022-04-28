import styled from "@emotion/styled";
import React, { useCallback, useRef, useState } from "react";
import { Button } from "../Shared/Button";
import { Container } from "../Shared/Container";
import { Description } from "../Shared/Description";
import { Display } from "../Shared/Display";
import { SectionContainer } from "../Shared/Section";

const description = `useRef can be used in multiple ways, sometimes we may want to hold a value
across multiple renders without actually causing the component to re-render. Clicking the increment
button will increment the count while the count won't actually be shown until the component is re-rendered.
You can re-render the first component by clicking the re-render button to see what the current count is.
The second example is a way a keeping track of a reference on a DOM element. This is good for getting input
values when submitting or keeping track of where a component is the screen to render a tooltip. Again, when
the input value changes, it doesn't cause the component to re-render. Only when the component is forced to
re-render will the input be shown in the Display.
`

export const UseRefUsage = () => {
  return (
    <Container>
      <Description descriptionText={description} />
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
        <input ref={inputRef} placeholder={"Type something"} />
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
