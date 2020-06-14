import * as React from 'react';
import { StyleSheet,TextInput, Text, View,TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useNavigation,useRoute} from '@react-navigation/native';

import logoImg from '../../assets/Logo2.png';
import f from '../../icons/f.svg';
import g from '../../icons/g.svg';


import { CreateAccountButton, CreateAccountButtonText,} from './styles';


export default function SignIn(){
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined }>
          <View style={styles.container}> 
            <View style={styles.header}>
              <Image source={logoImg}/>
            </View>

            <View style={styles.content}>
              <Text style={styles.textTitle}>Entrar</Text>
            </View>

            <TextInput 
              placeholder='Email'
              style={styles.inputs}
            />
            <TextInput 
              placeholder='Senha' 
              style={styles.inputs}
            />
            <Text style={styles.txtLegend}>Esqueceu a senha? Recupear.</Text>
            
           

            <View style={styles.contentButton}>
              <TouchableOpacity onPress={() => {navigation.navigate('SignUpProfile')}} style={styles.btn}>
                <Text style={styles.textBtn}>Entrar</Text>
              </TouchableOpacity>
              
              <Text style={styles.textOu}>Ou</Text>

            
              <TouchableOpacity  onPress={() => {navigation.navigate('Login')}} style={styles.btnFac}>
                  <View style={styles.iconText}>
                    <Icon style={styles.icon} name="facebook" color='#fff' size={20} />
                    <Text style={styles.textFac}>Entrar com Facebook</Text>
                  </View>
              </TouchableOpacity>
             

            <TouchableOpacity onPress={() => {navigation.navigate('Login')}} style={styles.btnGoo}>
                <View style={styles.iconText}>
                    <Icon style={styles.icon} name="google" color='#fff' size={20} />
                    <Text style={styles.textGoo}>Entrar com Gmail</Text>
                 </View>
            </TouchableOpacity>

            
              
            </View>

          </View>

        </KeyboardAvoidingView>

        <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.textAccount}>Não tenho uma conta?</Text>
          <Text style={styles.textEntrar}> Criar uma conta</Text>
        </CreateAccountButton>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,    
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
    marginTop: 20,
    marginBottom: 40,
    color: '#2C2445',
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

  txtLegend:{
    color: '#828282',
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

  contentButton:{
    alignItems: 'center',
  },  

  textOu:{
    marginTop: 30,
    fontWeight: 'bold',
  },  

  btnFac: {
    marginTop: 15,
    width: 300,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#4A89C8',
    borderRadius: 4
    
  },

  textFac:  {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20
  },

  btnGoo: {
    marginTop: 20,
    width: 300,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#E85454',
    borderRadius: 4,
    alignItems: 'center',
    paddingRight:  20
   
    
  },

  textGoo:  {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 40
    
  },

  textAccount: {
    color: '#fff',
  },

  textEntrar:{
    color: '#FF9A00',
    
  },

  iconText:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
    
  },

  
})