import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export const container = {
  flex: 1,
  backgroundColor: '#eaebee',
} as ViewStyle;

export const scrollViewItemStyle = {
  marginHorizontal: 5,
  marginVertical: 10,
} as ViewStyle;

export const itemBorderStyle = {
  width: 80,
  height: 80,
  borderRadius: 40,
  borderColor: 'green',
  borderWidth: 1,
  alignItems: 'center',
  justifyContent: 'center',
} as ViewStyle;

export const itemTextStyle = {
  textAlign: 'center',
  color: '#000',
} as TextStyle;

export const itemView = {
  backgroundColor: 'white',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
} as ViewStyle;

export const textView = {
  width: 80,
} as ViewStyle;

export const imageView = {
  width: 70,
  height: 70,
  borderRadius: 35,
} as ImageStyle;

export const cardCoverStyle = {
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8,
  borderBottomEndRadius: 0,
  borderBottomStartRadius: 0,
} as ImageStyle;

export const cardStyle = {
  borderRadius: 8,
} as ViewStyle;

export const cardViewStyle = {
  marginHorizontal: 10,
  marginVertical: 10,
} as ViewStyle;

export const headerTitle = {
  width: 100,
  height: 50,
} as ImageStyle;

export const cardTitleText = {
  fontWeight: 'bold',
  fontSize: 18,
  color: '#007d50',
} as TextStyle;

export const buttonView = {
  borderWidth: 1,
  borderRadius: 10,
  width: 100,
  borderColor: '#9B9CA8',
  alignSelf: 'center',
} as ViewStyle;

export const buttonText = {
  textAlign: 'center',
  color: '#007d50',
} as TextStyle;

export const cardContentView = {
  flexDirection: 'row',
  marginVertical: 10,
  justifyContent: 'space-between',
} as ViewStyle;

export const dateView = {
  flexDirection: 'row',
  left: 10,
} as ViewStyle;

export const dateText = {
  color: '#9B9CA8',
  alignSelf: 'center',
} as TextStyle;

export const likeText = {
  color: '#FF4C4C',
  alignSelf: 'center',
} as TextStyle;
