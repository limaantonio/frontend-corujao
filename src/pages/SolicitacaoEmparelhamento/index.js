import * as React from 'react';
import { StyleSheet,TextInput, Text, View,TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';
import {useNavigation,useRoute} from '@react-navigation/native';

import itemImg from '../../assets/itemImg2.png';
import Icon from 'react-native-vector-icons/Feather';

export default function SolicitacaoEmparelhamento(){
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined }>
          <View style={styles.container}>
            <View style={styles.content}>
              <Text style={styles.textTitle}>5 sensores encontrados!</Text>
            </View>

           
            <View style={styles.list}>
              <Image source={itemImg}/>
              <Text style={styles.textItem}>Portas - x523</Text>
              <Icon name="check" size={26} color="#E7E7E7"/>
            </View>

            <View style={styles.list}>
              <Image source={itemImg}/>
              <Text style={styles.textItem}>Portas - x523</Text>
              <Icon name="check" size={26} color="#E7E7E7"/>
            </View>

            <View style={styles.list}>
              <Image source={itemImg}/>
              <Text style={styles.textItem}>Portas - x523</Text>
              <Icon name="check" size={26} color="#E7E7E7"/>
            </View>

            <View style={styles.list}>
              <Image source={itemImg}/>
              <Text style={styles.textItem}>Portas - x523</Text>
              <Icon name="check" size={26} color="#E7E7E7"/>
            </View>

            <View style={styles.contentButton}>
              <TouchableOpacity onPress={() => {navigation.navigate('MyTabs')}} style={styles.btn}>
                <Text style={styles.textBtn}>Sincronizar</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {navigation.navigate('SignUpProfile')}} style={styles.btn2}>
                <Text style={styles.textBtn}>Realizar nova busca</Text>
              </TouchableOpacity>
            </View>
          </View>

        </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    backgroundColor: '#fff'    
  },

  content:{
    marginTop: 100,
    alignItems: 'center',
  },

  textTitle:{
    marginBottom: 80,
    color: '#2C2445',
    fontSize: 24,
    fontWeight: 'bold',
  },

  list:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },

  textItem:{
    marginLeft: 20,
    marginRight: 120
  },

  btn: {
    marginTop: 40,
    width: 320,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#ff9a00',
    borderRadius: 4
    
  },

  textBtn:  {
    textAlign: 'center',
    color: '#2c2445',
    fontWeight: 'bold',
    fontSize: 18
  },

  btn2: {
    marginTop: 20,
    width: 320,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#2C2445',
    
  },

  contentButton:{
    marginTop: 50,
    alignItems: 'center',
  },
})