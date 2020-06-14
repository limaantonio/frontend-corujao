import * as React from 'react';
import { StyleSheet,TextInput, Text, View,TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {useNavigation,useRoute} from '@react-navigation/native';


export default function ResetPassword(){
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined }>
          <View style={styles.container}> 
            <View style={styles.header}>
            <TouchableOpacity onPress={() => {navigation.navigate('SignIn')}} style={styles.buttonArrow}>
                  <Icon name="arrow-left" size={30} color="#fff"/>
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              <Text style={styles.textTitle}>Recuperar senha</Text>
            </View>

            <TextInput 
              placeholder='Email'
              style={styles.inputs}
            />

            <View style={styles.contentButton}>
              <TouchableOpacity onPress={() => {navigation.navigate('SignUpProfile')}} style={styles.btn}>
                <Text style={styles.textBtn}>Entrar</Text>
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
    backgroundColor: '#2C2445'    
  },

  content:{
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textTitle:{
    marginTop: 120,
    marginBottom: 40,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  inputs:{
    height: 60,
    backgroundColor: '#f4f4f4',
    marginBottom: 12,
    paddingLeft: 20,
    borderRadius: 8
  },

 

  btn: {
    marginTop: 100,
    width: 320,
    height: 50,
    justifyContent: 'center',
    borderColor: '#ff9a00',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4
    
  },

  textBtn:  {
    textAlign: 'center',
    color: '#FF9A00',
    fontWeight: 'bold',
    fontSize: 18
  },

  contentButton:{
    alignItems: 'center',
  },  

  textEntrar:{
    color: '#FF9A00',
    
  },
})