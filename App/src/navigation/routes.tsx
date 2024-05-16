import {AnyIfEmpty} from 'react-redux';

export default Object.freeze({
  // navigators
  HOME_TAB_NAVIGATOR: 'HOME_TAB_NAVIGATOR',
  AUTH_SCREEN: 'AUTH_SCREEN',
  LOGIN_SCREEN: 'LOGIN_SCREEN',
  SIGNUP_SCREEN: 'SIGNUP_SCREEN',
  SPLASH_SCREEN: 'SPLASH_SCREEN',
  FORGOT_PASSWORD_SCREEN: 'FORGOT_PASSWORD_SCREEN',
  FORGOT_PASSWORD_BY_EMAIL_SCREEN: 'FORGOT_PASSWORD_BY_EMAIL_SCREEN',
  FORGOT_PASSWORD_BY_SMS_SCREEN: 'FORGOT_PASSWORD_BY_SMS_SCREEN',
  SET_PASSWORD_SCREEN: 'SET_PASSWORD_SCREEN',
  ONBOARDING_SCREEN: 'ONBOARDING_SCREEN',
  PASSWORD_UPDATED: 'PASSWORD_UPDATED',

  //Home Tabs
  HOME_TAB_SCREEN: 'HOME_TAB_SCREEN',
  FAVOURITE_TAB_SCREEN: 'FAVOURITE_TAB_SCREEN',
  NEARBY_TAB_SCREEN: 'NEARBY_TAB_SCREEN',
  CART_TAB_SCREEN: 'CART_TAB_SCREEN',
  ACCOUNT_TAB_SCREEN: 'ACCOUNT_TAB_SCREEN',

  // Account Tabs
  ORDER_HISTORY_SCREEN: 'ORDER_HISTORY_SCREEN',
  ADDRESS_INFO_SCREEN: 'ADDRESS_INFO_SCREEN',
  ACCOUNT_INFO_SCREEN: 'ACCOUNT_INFO_SCREEN',
  CUSTOMER_SERVICES_SCREEN: 'CUSTOMER_SERVICES_SCREEN',
  SHOP_LOGIN_SCREEN: 'SHOP_LOGIN_SCREEN',
  HELP_SCREEN: 'HELP_SCREEN',
  ADD_ADDRESS: 'ADD_ADDRESS',

  //Help
  MY_ORDERS: 'MY_ORDERS',
});

export type RootStackParamList = {
  HOME_TAB_NAVIGATOR: any;
  AUTH_SCREEN: any;
  LOGIN_SCREEN: any;
  SIGNUP_SCREEN: any;
  SPLASH_SCREEN: any;
  FORGOT_PASSWORD_SCREEN: any;
  FORGOT_PASSWORD_BY_EMAIL_SCREEN: any;
  FORGOT_PASSWORD_BY_SMS_SCREEN: any;
  SET_PASSWORD_SCREEN: any;
  ONBOARDING_SCREEN: any;
  HOME_TAB_SCREEN: any;
  FAVOURITE_TAB_SCREEN: any;
  NEARBY_TAB_SCREEN: any;
  CART_TAB_SCREEN: any;
  ACCOUNT_TAB_SCREEN: any;
  ORDER_HISTORY_SCREEN: any;
  ADDRESS_INFO_SCREEN: any;
  ACCOUNT_INFO_SCREEN: any;
  CUSTOMER_SERVICES_SCREEN: any;
  SHOP_LOGIN_SCREEN: any;
  HELP_SCREEN: any;
  ADD_ADDRESS: any;
  CartTabScreen: any;
  OnlinePaymentScreen: any;
  OrderDetailScreen: any;
  HomeScreen: any;
  RestaurantDetail: {
    title: string;
    price: number;
    time: string;
    img: string;
    rate: number;
    discountPrice: number;
    quantity: number;
  };
  MY_ORDERS: any
};
