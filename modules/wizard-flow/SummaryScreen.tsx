/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, {useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Header} from '@asdfq/wizard-flow/WizardScreen/Header';
import {useBackHandler} from '@react-native-community/hooks';

export const SummaryScreen: React.FC = () => {
  const { t } = useTranslation();
  const route = useRoute();
  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.goBack()
    return true
  }, [])

  useBackHandler(onBack)

  // @ts-ignore
  const text = JSON.stringify(route.params?.answers, null, 2)

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header title={t(`summary:header`)} onBack={onBack} />
        <ScrollView
          style={styles.scrollView}
          contentInsetAdjustmentBehavior="automatic"
        >
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.highlight}>{text}</Text>
            </View>
          </View>
        </ScrollView>
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
  highlight: {
    fontWeight: '700',
  },
  scrollView: {},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
