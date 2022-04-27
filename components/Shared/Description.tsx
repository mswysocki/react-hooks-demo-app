import styled from '@emotion/styled'
import React from 'react'
import { sectionBackground } from '../../constants/colors'

type Props = {
    descriptionText: string
}

export const Description = (props: Props) => {
    const { descriptionText } = props

    return (
        <DescriptionContainer>
            {descriptionText}
        </DescriptionContainer>
    )
}

const DescriptionContainer = styled.div`
    label: description-container;

    display: flex;

    margin: 16px;

    padding: 16px;

    border-radius: 16px;

    width: 100%;
    height: fit-content;

    background: ${sectionBackground};
`
