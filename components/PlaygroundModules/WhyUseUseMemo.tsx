import styled from "@emotion/styled";
import React, { useCallback, useMemo, useState } from "react";
import { Button } from "../Shared/Button";
import { Container } from "../Shared/Container";
import { Description } from '../Shared/Description'
import { SectionContainer } from "../Shared/Section";

const description = `Sorry that initial render took so long! UseMemo is most commonly thought to be used 
for saving the result of expensive operations between render cycles. In the first example the result is 
not memoized, when clicking the button, the component is re-rendered and the full value is re-computed.
In the second example, we are memoizing the result of the expensive calculation, so while the initial 
computation still takes time, subsequent renders of the component are almost instant! Try clicking each of
the buttons to see the difference!`

export const WhyUseUseMemo = () => {
  return (
    <Container>
        <Description descriptionText={description} />
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
      <Display>{`Render time: ${afterTime - initialTime}ms`}</Display>
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
      <Display>{`Render time: ${afterTime - initialTime}ms`}</Display>
      <Button label={"Rerender"} onClick={handleClickRerender} />
    </SectionContainer>
  );
};

const Display = styled.div`
  font-size: 48px;

  margin: 20px;
`;
