import React from 'react'
import styled from 'styled-components/native';

interface AlignCenterInterface {
  alignCenter?: boolean
}

export interface ActivatedInterface {
  activated?: boolean;
}

export interface PressableInterface {
  onPress: (event: unknown) => void;
  disabled?: boolean;
}

type Props = {
  children: JSX.Element | JSX.Element[]
} & PressableInterface & ActivatedInterface & AlignCenterInterface

export type ButtonProps = {
  title: string;
  alignCenter?: boolean
} & PressableInterface

export const BaseButton = ({ children, onPress, activated, alignCenter, disabled }: Props) => (
  <TouchableWrapper onPress={onPress} disabled={disabled}>
    <TitleWrapper activated={activated} alignCenter={alignCenter}>
      {children}
    </TitleWrapper>
  </TouchableWrapper>
)

const TitleWrapper = styled.View<ActivatedInterface & AlignCenterInterface>`
  width: 100%;
  height: 54px;
  flex-direction: row;

  background-color: ${props => props.activated ? '#027AFF' : '#FFF'};

  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.1);

  shadow-opacity: 1.44;
  shadow-radius: 5.32px;


  elevation: 6;

  padding-left: 16px;
  padding-right: 16px;

  border-radius: 12px;

  align-items: center;
  justify-content: ${props => props?.alignCenter ? 'center' : 'space-between' };
`

const TouchableWrapper = styled.TouchableOpacity`
  padding: 5px;
`;
