import React, {useState} from 'react';
import {  StyleSheet,TextInput, Text, View,TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';


import logoImg from '../../assets/Logo2.png';
import profileImg from '../../assets/profile.png';

export default function SignUpProfile({navigation}){
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined }>
          <View style={styles.container}> 
            <View style={styles.header}>
              <Image source={logoImg}/>
            </View>

            <View style={styles.contentProfile}>
              <Image style={styles.imgProfile} source={profileImg} />
              <Text style={styles.textTitle}>Guto Alencar</Text>
              <Text style={styles.textInfo}>Só mais algumas informações para completar seu perfil</Text>
            </View>

            <TextInput 
              placeholder='Telefone'
              style={styles.inputs}
            />
          
            <TextInput 
              placeholder='Modelo do caminhão' 
              style={styles.inputs}
            />
            <TextInput 
              placeholder='Placa' 
              style={styles.inputs}
            />

            <View style={styles.checkbox}>
              <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={() => toggleCheckBox ? setToggleCheckBox(false) : setToggleCheckBox(true)}
              />
              <Text>Li e concordo com os termos do Corujão IOT.</Text>
            </View>
          
            <Text style={styles.txtLegend}></Text>
            
           

            <View style={styles.contentButton}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.textBtn}>Próximo</Text>
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
  },

  contentProfile:{
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textTitle:{
    marginTop: 20,
    marginBottom: 10,
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

  textInfo:{
    color: '#828282',
    textAlign: 'center',
    marginBottom: 30

  },

  imgProfile:{
    borderColor:'#f4f4f4',
    borderRadius: 200,
    width: 150,
    height: 150
    
    

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
  
  checkbox:{
    alignItems: 'center',
    flexDirection: 'row'
  },


})