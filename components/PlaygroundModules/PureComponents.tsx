import styled from "@emotion/styled";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Button } from "../Shared/Button";
import { Container } from "../Shared/Container";
import { Description } from "../Shared/Description";
import { Display } from "../Shared/Display";
import { SectionContainer } from "../Shared/Section";

const description = `React does a pretty good job when primitives are being passed around of not rendering
components unnecessarily. However, sometimes it is necessary to pass in an object, jsx, list, or function as
a prop. In typescript, creating two identical versions of these types will still not be equal as the equality
operator for these types is checking the reference. While memoizing a object value or using useCallback to save
the reference between renders keeps the props from changing, React still will render child components by default
if passing in the exact same object! To resolve this, we can wrap components in React.memo() to create pure component
as long as the exact same component will be rendered when the props change. The higher order component performs a
shallow equal operation on the props to determine if the component should be re-rendered or not. Click the buttons
to observe how each example renders.`;

export const PureComponents = () => {
  return (
    <Container>
      <Description descriptionText={description} />
      <BasicExample />
      <PureComponentExample />
    </Container>
  );
};

// Even though object is being memoized and the reference is not changing, the child component still rerenders
const BasicExample = () => {
  console.log("Basic Example Parent Render");
  const totalRenders = useRef(0);
  totalRenders.current++;

  const [_, setUselessState] = useState({});

  const handleClickRerender = useCallback(() => {
    setUselessState({});
  }, []);

  const memoObject = useMemo(() => {
    return {};
  }, []);

  return (
    <Container>
      <SectionContainer>
        <Display></Display>
        <ChildComponent obj={memoObject} />
        <Display>{`Parent Render Count: ${totalRenders.current}`}</Display>
        <ButtonContainer>
          <Button label="Increment Count" onClick={handleClickRerender} />
        </ButtonContainer>
      </SectionContainer>
    </Container>
  );
};

// With pure components, the props are checked with a shallow equal to see if they need to be re-rendered
const PureComponentExample = () => {
  console.log("Pure Component Example Parent Render");
  const totalRenders = useRef(0);
  totalRenders.current++;

  const [_, setUselessState] = useState({});

  const handleClickRerender = useCallback(() => {
    setUselessState({});
  }, []);

  const memoObject = useMemo(() => {
    return {};
  }, []);

  return (
    <Container>
      <SectionContainer>
        <Display></Display>
        <PureComponentChild obj={memoObject} />
        <Display>{`Parent Render Count: ${totalRenders.current}`}</Display>
        <ButtonContainer>
          <Button label="Increment Count" onClick={handleClickRerender} />
        </ButtonContainer>
      </SectionContainer>
    </Container>
  );
};

type ChildProps = {
  obj: {};
};

const ChildComponent = (props: ChildProps) => {
  const totalRenders = useRef(0);
  totalRenders.current++;

  return <Display>{`Child Render Count: ${totalRenders.current}`}</Display>;
};

const PureComponentChild = React.memo(ChildComponent);

const ButtonContainer = styled.div`
  margin: 24px;
`;
