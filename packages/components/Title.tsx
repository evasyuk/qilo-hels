import React from 'react'
import styled from 'styled-components/native';

type TitleProps = {
  title: string
}

export const Title = ({ title }: TitleProps): JSX.Element => (
  <TextWrapper>
    <Text>{title}</Text>
  </TextWrapper>
)

const TextWrapper = styled.View`
  padding: 22px;
  width: 100%;
`

const Text = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: 700;
`
