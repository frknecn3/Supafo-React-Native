import { ImageBackground, ImageSourcePropType, TextInputProps, TouchableOpacityProps, ViewProps } from 'react-native';

export interface ButtonType extends TouchableOpacityProps {
  rounded?: boolean;
  image?: ImageSourcePropType;
  variant?: 'light' | 'dark';
}

export interface InputType extends TextInputProps {
  rounded?: boolean;
  heading?: string;
  icon?: ImageSourcePropType;
  isPassword?: boolean;
}

export interface PhoneInputType extends TextInputProps {
  rounded?: boolean;
  heading?: string;
  icon?: ImageSourcePropType;
  onChangeNumber: (text: string) => {} | void;
}

export interface ScreenType extends ViewProps {
  header?: React.JSX.Element | React.JSX.Element[];
  children?: React.JSX.Element | React.JSX.Element[];
  scrollview?: boolean;
}

export interface DividerType {
  text?: string;
}

export interface HeaderType {
  title?: string;
  noBackButton?: boolean;
}

export interface LocationInputType {
  title?: string,
  distance?: number,
}

export interface HeadingTextType {
  title?: string,
}


export interface DonateType {
  backgroundImage?: ImageSourcePropType,
  title: string,
  icon?: ImageSourcePropType;
  button: ButtonType,
  isAvailable: boolean,
  buttonTitle: string,
  onPress?: () => void;
}

export interface BookStatusType {
  status?: "preparing" | "completed" | "delivered"
}