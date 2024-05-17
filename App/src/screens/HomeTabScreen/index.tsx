import {View, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image} from 'react-native';
import React from 'react';
import {
  SearchIcon,
  DonateBackgroundImage,
  DonateIcon,
} from '../../assets/images';
import Input from '../../components/Input';
import {colors} from '../../theme/colors';
import {LocationInput} from '../../components/LocationInput';
import HeadingText from '../../components/HeadingText';
import {Donate} from '../../components/Donate';
import BookStatus from '../../components/BookStatus';
import {FlatList} from 'react-native-gesture-handler';
import {CARDS_SWIPER_DATA} from '../../data/cards';
import {CardSwiper} from '../../components/CardSwiper';
import {useNavigation} from '@react-navigation/native';
import {cardList, favoriteCardList} from '../../data/cardList';
import CardList from '../../components/CardList';

export default function HomeTabScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View>
        <LocationInput distance={10} title="Istiklal Park" />
      </View>

      <View style={styles.inputView}>
        <TextInput
          placeholder="Ara..."
          style={styles.input}/>
          <Image source={SearchIcon} style={{width: 20, height: 20, position:'absolute', marginStart: 10,}}/>
      </View>

      <View className="mt-5 items-center">
        <BookStatus status="delivered" />
      </View>

      <View className="mb-3">
        <HeadingText title="Haftanın Yıldızları" />
      </View>

      <CardSwiper data={CARDS_SWIPER_DATA} />

      <View className="mt-3">
        <HeadingText title="Yeni Sürpriz Paketler" />
      </View>

      <View className="mt-2 ml-2.5">
        <FlatList
          data={cardList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    title: item.name,
                    price: item.price,
                    time: item.time,
                    rate: item.rate,
                    img: require('../../assets/images/CardBg.png'),
                    discountPrice: item.discountPrice,
                    quantity: item.quantity,
                  })
                }>
                <CardList {...item} />
              </TouchableOpacity>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 20}} />}
          contentContainerStyle={{paddingVertical: 15}}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View className="mt-3">
        <HeadingText title="Sizin için önerilen" />
      </View>

      <View className="mt-2 ml-2.5">
        <FlatList
          data={cardList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    title: 'Burger King',
                    price: item.price,
                    time: item.time,
                    rate: item.rate,
                    img: require('../../assets/images/CardBg.png'),
                    discountPrice: item.discountPrice,
                    quantity: item.quantity,
                  })
                }>
                <CardList {...item} />
              </TouchableOpacity>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          contentContainerStyle={{paddingVertical: 5}}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View className="mt-3">
        <HeadingText title="Kahvaltılık" />
      </View>

      <View className="mt-2 ml-2.5">
        <FlatList
          data={cardList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    title: 'Burger King',
                    price: item.price,
                    time: item.time,
                    rate: item.rate,
                    img: require('../../assets/images/CardBg.png'),
                    discountPrice: item.discountPrice,
                    quantity: item.quantity,
                  })
                }>
                <CardList {...item} />
              </TouchableOpacity>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          contentContainerStyle={{paddingVertical: 5}}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View className="mt-3">
        <HeadingText title="Öğle Yemeği" />
      </View>

      <View className="mt-2 ml-2.5">
        <FlatList
          data={cardList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    title: 'Burger King',
                    price: item.price,
                    time: item.time,
                    rate: item.rate,
                    img: require('../../assets/images/CardBg.png'),
                    discountPrice: item.discountPrice,
                    quantity: item.quantity,
                  })
                }>
                <CardList {...item} />
              </TouchableOpacity>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          contentContainerStyle={{paddingVertical: 5}}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View className="mt-3">
        <Donate
          backgroundImage={DonateBackgroundImage}
          isAvailable={false}
          icon={DonateIcon}
          title="Bağış Yapmak İster Misin ?"
          button={{
            variant: 'light',
            rounded: true,
          }}
          buttonTitle="Bağış yap"
        />
      </View>

      <View className="mt-3">
        <HeadingText title="Favorilerim" />
      </View>

      <View className="mt-2 ml-2.5">
        <FlatList
          data={favoriteCardList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    title: 'Burger King',
                    price: item.price,
                    time: item.time,
                    rate: item.rate,
                    img: require('../../assets/images/CardBg.png'),
                    discountPrice: item.discountPrice,
                    quantity: item.quantity,
                  })
                }>
                <CardList {...item} />
              </TouchableOpacity>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          contentContainerStyle={{paddingVertical: 5}}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputView: {
    margin: 10,
    justifyContent:'center'
  },

  input: {
    fontSize: 14,
    color: colors.placeholder,
    backgroundColor:'white',
    borderRadius: 20,
    paddingStart: 40,
    borderColor: '#D0D5DD',
    borderWidth: 1
  },
  dot: {
    backgroundColor: 'orange',
    width: 8,
    height: 8,  
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDot: {
    backgroundColor: 'white',
  },
  pagination: {
    bottom: 10,
  },
  swiper: {
    flex: 1,
    height: 200,
  },
  shadow: {
    elevation: 2,
    shadowColor: '#52006A',
  },
});
