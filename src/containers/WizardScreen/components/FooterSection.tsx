import React from 'react'
import styled from 'styled-components/native';
import {isIOS, width} from '@utils/index';
import {FooterButton} from '@components/buttons/FooterButton';
import {PressableInterface} from '@components/buttons/BaseButton';
import {useTranslation} from 'react-i18next';

const IOS_INLINE_INSECT = 24;

export const FooterSection = ({ onPress, disabled }: PressableInterface) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <FooterButton title={t('wizard:next', 'Next')} onPress={onPress} activated={!disabled} disabled={disabled} />
    </Wrapper>
  )
}

const Wrapper = styled.View`
  width: ${width}px;
  height: ${80 + (isIOS ? IOS_INLINE_INSECT : 0)}px;
  background-color: white;

  position: absolute;
  bottom: 0;

  padding-left: 24px;
  padding-right: 24px;
  padding-top: 16px;
  padding-bottom: ${16 + (isIOS ? IOS_INLINE_INSECT : 0)}px;

  box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.2);

  elevation: 6;
`

const ButtonWrapper = styled.View`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;
`
