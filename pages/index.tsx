import React, { useCallback, useState } from 'react'
import styled from "@emotion/styled"
import type { NextPage } from "next"

import { Sidebar } from '../components/Sidebar/Sidebar'
import { Playground } from '../components/Playground/Playground'
import { SidebarModule, sidebarModules } from '../constants/constants'

const Home: NextPage = () => {

  const [currentModule, setCurrentModule] = useState(sidebarModules[0])

  const handleItemClicked = useCallback((module: SidebarModule) => {
    setCurrentModule(module)
  }, [])

  return (
      <RootContainer>
        <Sidebar selectedItem={currentModule} onItemClicked={handleItemClicked} />
        <Playground module={currentModule} />
      </RootContainer>
  );
};

const RootContainer = styled.div`
  label: root-container;

  display: flex;

  flex-direction: row;

  height: 100vh;
  width: 100vw;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  font-smooth: always;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`;

export default Home;
