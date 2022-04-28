import styled from "@emotion/styled";
import React, { useCallback, useRef, useState } from "react";
import { Button } from "../Shared/Button";
import { Container } from "../Shared/Container";
import { Description } from '../Shared/Description'
import { Display } from "../Shared/Display";
import { SectionContainer } from "../Shared/Section";

const description = `Basically anytime you declare a function within a React component, you should declare it with useCallback. This will help reduce unnecessary rendering. 
Check out the examples below where a function is declared with and without useCallback and see how the child component is re-rendering when it does not need to.`

export const UseCallback = () => {
  return (
    <Container>
        <Description descriptionText={description} />
      <BadPatternSection />
      <GoodPatternSection />
    </Container>
  );
};

const BadPatternSection = () => {
  const [uselessState, setUselessState] = useState<Object>({});
  const handleClickRerender = () => {
    setUselessState({});
  };

  const totalRenders = useRef(0);
  totalRenders.current++;

  const exampleFunction = () => {
    console.log("");
  };

  return (
    <SectionContainer>
      <Display>Regular Function Example</Display>
      <ChildComponent fun={exampleFunction} />
      <Button label={"Re-render parent"} onClick={handleClickRerender} />
    </SectionContainer>
  );
};

const GoodPatternSection = () => {
  const [uselessState, setUselessState] = useState<Object>({});
  const handleClickRerender = () => {
    setUselessState({});
  };

  const totalRenders = useRef(0);
  totalRenders.current++;

  const exampleFunction = useCallback(() => {
    console.log("");
  }, []);

  return (
    <SectionContainer>
      <Display>Use Callback Example</Display>
      <PureComponentChild fun={exampleFunction} />
      <Button label={"Re-render parent"} onClick={handleClickRerender} />
    </SectionContainer>
  );
};

type ChildProps = {
  fun: () => void;
};

const ChildComponent = (props: ChildProps) => {
  const totalRenders = useRef(0);
  totalRenders.current++;

  return <Display>{`Child Render Count: ${totalRenders.current}`}</Display>;
};

const PureComponentChild = React.memo(ChildComponent)
