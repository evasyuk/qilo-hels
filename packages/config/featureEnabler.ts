import { config } from '@asdfq/config/config';
import { getEnabledFeatures } from '@asdfq/utils/features';

const FeatureEnabler = getEnabledFeatures({
  sysDev: __DEV__,
  test: config.ENV === 'TEST',
  stage: config.ENV === 'STAGING',
  production: config.ENV === 'PRODUCTION',
  development: config.ENV === 'DEVELOPMENT',
});

export default FeatureEnabler;
