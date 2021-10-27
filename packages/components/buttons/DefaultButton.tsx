import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ActivatedInterface, BaseButton, ButtonProps } from '@asdfq/components/buttons/BaseButton';

import { Title } from './BaseButtonTitle';

export const DefaultButton: React.FC<ButtonProps & ActivatedInterface> = ({
  onPress,
  title,
  activated,
}) => (
  <BaseButton activated={activated} onPress={onPress}>
    <Title activated={activated}>{title}</Title>
    <Icon name="chevron-right" size={16} color={activated ? '#fff' : '#027AFF'} />
  </BaseButton>
);


