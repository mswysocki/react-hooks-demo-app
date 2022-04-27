import styled from "@emotion/styled";
import React, { Suspense, useCallback, useMemo, useState } from "react";
import { Button } from "../Shared/Button";
import { SectionContainer } from "../Shared/Section";

export const WhyUseUseMemo = () => {
  return (
    <Container>
        <BadPatternSection />
        <GoodPatternSection />
    </Container>
  );
};

const BadPatternSection = () => {
  const [_, setUselessState] = useState({});

  // Force re-render
  const handleClickRerender = useCallback(() => {
    setUselessState({});
  }, []);

  const initialTime = Date.now();

  let hardToCompute = 0;
  for (let i = 0; i < 250000000; i++) {
    if (hardToCompute > 1000000) {
      hardToCompute = hardToCompute % i;
    } else {
      hardToCompute = hardToCompute * hardToCompute + 7;
    }
  }

  const afterTime = Date.now();

  console.log("Non memoized render time:", afterTime - initialTime);

  return (
    <SectionContainer>
      <Display>{`Non-Memoized Value`}</Display>
      <Display>{`Result: ${hardToCompute}`}</Display>
      <Display>{`Render time: ${afterTime - initialTime}`}</Display>
      <Button label={"Rerender"} onClick={handleClickRerender} />
    </SectionContainer>
  );
};

const GoodPatternSection = () => {
  const [_, setUselessState] = useState({});

  // Force re-render
  const handleClickRerender = useCallback(() => {
    setUselessState({});
  }, []);

  const initialTime = Date.now();

  const memoizedValue = useMemo(() => {
    let hardToCompute = 0;
    for (let i = 0; i < 250000000; i++) {
      if (hardToCompute > 1000000) {
        hardToCompute = hardToCompute % i;
      } else {
        hardToCompute = hardToCompute * hardToCompute + 7;
      }
    }
    return hardToCompute;
  }, []);

  const afterTime = Date.now();

  console.log("Memoized render time:", afterTime - initialTime);

  return (
    <SectionContainer>
      <Display>{`Memoized Value`}</Display>
      <Display>{`Result: ${memoizedValue}`}</Display>
      <Display>{`Render time: ${afterTime - initialTime}`}</Display>
      <Button label={"Rerender"} onClick={handleClickRerender} />
    </SectionContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const Display = styled.div`
  font-size: 48px;

  margin: 20px;
`;
