import React, {useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { DefaultButton } from '@asdfq/components';
import { Title } from '@asdfq/components/Title';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@asdfq/routes/RouteNames';

export const WelcomeScreen: React.FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const goToQuiz = useCallback(() => {
    navigation.navigate(ROUTES.Wizard)
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          contentInsetAdjustmentBehavior="automatic"
        >
          <View style={styles.body}>
            <Title title={t('welcome:title')} />
            <View style={styles.sectionContainer}>
              <DefaultButton
                onPress={goToQuiz}
                title={t('welcome:start')}
              />
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
  scrollView: {},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
