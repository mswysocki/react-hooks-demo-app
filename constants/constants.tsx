import React from 'react'
import { BasicUseState } from '../components/PlaygroundModules/BasicUseState'
import { Introduction } from '../components/PlaygroundModules/Introduction'
import { PassingProps } from '../components/PlaygroundModules/PassingProps'
import { PassingPropsFixed } from '../components/PlaygroundModules/PassingPropsFixed'
import { PureComponents } from '../components/PlaygroundModules/PureComponents'
import { ThinkingAboutPerformance } from '../components/PlaygroundModules/ThinkingAboutPerformance'
import { UseCallback } from '../components/PlaygroundModules/UseCallback'
import { UseMemoChaning } from '../components/PlaygroundModules/UseMemoChaining'
import { UseRefUsage } from '../components/PlaygroundModules/UseRefUsage'
import { UseStateWithObject } from '../components/PlaygroundModules/UseStateWithObject'
import { WhyUseUseMemo } from '../components/PlaygroundModules/WhyUseUseMemo'

export type SidebarModule = 
'Introduction' | 
'Thinking about Performance' | 
'Basic useState' | 
'useState with Object' | 
'Why use useMemo' |
'useMemo chaining' |
'Pure Components' | 
'useRef Usage' |
'Why use useCallback' |
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
    'useMemo chaining',
    'Pure Components',
    'useRef Usage',
    'Why use useCallback',
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
    'Why use useMemo': <WhyUseUseMemo />,
    'useMemo chaining': <UseMemoChaning />,
    'Pure Components' : <PureComponents />, 
    'useRef Usage': <UseRefUsage />,
    'Why use useCallback': <UseCallback />,
    'onClick functions in lists': <div/>,
    'useEffect': <div/>,
    'Passing Props': <PassingProps />,
    'Passing Props Fixed': <PassingPropsFixed />

}