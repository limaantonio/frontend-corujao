import * as React from 'react';
import { StyleSheet,TextInput, Text, View,TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';
import {useNavigation,useRoute} from '@react-navigation/native';

import logoSearch from '../../assets/LogoLocalizando.png';

export default function Emparelhamento(){
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined }>
          <View style={styles.container}> 
            <View style={styles.content}>
              <Image source={logoSearch}  />
              <Text style={styles.textTitle}>Localizando sensores</Text>
              <Text style={styles.textInfo}>Guto, estamos procurando os sensores instalados.</Text>
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
    marginTop: 120,
    alignItems: 'center',
  },

  textTitle:{
    marginTop: 20,
    marginBottom: 20,
    color: '#2C2445',
    fontSize: 24,
    fontWeight: 'bold',
  },

  textInfo:{
    color: '#828282',
    fontSize: 16,
    textAlign: 'center'
  }
})