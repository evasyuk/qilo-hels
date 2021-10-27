import {Dimensions, Platform} from 'react-native';

export * from './navigation';

export const width = Dimensions.get('window').width

export const isIOS = Platform.OS === 'ios'
