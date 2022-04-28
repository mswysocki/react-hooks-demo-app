import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Container } from '../Shared/Container'
import { Description } from '../Shared/Description'
import { Display } from '../Shared/Display'
import { SectionContainer } from '../Shared/Section'

const description = `This example demonstrates some different usages of useEffect. useEffect can trigger side effects onMount, 
onUnmount, on each render pass, and when props or state values are updated. The first example creates a key stroke listener on
mount and updates the state with the keystroke. The second example updates the title of the page based up on the input value.`

export const UseEffectExample = () => {

    return (
        <Container>
            <Description descriptionText={description} />
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
