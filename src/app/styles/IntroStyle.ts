import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export const splashContainer = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
} as ViewStyle;

export const indicatorContainer = {
  position: 'absolute',
  bottom: 20,
  right: 0,
  left: 0,
} as ViewStyle;

export const slide = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: '#fff',
} as ViewStyle;

export const title = {
  fontSize: 28,
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#000',
} as ViewStyle;

export const desc = {
  textAlign: 'center',
  width: '90%',
  fontSize: 17,
  color: '#000',
} as ViewStyle;

export const buttonCircle = {
  width: 40,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
} as ViewStyle;

export const artContainer = {
  flexDirection: 'row',
  alignItems: 'center',
} as ViewStyle;

export const iconContainer = {
  width: 90,
  height: 90,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
} as ViewStyle;

export const splashLogo = {
  width: 150,
  height: 150,
  resizeMode: 'contain',
} as ImageStyle;

export const logo = {
  width: 90,
  height: 90,
  borderRadius: 10,
} as ImageStyle;

export const descTitle = {
  fontWeight: 'bold',
  fontSize: 18,
  color: '#007d50',
  textAlign: 'center',
  marginBottom: 10,
} as TextStyle;

export const descText = {
  textAlign: 'center',
  color: '#000',
} as TextStyle;

export const dotStyle = {
  backgroundColor: 'gray',
} as ViewStyle;

export const activeDotStyle = {
  backgroundColor: '#000',
} as ViewStyle;
