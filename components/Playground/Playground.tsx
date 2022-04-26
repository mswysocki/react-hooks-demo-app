import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import { Introduction } from '../PlaygroundModules/Introduction'
import { BasicUseState } from '../PlaygroundModules/BasicUseState'
import { UseStateWithObject } from '../PlaygroundModules/UseStateWithObject'
import { playgroundBackground } from '../../constants/colors'
import { SidebarModule, moduleMap as moduleMap } from '../../constants/constants'

type Props = {
    module: SidebarModule
}

export const Playground = (props: Props) => {
    const { module } = props

    const moduleComponent = useMemo(() => {
        return moduleMap[module]
    }, [module])

    return (
        <PlaygroundContainer>
            {moduleComponent}
        </PlaygroundContainer>
    ) 
}

const PlaygroundContainer = styled.div`
    display: flex;
    flex-grow: 1;

    height: 100%;
    width: 100%;

    background: ${playgroundBackground};
`


