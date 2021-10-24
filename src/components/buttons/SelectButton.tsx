import {ActivatedInterface, BaseButton, ButtonProps} from '@components/buttons/BaseButton';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';

import { Title } from './BaseButtonTitle';


export const SelectButton = ({ activated, onPress, title }: ButtonProps & ActivatedInterface) => (
  <BaseButton activated={activated} onPress={onPress}>
    <Wrapper>
      <Icon name={activated ? 'check-square' : 'square'} size={16} color={activated ? '#fff' : '#027AFF'} />
      <Spacer />
      <Title activated={activated}>{title}</Title>
    </Wrapper>
  </BaseButton>
)

const Wrapper = styled.View`
  flex-direction: row;

  align-items: center;
`

const Spacer = styled.View`
  width: 16px;
  height: 16px;
`
