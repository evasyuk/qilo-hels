import {ActivatedInterface, BaseButton, ButtonProps} from '@components/buttons/BaseButton';
import React from 'react';

import { Title } from './BaseButtonTitle';

export const FooterButton = ({ activated, onPress, title, disabled }: ButtonProps & ActivatedInterface) => (
  <BaseButton activated={activated} onPress={onPress} disabled={disabled} alignCenter>
    <Title activated={activated}>{title}</Title>
  </BaseButton>
)
