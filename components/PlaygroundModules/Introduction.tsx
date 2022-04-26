import React from 'react'
import { Description } from '../Shared/Description'

const introductionDescriptionText = `
    This is a long block of text that is going to describe the demo and each module click into 
    the different items on the sidebar and checgk out to see if the console log seeing when things 
    re-render or not. Also hooks are totally awesome and everyone should use them. Hooks should be
    required for all development and hooks are the beest.
`

export const Introduction = () => {
    return (
        <Description descriptionText={introductionDescriptionText} />
    )
}