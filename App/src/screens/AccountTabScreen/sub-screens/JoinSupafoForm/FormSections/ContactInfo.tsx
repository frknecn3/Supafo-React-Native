import { Controller } from 'react-hook-form';
import { StyleSheet, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Input from "../../../../../components/Input";
import Text from "../../../../../components/Text";

export default function ContactInfo({ control, errors }: { control: any, errors: any }) {

    return (
        <View style={styles.main}>
            <View style={{ marginTop: 3, width: '100%', rowGap: 10 }}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder="Telefon Numarası"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            textContentType="telephoneNumber"
                            dataDetectorTypes ="phoneNumber"
                            keyboardType="phone-pad"
                        />
                    )}
                    name="tel_no"
                />
                {errors.tel_no && <Text>Bu alanın doldurulması zorunludur.</Text>}

            </View>
            <View style={{ marginTop: 16, width: '100%', }}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder="Email"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            textContentType="emailAddress"
                            keyboardType="email-address"
                        />
                    )}
                    name="email"
                />
                {errors.vergi_no && <Text>Bu alanın doldurulması zorunludur.</Text>}

            </View>
            <View style={{ marginTop: 16, width: '100%', }}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder="Web Sitesi"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={{ width: "100%" }}
                            textContentType="URL"
                            keyboardType="url"
                        />
                    )}
                    name="web_sitesi"
                />
                {errors.web_sitesi && <Text>Bu alanın doldurulması zorunludur.</Text>}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 20,
        width: "100%",
    },
    headerTxt: {
        padding: 10,
        color: '#333333',
        fontSize: moderateScale(18),
        fontWeight: '500',
        lineHeight: 19,
    },
    icon: {
        width: 18,
        height: 15,
    },
    Input: {
        width: "100%",
    }
});