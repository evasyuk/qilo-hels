import {WizardComponentProps} from '@asdfq/wizard-flow/WizardScreen/components/WizardComponent/index';
import styled from 'styled-components/native';
import {DefaultButton} from '@asdfq/components/buttons/DefaultButton';
import {useTranslation} from 'react-i18next';

export const QuestionSingle = ({ step, onPress }: WizardComponentProps) => {
  const { t } = useTranslation();

  return (
    <OptionsList>
      {step.options.map((option, index) => (
        <ButtonWrapper key={`${index}`}>
          <DefaultButton
            onPress={() => onPress(step, option.value)}
            title={t(`wizard:${option.label}`, option.label)}
            activated={step.activatedOption === option.value}
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
