import React from 'react'
import { BasicUseState } from '../components/PlaygroundModules/BasicUseState'
import { Introduction } from '../components/PlaygroundModules/Introduction'
import { OnClickInList } from '../components/PlaygroundModules/OnClickInList'
import { PassingProps } from '../components/PlaygroundModules/PassingProps'
import { PassingPropsFixed } from '../components/PlaygroundModules/PassingPropsFixed'
import { PureComponents } from '../components/PlaygroundModules/PureComponents'
import { UseCallback } from '../components/PlaygroundModules/UseCallback'
import { UseEffectExample } from '../components/PlaygroundModules/UseEffect'
import { UseMemoChaning } from '../components/PlaygroundModules/UseMemoChaining'
import { UseRefUsage } from '../components/PlaygroundModules/UseRefUsage'
import { UseStateWithObject } from '../components/PlaygroundModules/UseStateWithObject'
import { WhyUseUseMemo } from '../components/PlaygroundModules/WhyUseUseMemo'

export type SidebarModule = 
'Introduction' | 
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
    'Basic useState': <BasicUseState />,
    'useState with Object': <UseStateWithObject />,
    'Why use useMemo': <WhyUseUseMemo />,
    'useMemo chaining': <UseMemoChaning />,
    'Pure Components' : <PureComponents />, 
    'useRef Usage': <UseRefUsage />,
    'Why use useCallback': <UseCallback />,
    'onClick functions in lists': <OnClickInList />,
    'useEffect': <UseEffectExample />,
    'Passing Props': <PassingProps />,
    'Passing Props Fixed': <PassingPropsFixed />
}