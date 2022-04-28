import React, { useCallback, useMemo, useRef, useState } from "react";
import { Button } from "../Shared/Button";
import { Container } from "../Shared/Container";
import { Description } from "../Shared/Description";
import { Display } from "../Shared/Display";
import { SectionContainer } from "../Shared/Section";

const description = `This is an experiment that shows if we're memoizing multiple values in the component
that are dependent on each other, it will still only cause a single render pass. The functionality is no
different from calculating all 3 values in a single useMemo function.`

export const UseMemoChaning = () => {
  return (
    <Container>
      <Description descriptionText={description} />
      <ChainPatternSection />
      <CombinedPatternSection />
    </Container>
  );
};

const ChainPatternSection = () => {
  const [initialValue, setInitialValue] = useState(0);
  console.log("Chained memo render");
  const totalRenders = useRef(0);
  totalRenders.current++;

  const handleClickIncrementValue = useCallback(() => {
    setInitialValue((previous) => previous + 1);
  }, []);

  const memoizedValue1 = useMemo(() => {
    let hardToCompute = initialValue;
    for (let i = 1; i < 1000; i++) {
      if (hardToCompute > 1000000) {
        hardToCompute = hardToCompute % i;
      } else {
        hardToCompute = hardToCompute * hardToCompute + 7;
      }
    }
    return hardToCompute;
  }, [initialValue]);

  const memoizedValue2 = useMemo(() => {
    let hardToCompute = memoizedValue1;
    for (let i = 1; i < 1000; i++) {
      if (hardToCompute > 1000000) {
        hardToCompute = hardToCompute % i;
      } else {
        hardToCompute = hardToCompute * hardToCompute + 7;
      }
    }
    return hardToCompute;
  }, [memoizedValue1]);

  const memoizedValue3 = useMemo(() => {
    let hardToCompute = memoizedValue2;
    for (let i = 1; i < 1000; i++) {
      if (hardToCompute > 1000000) {
        hardToCompute = hardToCompute % i;
      } else {
        hardToCompute = hardToCompute * hardToCompute + 7;
      }
    }
    return hardToCompute;
  }, [memoizedValue2]);

  return (
    <SectionContainer>
      <Display>{`Memo Chain Renders: ${totalRenders.current}`}</Display>
      <Display>{`Results: ${memoizedValue3}`}</Display>
      <Button
        label={"Increment Initial Value"}
        onClick={handleClickIncrementValue}
      />
    </SectionContainer>
  );
};

const CombinedPatternSection = () => {
  const [initialValue, setInitialValue] = useState(0);
  console.log("Combined memo render");
  const totalRenders = useRef(0);
  totalRenders.current++;

  const handleClickIncrementValue = useCallback(() => {
    setInitialValue((previous) => previous + 1);
  }, []);

  const { memoizedValue1, memoizedValue2, memoizedValue3 } = useMemo(() => {
    let hardToCompute = initialValue;
    for (let i = 1; i < 1000; i++) {
      if (hardToCompute > 1000000) {
        hardToCompute = hardToCompute % i;
      } else {
        hardToCompute = hardToCompute * hardToCompute + 7;
      }
    }

    let hardToCompute2 = hardToCompute;
    for (let i = 1; i < 1000; i++) {
      if (hardToCompute2 > 1000000) {
        hardToCompute2 = hardToCompute2 % i;
      } else {
        hardToCompute2 = hardToCompute2 * hardToCompute2 + 7;
      }
    }

    let hardToCompute3 = hardToCompute2;
    for (let i = 1; i < 1000; i++) {
      if (hardToCompute3 > 1000000) {
        hardToCompute3 = hardToCompute3 % i;
      } else {
        hardToCompute3 = hardToCompute3 * hardToCompute3 + 7;
      }
    }

    return {
      memoizedValue1: hardToCompute,
      memoizedValue2: hardToCompute2,
      memoizedValue3: hardToCompute3,
    };
  }, [initialValue]);

  return (
    <SectionContainer>
      <Display>{`Combined Memo Renders: ${totalRenders.current}`}</Display>
      <Display>{`Results: ${memoizedValue3}`}</Display>
      <Button
        label={"Increment Initial Value"}
        onClick={handleClickIncrementValue}
      />
    </SectionContainer>
  );
};
