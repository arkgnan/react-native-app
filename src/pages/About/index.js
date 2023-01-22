import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext} from 'react';
import {GlobalContext} from '../../context/GlobalContext';
import {SanbercodeLogo} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';

const AboutScreen = ({navigation}) => {
  const {state} = useContext(GlobalContext);
  const {user} = state;
  return (
    <ScrollView>
      <View>
        <Image source={SanbercodeLogo} />
      </View>
      <View
        style={{
          paddingHorizontal: 8,
          borderBottomColor: '#dedede',
          borderBottomWidth: 1,
          paddingVertical: 12,
        }}>
        <Text>
          Anda login dengan {user.email}.{'\n'}Terima kasih telah mencoba
          aplikasi ini
        </Text>
      </View>
      <View style={{paddingVertical: 6, paddingHorizontal: 10, marginTop: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          Frequently Ask Questions
        </Text>
        <View>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: '#e5e5e5',
              marginBottom: 10,
              padding: 8,
            }}>
            <View style={{marginBottom: 5}}>
              <Text style={{fontWeight: 'bold'}}>Question:</Text>
              <Text>Apa tujuan dari aplikasi ini?</Text>
            </View>
            <View style={{marginBottom: 5}}>
              <Text style={{fontWeight: 'bold'}}>Answer:</Text>
              <Text>
                Aplikasi ini dibuat sebagai tugas akhir untuk bootcamp react
                native sanbercode batch ke 40
              </Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: '#e5e5e5',
              marginBottom: 10,
              padding: 8,
            }}>
            <View style={{marginBottom: 5}}>
              <Text style={{fontWeight: 'bold'}}>Question:</Text>
              <Text>Siapa pembuat aplikasi ini</Text>
            </View>
            <View style={{marginBottom: 5}}>
              <Text style={{fontWeight: 'bold'}}>Answer:</Text>
              <Text>
                Aplikasi ini dibuat oleh Dedi Ananto dengan menggunakan
                referensi dari materi yang telah diajarkan selama bootcamp
              </Text>
            </View>
          </View>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: '#e5e5e5',
              marginBottom: 10,
              padding: 8,
            }}>
            <View style={{marginBottom: 5}}>
              <Text style={{fontWeight: 'bold'}}>Question:</Text>
              <Text>
                Apa saja fitur atau stack tech yang digunakan dalam pembuatan
                aplikasi
              </Text>
            </View>
            <View style={{marginBottom: 5}}>
              <Text style={{fontWeight: 'bold'}}>Answer:</Text>
              <Text>
                Aplikasi ini dibuat menggunakan React Native 0.71 dengan
                menggunakan react context sebagai state managementnya serta
                firebase auth. Dalam aplikasi ini juga memanfaatkan API public
                dari https://api.chucknorris.io/
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
