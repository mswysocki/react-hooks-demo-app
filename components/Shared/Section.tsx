import styled from "@emotion/styled";
import { sectionBackground } from "../../constants/colors";

export const SectionContainer = styled.div`
  label: description-container;

  display: flex;
  flex-direction: column;

  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;

  padding: 16px;

  border-radius: 16px;

  height: fit-content;

  background: ${sectionBackground};
`;
