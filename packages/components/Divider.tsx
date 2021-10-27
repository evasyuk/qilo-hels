import React from 'react'
import styled from 'styled-components/native';

export const Divider = () => (
  <DividerWrapper>
    <Line />
  </DividerWrapper>
)

export const DividerWrapper = styled.View`
  padding: 23px 23px;
`

export const Line = styled.View`
  background-color: #DFE2E6;
  height: 1px;
  width: 100%;
`
