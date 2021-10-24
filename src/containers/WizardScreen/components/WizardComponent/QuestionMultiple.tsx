import React, {useCallback} from 'react'
import {WizardComponentProps} from '@containers/WizardScreen/components/WizardComponent/index';
import styled from 'styled-components/native';
import {DefaultButton} from '@components/buttons/DefaultButton';
import {useTranslation} from 'react-i18next';
import {Divider} from '@components/Divider';
import {SelectButton} from '@components/buttons/SelectButton';

export const QuestionMultiple = ({ step, onPress }: WizardComponentProps) => {
  const { t } = useTranslation();

  const onPressCallback = useCallback((option, newValue) => () => onPress(step, option.value, newValue), [step])

  const onSelectAll = useCallback(() => {
    step.options.map(option => onPressCallback(option, true)).forEach(callback => callback())
  }, [])

  return (
    <OptionsList>
      <ButtonWrapper key={`top-item`}>
        <DefaultButton
          onPress={onSelectAll}
          title={t(`wizard:selectAll`, 'Select all')}
        />
        <Divider />
      </ButtonWrapper>
      {step.options.map((option, index) => (
        <ButtonWrapper key={`${index}`}>
          <SelectButton
            onPress={onPressCallback(option, !step.activatedOptions[option.value])}
            title={t(`wizard:${option.label}`, option.label)}
            activated={step.activatedOptions[option.value]}
          />
        </ButtonWrapper>
      ))}
    </OptionsList>
  )
}

const OptionsList = styled.ScrollView`

`

const ButtonWrapper = styled.View`
  padding: 2px 16px;
`
