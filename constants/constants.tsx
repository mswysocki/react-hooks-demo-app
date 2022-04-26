import React from 'react'
import { BasicUseState } from '../components/PlaygroundModules/BasicUseState'
import { Introduction } from '../components/PlaygroundModules/Introduction'
import { PassingProps } from '../components/PlaygroundModules/PassingProps'
import { PassingPropsFixed } from '../components/PlaygroundModules/PassingPropsFixed'
import { ThinkingAboutPerformance } from '../components/PlaygroundModules/ThinkingAboutPerformance'
import { UseStateWithObject } from '../components/PlaygroundModules/UseStateWithObject'

// Talk about the presentation

// Keeping in mind performance

// 

export type SidebarModule = 
'Introduction' | 
'Thinking about Performance' | 
'Basic useState' | 
'useState with Object' | 
'Why use useMemo' |
'useMemo usage' | 
'useMemo chaining' |
'Why use useCallback' |
'useCallback usage' |
'onClick functions in lists' | 
'useEffect' |
'Passing Props' |
'Passing Props Fixed'

export const sidebarModules: SidebarModule[] = [
    'Introduction',
    'Thinking about Performance', 
    'Basic useState',
    'useState with Object',
    'Why use useMemo',
    'useMemo usage',
    'useMemo chaining',
    'Why use useCallback',
    'useCallback usage',
    'onClick functions in lists',
    'useEffect',
    'Passing Props',
    'Passing Props Fixed'
]

export const moduleMap: { [key: string]: JSX.Element} = {
    'Introduction': <Introduction />,
    'Thinking about Performance': <ThinkingAboutPerformance/>,
    'Basic useState': <BasicUseState />,
    'useState with Object': <UseStateWithObject />,
    'Why use useMemo': <div/>,
    'useMemo usage': <div/>,
    'useMemo chaining': <div/>,
    'Why use useCallback': <div/>,
    'useCallback usage': <div/>,
    'onClick functions in lists': <div/>,
    'useEffect': <div/>,
    'Passing Props': <PassingProps />,
    'Passing Props Fixed': <PassingPropsFixed />

}