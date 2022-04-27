import styled from "@emotion/styled";
import React, { useCallback, useRef, useState } from "react";
import { Button } from "../Shared/Button";
import { Display } from "../Shared/Display";
import { SectionContainer } from '../Shared/Section'

export const PassingProps = () => {
  console.log("parent render");

  const [uselessState, setUselessState] = useState<Object>({});

  const handleClickRerender = useCallback(() => {
    setUselessState({});
  }, [setUselessState]);

  // you should useRef when declaring objects to pass as Props
  const newObject = { value: 1 };

  // You should useRef to avoid creating a new list each render pass
  const newList = [1];

  // You should useCallack when declaring functions
  const newFunction = () => {
    return 1;
  };

  // You should useRef to avoid creating new JSX on each render pass
  const newJSX = <div>1</div>;

  return (
    <SectionContainer>
      <ObjectComponent object={newObject} />
      <ListComponent list={newList} />
      <FunctionComponent fun={newFunction} />
      <JSXComponent jsx={newJSX} />
      <ButtonContainer>
        <Button label={"Re-render"} onClick={handleClickRerender} />
      </ButtonContainer>
    </SectionContainer>
  );
};

type ObjectComponentProps = {
  object: {};
};

const ObjectComponent = React.memo((props: ObjectComponentProps) => {
  console.log("Object component render");

  const totalRenders = useRef(0);
  totalRenders.current++;

  return <Display>{`Render count: ${totalRenders.current}`}</Display>;
});
ObjectComponent.displayName = "ObjectComponent";

type ListComponentProps = {
  list: number[];
};

const ListComponent = React.memo((props: ListComponentProps) => {
  console.log("List Component render");

  const totalRenders = useRef(0);
  totalRenders.current++;

  return <Display>{`Render count: ${totalRenders.current}`}</Display>;
});
ListComponent.displayName = "ListComponent";

type FunctionComponentProps = {
  fun: () => number;
};

const FunctionComponent = React.memo((props: FunctionComponentProps) => {
  console.log("Function component render");

  const totalRenders = useRef(0);
  totalRenders.current++;

  return <Display>{`Render count: ${totalRenders.current}`}</Display>;
});
FunctionComponent.displayName = "FunctionComponent";

type JsxComponentProps = {
  jsx: JSX.Element;
};

const JSXComponent = React.memo((props: JsxComponentProps) => {
  console.log("JSX Component render");

  const totalRenders = useRef(0);
  totalRenders.current++;

  return <Display>{`Render count: ${totalRenders.current}`}</Display>;
});
JSXComponent.displayName = "JSXComponent";

const ButtonContainer = styled.div`
  margin: 24px;
`;
