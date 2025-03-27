import React, {useState} from 'react';
import  {ScrollView, StyleSheet, View, Text, TextInput, Button} from 'react-native';

const App = () => { //Criando a const do app
  const [numero01, setNumero01] = useState (''); //Criação das const de numero e resultado
  const [numero02, setNumero02] = useState ('');
  const [resultado, setResultado] = useState (null);

  const Somar = () => { //Criando a const de soma

    const soma = parseFloat (numero01) + parseFloat (numero02);
    setResultado (soma);

  };

  return( // o "HTML" do programa 
    <ScrollView style = {styles.corpo}>
    <Text style = {styles.titulo}>CALCULADORA</Text> //título do prorgama
   <View style = {styles.inputContainer}>
    <TextInput style={styles.input} keyboardType = "numeric" value = {numero01} onChangeText = {setNumero01}/> 
    //input de colocar o numero
    <TextInput style={styles.input} keyboardType = "numeric" value = {numero02} onChangeText = {setNumero02}/> 
    //input de colocar o numero
    </View>    
    
    <Button title = "Calcular" onPress={Somar}/> {resultado !== null && <Text style = {styles.valor}>Resultado: {resultado}</Text>} //botão de calcular
    
    
    </ScrollView>
  );

};
  const styles = StyleSheet.create({ // o "CSS" do programa

    corpo: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    },

    titulo:{
      fontSize: 36,
      fontWeight: 'bold',
      marginBottom: 20
    },
    
    inputContainer:{

      flexDirection: 'row',
      justifyContent: 'center',
      width: '80%'
      
    },

    input:{
      flex: 1,
      height: 40,
      borderColor: '#DCDCDC',
      borderWidth: 1,
      marginHorizontal: 5,
      paddingHorizontal: 10,
      borderRadius: 5,
      textAlign: 'center'
    },

    valor: {
      fontSize: 24,
      marginTop: 20,
      fontWeight: 'bold'
    },
    


  });

export default App; //Exportar o aplicativo

