import styled from '@emotion/styled'
import React, { useCallback } from 'react'
import { primaryBlue, sidebarBackground, sidebarItemHover } from '../../constants/colors'
import { SidebarModule, sidebarModules } from '../../constants/constants'
import { sidebarItemHeight, sidebarWidth } from '../../constants/dimensions'

type Props = {
    selectedItem: SidebarModule
    onItemClicked: (module: SidebarModule) => void
}

export const Sidebar = (props: Props) => {
    const { selectedItem, onItemClicked } = props

    const handleItemClicked = useCallback((module: SidebarModule) => {
        onItemClicked(module)
    }, [onItemClicked])

    return (
        <SidebarContainer>
            {sidebarModules.map((module) => {
                return (
                    <SidebarItem 
                        key={module} 
                        selected={module === selectedItem} 
                        module={module} 
                        onClick={handleItemClicked} />
                )
            })
        }
        </SidebarContainer>
    )
} 

type SidebarItemProps = {
    module: SidebarModule
    selected: boolean
    onClick: (module: SidebarModule) => void
}

const SidebarItem = (props: SidebarItemProps) => {
    const { module, selected, onClick } = props

    const handleClick = useCallback(() => {
        onClick(module)
    }, [module, onClick])

    return (
        <SidebarItemContainer onClick={handleClick} selected={selected}>{module}</SidebarItemContainer>
    )
}

const SidebarContainer = styled.div`
    label: sidebar-container;

    display: flex;

    flex-direction: column;

    width: ${sidebarWidth};

    padding-top: 16px;
    padding-bottom: 16px;

    height: 100%;

    overflow: scroll;

    background: ${sidebarBackground};
`

const SidebarItemContainer = styled.div<{ selected?: boolean }>`
    label: sidebar-item;

    display: flex;

    align-items: center;
    justify-content: start;

    height: ${sidebarItemHeight};
    width: 100%;

    padding-left: 12px;

    ${props => props.selected ? `background: ${primaryBlue}; color: white` : `&:hover { background: ${sidebarItemHover} }`};

    &:active {
        filter: brightness(90%);
    }

    cursor: pointer;

    user-select: none;
`