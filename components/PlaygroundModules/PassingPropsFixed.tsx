import styled from "@emotion/styled";
import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button } from "../Shared/Button";
import { Container } from "../Shared/Container";
import { Display } from "../Shared/Display";
import { SectionContainer } from "../Shared/Section";

export const PassingPropsFixed = () => {
  console.log("parent render");

  const [_, setUselessState] = useState<Object>({});
  const [exampleMemoDependency, __] = useState(1);

  const handleClickRerender = useCallback(() => {
    setUselessState({});
  }, [setUselessState]);

  // You can use useRef to pass objects, JSX, or arrays in via props
  // Updating the reference will not cause a re-render
  const newObject = useRef({ value: 1 });

  // You should useCallback when declaring functions
  const newFunction = useCallback(() => {
    return 1;
  }, []);

  // useMemo can be used if you have dependencies
  // Updating the dependencies of useMemo will cause the memoized value to refresh and the child to re-render
  const newJSX = useMemo(() => {
    return <div>{exampleMemoDependency}</div>;
  }, [exampleMemoDependency]);

  return (
    <Container>
      <SectionContainer>
        <ObjectComponent object={newObject.current} />
        <ListComponent list={newList} />
        <FunctionComponent fun={newFunction} />
        <JSXComponent jsx={newJSX} />
        <ButtonContainer>
          <Button label={"Re-render"} onClick={handleClickRerender} />
        </ButtonContainer>
      </SectionContainer>
    </Container>
  );
};

// You can use a constant outside the scope if there aren't any dependencies
// This method is best if the object, jsx, or list will not change
const newList = [1];

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
