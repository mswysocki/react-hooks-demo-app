import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import { Button } from "../Shared/Button";

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
    <Container>
      <ObjectComponent object={newObject} />
      <ListCompont list={newList} />
      <FunctionComponent fun={newFunction} />
      <JSXComponent jsx={newJSX} />
      <ButtonContainer>
        <Button label={"Re-render"} onClick={handleClickRerender} />
      </ButtonContainer>
    </Container>
  );
};

type ObjectComponentProps = {
  object: {};
};

const ObjectComponent = (props: ObjectComponentProps) => {
  console.log("Object component render");

  return <div />;
};

type ListComponentProps = {
  list: number[];
};

const ListCompont = (props: ListComponentProps) => {
  console.log("List Component render");

  return <div />;
};

type functionComponentProps = {
  fun: () => number;
};

const FunctionComponent = (props: functionComponentProps) => {
  console.log("Function component render");

  return <div />;
};

type jsxComponentProps = {
  jsx: JSX.Element;
};

const JSXComponent = (props: jsxComponentProps) => {
  console.log("JSX Component render");

  return <div />;
};

const Container = styled.div``;

const ButtonContainer = styled.div`
  margin: 24px;
`;
