import styled from '@emotion/styled'
import React from 'react'
import { Display } from '../Shared/Display'
import { SectionContainer } from '../Shared/Section'


export const Introduction = React.memo(() => {
    return (
        <SectionContainer>
            <Display>Goals</Display>
            <ParagraphDisplay>- Establish strong fundamental understanding of common React hooks</ParagraphDisplay>
            <ParagraphDisplay>- Understand common performance pitfalls with React hooks</ParagraphDisplay>
            <ParagraphDisplay>- Be able to confidently apply React hooks to write high performance code and build product quickly</ParagraphDisplay>
        </SectionContainer>
    )
})
Introduction.displayName = 'Introduction'

export const ParagraphDisplay = styled.div`
  font-size: 24px;

  line-height: 30px;
`;