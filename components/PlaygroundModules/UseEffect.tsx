import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Container } from '../Shared/Container'
import { Display } from '../Shared/Display'
import { SectionContainer } from '../Shared/Section'

export const UseEffectExample = () => {

    return (
        <Container>
            <MountUnmountExample />
            <SideEffect />
        </Container>
    )
}

// key strokes
const MountUnmountExample = () => {

    const [lastKey, setLastKey] = useState('')

    const handleKeyEvent = useCallback((event: KeyboardEvent) => {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            setLastKey(event.key)
        }
    }, [])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyEvent)

        return () => {
            document.removeEventListener('keydown', handleKeyEvent)
        }
    }, [handleKeyEvent])

    useEffect(() => {
        // With no dependency list, the function will run every render cycle
        console.log('Render')
    })

    return (
        <SectionContainer>
            <Display>{`Last key alphebet key stroke: ${lastKey}`}</Display>
        </SectionContainer>
    )
}

// Handle side effects with 
const SideEffect = () => {

    const [value, setValue] = useState('')

    const handleValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }, [])

    // useEffect function runs every time dependency list changes
    useEffect(() => {
        // You could also make a network request here!

        document.title = value
    }, [value])

    return (
        <SectionContainer>
            <input value={value} onChange={handleValueChange} />
        </SectionContainer>
    )
}



