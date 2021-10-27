import styled from 'styled-components/native';
import {DataType} from '@asdfq/wizard-flow/WizardScreen/WizardScreen';
import {QuestionSingle} from '@asdfq/wizard-flow/WizardScreen/components/WizardComponent/QuestionSingle';
import {QuestionMultiple} from '@asdfq/wizard-flow/WizardScreen/components/WizardComponent/QuestionMultiple';

export type WizardComponentProps = {
  step: DataType
  onPress: (step: DataType, option: string, booleanValue?: boolean) => void
}

export const WizardComponent = ({ step, onPress }: WizardComponentProps) => {
  const Container = step.type === 'single' ? QuestionSingle : QuestionMultiple

  return (
    <WizardWrapper>
      <Container step={step} onPress={onPress} />
    </WizardWrapper>
  )
}

const WizardWrapper = styled.View`
  width: 100%;
  height: 100%;
`
