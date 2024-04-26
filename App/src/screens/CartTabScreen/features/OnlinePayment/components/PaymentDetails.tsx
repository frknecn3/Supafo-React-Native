import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import OrderSummary from './OrderSummary';

const PaymentDetails = () => {
  const [cartNumber, setCartNumber] = useState('');
  const [orderNote, setOrderNote] = useState('');

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Kart No</Text>
        <TextInput
          style={styles.input}
          onChangeText={(txt: string) => setCartNumber(txt)}
          placeholder={'0000 1111 2222 3333'}
        />
        <View style={styles.wrapper}>
          <View>
            <Text style={styles.title}>Son Kullanma Tarihi</Text>
          </View>
          <View>
            <Text style={styles.title}>CVV</Text>
          </View>
        </View>
        <View>
          <Text>3D Secure ile ödemek istiyorum</Text>
        </View>
        <View style={styles.noteWrapper}>
          <Text style={styles.title}>Sipariş Notu</Text>
          <TextInput
            style={styles.noteInput}
            onChangeText={txt => setOrderNote(txt)}
            placeholder={'Lütfen sipariş notunuzu giriniz'}
            multiline
            numberOfLines={5}
            textAlignVertical={'top'}
          />
        </View>
      </View>
      <OrderSummary />
      <View style={styles.label}>
        <View style={{flexDirection: 'row'}}>
          {/*Radio Button eklenecek */}
          <Text style={styles.labelTxt}>
            Ön Bilgilendirme Formunu ve Mesafeli Satış sözleşmesini okudum,kabul
            ediyorum.
          </Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Sepeti Onayla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentDetails;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'space-between',
    flex: 1,
  },
  container: {
    margin: 10,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  noteWrapper: {margin: 10},
  input: {
    backgroundColor: '#FEFEFE',
    borderRadius: 20,
    margin: 5,
    borderWidth: 1.5,
    borderColor: 'lightgray',
  },
  noteInput: {
    backgroundColor: '#FEFEFE',
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#D0D5DD',
    height: 100,
    padding: 10,
  },
  title: {
    color: '#333333',
    fontSize: 16,
    fontWeight: '600',
    padding: 5,
    margin: 5,
  },
  dropDownbtn: {
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    width: 60,
    margin: 10,
    padding: 5,
  },
  label: {
    backgroundColor: '#FEFEFE',
    padding: 20,
    justifyContent: 'flex-end',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  labelTxt: {
    padding: 10,
    fontSize: 13,
    color: '#333333',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#66AE7B',
    padding: 5,
    borderRadius: 10,
    width: '100%',
    margin: 10,
  },
  btnTxt: {
    textAlign: 'center',
    color: '#FEFEFE',
    padding: 5,
    fontSize: 16,
    fontWeight: '600',
  },
});