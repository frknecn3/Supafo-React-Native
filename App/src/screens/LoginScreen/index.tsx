import React, { useState } from 'react';
import Screen from '../../components/Screen';
import {Image, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {EmailIcon, Icon, PasswordIcon} from '../../assets/images';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Divider from '../../components/Divider';
import SocialButtons from './components/SocialButtons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import routes, {RootStackParamList} from '../../navigation/routes';
import {useDispatch} from 'react-redux';
import {updateToken} from '../../store/slices/userSlice';
import Text from '../../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type FormData = {
  email: string;
  password: string;
};


function LoginScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data) => {
    const { email, password } = data;
    console.log(data);
    dispatch(updateToken('test'));
  });

  return (
    <View style={styles.main}>
      <Text style={styles.headerTxt}>Giriş Yap</Text>
      <Image
        source={Icon}
        resizeMode="contain"
        className="h-[120px] mt-[37px]"
      />
      <View className="mt-[34px] w-full" style={{rowGap: 20}}>
      <View style={{width:'100%', alignItems:'center'}}>
      <Controller
        {...register('email')}
        name="email"
        control={control}
        rules={{
          required: 'Mail girmek zorunludur',
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="E-mail"
              />
              <View style={{position:'absolute', justifyContent:'center', left:10 , top: 25}}>
                <AntDesign name={'mail'} size={18}/>
              </View>
            </View>
          );
        }}
      />

      {errors.email && (
        <Text style={styles.errTxt}>{errors.email.message} </Text>
      )}
         <Controller
        {...register('password')}
        name="password"
        control={control}
        rules={{
          required: 'Şifre girmek zorunludur',
        }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Şifre"
              />
              <View style={{position:'absolute', justifyContent:'center', left:10 , top: 25}}>
                <Feather name={'lock'} size={18}/>
              </View>
            </View>
          );
        }}
      />

      {errors.password && (
        <Text style={styles.errTxt}> {errors.password.message} </Text>
      )}
      </View>

        <View className="items-end" style={{marginBottom: 20}}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.FORGOT_PASSWORD_SCREEN)}>
            <Text
              className="text-[#66AE7B]"
              style={{fontSize: 12, paddingEnd: 5}}>
              Şifreni mi unuttun?
            </Text>
          </TouchableOpacity>
        </View>
        <Button
          onPress={onHandleSubmit}
          className="mt-[10px] rounded-[20px]">
          Giriş Yap
        </Button>
      </View>
      <View className="my-[33px]">
        <Divider text="OR" />
      </View>
      <SocialButtons
        googleOnPress={() => {}}
        appleOnPress={() => {}}
        fbOnPress={() => {}}
      />
      <View className="flex-row mt-[33px]">
        <Text style={{color: '#333333'}}>Hesabın yok mu? </Text>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate(routes.SIGNUP_SCREEN)}>
          <Text
            className="text-[#66AE7B]"
            style={{textDecorationLine: 'underline', paddingStart: 5}}>
            Kayıt ol
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  headerTxt: {
    color: '#333333',
    fontSize: 18,
    marginBottom: 20,
  },
  inputContainer: {
    alignItems: 'center',
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.5,
    width: '100%',
    borderColor: 'lightgray',
    paddingStart: 35
  },

  errTxt: {
    color: 'red',
    paddingStart: 20,
    fontWeight: '600',
  },
});
