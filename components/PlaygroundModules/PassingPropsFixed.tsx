import styled from "@emotion/styled";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../Shared/Button";

export const PassingPropsFixed = () => {
  console.log("parent render");

  const [_, setUselessState] = useState<Object>({});

  const handleClickRerender = useCallback(() => {
    setUselessState({});
  }, [setUselessState]);

  // you should useRef when passing objects as props
  const newObject = useRef({ value: 1 })

  // You should useRef to avoid creating a new list each render pass
  const newList = useRef([1])

  // You should useCallback when declaring functions
  const newFunction = useCallback(() => {
    return 1;
  }, []);

  // You should useRef to avoid creating new JSX on each render pass
  const newJSX = useRef(<div>1</div>)

  return (
    <Container>
      <ObjectComponent object={newObject.current} />
      <ListComponent list={newList.current} />
      <FunctionComponent fun={newFunction} />
      <JSXComponent jsx={newJSX.current} />
      <ButtonContainer>
        <Button label={"Re-render"} onClick={handleClickRerender} />
      </ButtonContainer>
    </Container>
  );
};

type ObjectComponentProps = {
  object: {};
};

const ObjectComponent = React.memo((props: ObjectComponentProps) => {
  console.log("Object component render");

  return (
    <div />
  )
});
ObjectComponent.displayName = 'ObjectComponent'

type ListComponentProps = {
  list: number[];
};

const ListComponent = React.memo((props: ListComponentProps) => {
  console.log("List Component render");

  return <div />;
})
ListComponent.displayName = 'ListComponent'

type FunctionComponentProps = {
  fun: () => number;
};

const FunctionComponent = React.memo((props: FunctionComponentProps) => {
  console.log("Function component render");

  return <div />;
})
FunctionComponent.displayName = 'FunctionComponent'

type JsxComponentProps = {
  jsx: JSX.Element;
};

const JSXComponent = React.memo((props: JsxComponentProps) => {
  console.log("JSX Component render");

  return <div />;
})
JSXComponent.displayName = 'JSXComponent'

const Container = styled.div``;

const ButtonContainer = styled.div`
  margin: 24px;
`;
