import styled from "@emotion/styled";
import React, { useCallback, useRef, useState } from "react";
import { Button } from "../Shared/Button";
import { Display } from "../Shared/Display";
import { SectionContainer } from "../Shared/Section";

export const UseCallback = () => {
  return (
    <Container>
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

const Container = styled.div``;
