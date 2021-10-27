/* eslint-disable no-extra-boolean-cast */
import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Header} from '@asdfq/wizard-flow/WizardScreen/Header';
import { Title } from '@asdfq/components/Title';
// TODO: create .d.ts file for "react-native-progress" library
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ProgressBar from 'react-native-progress/Bar';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@asdfq/routes/RouteNames';
import { useBackHandler } from '@react-native-community/hooks'
import { WizardComponent } from '@asdfq/wizard-flow/WizardScreen/components/WizardComponent';
import {width} from '@asdfq/utils';
import {FooterSection} from '@asdfq/wizard-flow/WizardScreen/components/FooterSection';

import data from './data.json'

type OptionType = {
  'label': string;
  'value': string;
}

export type DataType = {
  'index': number;
  'type': string;
  'options': OptionType[];
  'label': string;
  'description'?: string;
  'key': string;
  'activatedOption'?: string;
  'activatedOptions'?: any
}

export const WizardScreen: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [dataToRender, setData] = useState<DataType[]>(data.dataToRender);
  const [currentStep, setIndex] = useState<number>(0);

  const allSteps = dataToRender.length
  const step = dataToRender[currentStep]
  const isNextDisabled = step.type === 'single'
    ? !Boolean(step?.activatedOption)
    : !Boolean(Object.keys(step?.activatedOptions).length)

  const onBack = useCallback(() => {
    if (currentStep === 0) {
      navigation.goBack()
    } else {
      setIndex(prevIndex => prevIndex - 1)
    }
    return true
  }, [currentStep])

  const onNext = useCallback(() => {
    if (currentStep === allSteps - 1) {
      navigation.navigate(ROUTES.Summary, { answers: data.answers })
    } else {
      setIndex(prevIndex => prevIndex + 1)
    }
  }, [currentStep])

  const onItemClick = useCallback((step: DataType, option: string, value?: boolean) => {
    const newData = dataToRender.slice()
    if (step.type === 'single') {
      newData[step.index].activatedOption = option
    } else {
      newData[step.index].activatedOptions[option] = value
    }

    setData(newData)
  }, [dataToRender])

  useBackHandler(onBack)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header title={t(`wizard:header`,{ all: allSteps, step: currentStep + 1 })} onBack={onBack} />
        <ProgressBar borderRadius={0} borderWidth={0} progress={(currentStep + 1)/allSteps} width={width} height={2} />
        <ScrollView
          style={styles.scrollView}
          contentInsetAdjustmentBehavior="automatic"
        >
          <View style={styles.body}>
            <Title title={t(`wizard:${step.key}`, step.label, { all: allSteps, step: currentStep })} />
            <WizardComponent step={step} onPress={onItemClick} />
          </View>
        </ScrollView>
        <FooterSection onPress={onNext} disabled={isNextDisabled} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollView: {},
});
