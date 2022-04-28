import styled from "@emotion/styled";
import React, { useCallback, useRef, useState } from "react";
import { Button } from "../Shared/Button";
import { Container } from "../Shared/Container";
import { Display } from "../Shared/Display";
import { SectionContainer } from "../Shared/Section";

const listItems = [1, 2, 3, 4];

export const OnClickInList = () => {
  return (
    <Container>
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
          <ListItem
            key={value}
            value={value}
            onClick={handleSelectItem}
          />
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
})
ListItem.displayName = 'ListItem'

type ButtonProps = {
    label: string
    onClick: () => void
}

const RenderAwareButton = (props: ButtonProps) => {
    const { label, onClick } = props
    console.log('Button Render')

    return <Button label={label} onClick={onClick} />
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin: 8px;

  border-radius: 20px;

  justify-content: space-between;
`;