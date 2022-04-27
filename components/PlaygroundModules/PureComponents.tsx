import styled from "@emotion/styled";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Button } from "../Shared/Button";
import { Display } from "../Shared/Display";
import { SectionContainer } from "../Shared/Section";

export const PureComponents = () => {
  return (
    <Container>
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

const Container = styled.div``;
