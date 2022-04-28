import styled from "@emotion/styled";
import React, { useCallback, useRef, useState } from "react";
import { Button } from "../Shared/Button";
import { Container } from "../Shared/Container";
import { Description } from "../Shared/Description";
import { Display } from "../Shared/Display";
import { SectionContainer } from "../Shared/Section";

const description = `Having a list of elements that are rendered in a 'map' function is a pattern I've used quite a bit.
This section demonstrates a pattern where a list of items are rendered only once even when a function is passed in with
a unique parameter for each element. Try clicking the buttons in each section and check out when the buttons are
re-rendering.
`;

const listItems = [1, 2, 3, 4];

export const OnClickInList = () => {
  return (
    <Container>
      <Description descriptionText={description} />
      <BadPatternSection />
      <GoodPatternSection />
    </Container>
  );
};

const BadPatternSection = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  const handleSelectItem = useCallback((value: number) => {
    setSelectedItem(value);
  }, []);

  return (
    <SectionContainer>
      <Display>{`Selected Item: ${selectedItem}`}</Display>
      {listItems.map((value) => {
        return (
          <ItemContainer key={value}>
            <Display>{`Value: ${value}`}</Display>
            <RenderAwareButton
              label={`Select ${value}`}
              onClick={() => handleSelectItem(value)}
            />
          </ItemContainer>
        );
      })}
    </SectionContainer>
  );
};

const GoodPatternSection = () => {
  const [selectedItem, setSelectedItem] = useState(1);

  const handleSelectItem = useCallback((value: number) => {
    setSelectedItem(value);
  }, []);

  return (
    <SectionContainer>
      <Display>{`Selected Item: ${selectedItem}`}</Display>
      {listItems.map((value) => {
        return (
          <ListItem key={value} value={value} onClick={handleSelectItem} />
        );
      })}
    </SectionContainer>
  );
};

type ListItemProps = {
  value: number;
  onClick: (value: number) => void;
};

const ListItem = React.memo((props: ListItemProps) => {
  const { value, onClick } = props;

  console.log("List Item Render");
  const totalRenders = useRef(0);
  totalRenders.current++;

  const handleItemClick = useCallback(() => {
    onClick(value);
  }, [onClick, value]);

  return (
    <ItemContainer>
      <Display>{`Value: ${value}`}</Display>
      <Button label={`Select ${value}`} onClick={handleItemClick} />
    </ItemContainer>
  );
});
ListItem.displayName = "ListItem";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const RenderAwareButton = (props: ButtonProps) => {
  const { label, onClick } = props;
  console.log("Button Render");

  return <Button label={label} onClick={onClick} />;
};

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin: 8px;

  border-radius: 20px;

  justify-content: space-between;
`;
