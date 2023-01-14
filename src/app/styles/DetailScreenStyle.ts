import {ImageStyle, TextStyle, ViewStyle} from 'react-native';
import theme from '@app/theme';

export const container = {
  flex: 1,
  backgroundColor: '#fff',
} as ViewStyle;

export const imageStyle = {
  width: theme.DEVICE_WIDTH,
  height: theme.DEVICE_HEIGHT * 0.4,
} as ImageStyle;

export const cardView = {
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  marginTop: -50,
  backgroundColor: theme.WHITE,
} as ViewStyle;

export const headerTitle = {
  width: 100,
  height: 50,
} as ImageStyle;

export const titleView = {
  marginVertical: 20,
  marginHorizontal: 20,
  paddingVertical: 10,
} as ViewStyle;

export const title = {
  fontWeight: 'bold',
  fontSize: 18,
  color: '#007d50',
} as TextStyle;

export const buttonView = {
  borderWidth: 1,
  borderRadius: 10,
  width: 100,
  borderColor: '#9B9CA8',
  marginHorizontal: 20,
} as ViewStyle;

export const buttonText = {
  textAlign: 'center',
  color: '#007d50',
} as TextStyle;

export const descText = {
  fontSize: 16,
  color: '#000',
} as TextStyle;

export const descView = {
  marginVertical: 20,
  marginHorizontal: 20,
} as TextStyle;
