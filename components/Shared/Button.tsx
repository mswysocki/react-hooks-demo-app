import styled from '@emotion/styled'
import React from 'react'
import { primaryBlue } from '../../constants/colors'

type Props = {
    label: string
    onClick: () => void
}

export const Button = (props: Props) => {
    const { label, onClick } = props

    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
    text-align: center;
    
    text-size: 16px;
    line-height: 18px;

    padding: 16px;


    color: white;
    background: ${primaryBlue};

    border-radius: 16px;

    outline: none;

    &:active {
        filter: brightness(90%);
    }
`