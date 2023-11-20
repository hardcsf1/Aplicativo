// Importação de componentes e definição da lista de transações
import { StyleSheet, Text, View, FlatList } from 'react-native';


import Header, {} from '../../components/Header'
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  // Exemplos de transações financeiras
    {
        id: 1,
        label: 'Conta de luz',
        value: '150,30',
        date: '18/11/2023',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix Cliente X',
        value: '650,00',
        date: '28/11/2023',
        type: 1 // receita /entradas
    },
    {
        id: 3,
        label: 'Sálario',
        value: '5.550,00',
        date: '05/11/2023',
        type: 1 // receita /entradas
    },
    {
      id: 3,
      label: 'Compra Steam',
      value: '250,00',
      date: '05/11/2023',
      type: 1 // receita /entradas
    },
];

// Componente principal que monta a tela inicial do aplicativo
export default function Home() {
  // Estrutura de layout com os componentes
  return (
    <View style={styles.container}>
        <Header name="Gabriel Garcia"/> {/* Cabeçalho com o nome do usuário */}
      
      <Balance saldo="6.500,00" gastos="-128,00" /> {/* Componente de saldo e gastos */}

      <Actions/>

      <Text style={styles.title}>Últimas movimentações</Text>

{/* Lista de transações financeiras */}
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id) }
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Movements data={item}/> }
      />

    </View>
  );
}

// Estilos para os elementos na tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
    color: '#333', // Cor para o título
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
    color: '#666', // Cor para a lista de movimentações
  }
});
