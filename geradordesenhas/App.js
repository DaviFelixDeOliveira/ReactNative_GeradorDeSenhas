import React, {useState} from 'react';
import  {ScrollView, StyleSheet, View, Text, Button} from 'react-native';

const App = () => {
 //const para cada tipo de senha
  const [senhaNormal, senhaNormalSet]  = useState(1);
  const [senhaPrioritaria, senhaPrioritariaSet]  = useState(1);
  const [senhaAltaPrioridade, senhaAltaPrioridadeSet]  = useState(1);

  //const para armazenar a senha gerada
  const [senhaGerada, senhaGeradaSet] = useState (0);

//const para gerar senha normal
  const GerarSenhaNormal = () => {
    const senha = `N${senhaNormal< 10 ? '0' : '0'}${senhaNormal}`;  
        senhaGeradaSet(senha);
        senhaNormalSet(senhaNormal + 1);
    
    }

    //const para gerar senha Prioritária
  const GerarSenhaPrioriaria = () => {
    const senha = `P${senhaPrioritaria< 10 ? '0' : '0'}${senhaPrioritaria}`;  
        senhaGeradaSet(senha);
        senhaPrioritariaSet(senhaPrioritaria + 1);
    
    }
    

    //const para gerar senha normal
  const GerarSenhaAltaPrioridade = () => {
  const senha = senhaAltaPrioridade < 10 ? `AP00${senhaAltaPrioridade}`: `AP0${senhaAltaPrioridade}`;  
  senhaGeradaSet(senha);
        senhaAltaPrioridadeSet(senhaAltaPrioridade + 1);
    
    }

return (
    <View style={styles.container}>
      <Text style={styles.header}>Gerador de Senhas</Text>
 
      <View style={styles.buttonContainer}>
        <Button title=" Normal" onPress={GerarSenhaNormal} />
        <Button title=" Prioritário" onPress={GerarSenhaPrioriaria} />
        <Button title=" Alta Prioridade" onPress={GerarSenhaAltaPrioridade} />
      </View>
 
      {senhaGerada ? (
        <View style={styles.resultContainer}>
          <Text style={styles.result}>Senha: {senhaGerada}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },


  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 30,

  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#00FF00',
    borderRadius: 5,
  },
  result: {
    fontSize: 18,
    fontWeight: '500',
  },
});



export default App; //Exportar o aplicativo