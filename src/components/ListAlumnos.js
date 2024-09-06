import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const ListAlumnos = () => {
  // Estados para manejar los campos de entrada
  const [ci, setCi] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [alumnos, setAlumnos] = useState([]);

  // Función para agregar un alumno a la lista
  const agregarAlumno = () => {
    if (ci && nombre && email) {
      setAlumnos([...alumnos, { ci, nombre, email }]);
      
      setCi('');
      setNombre('');
      setEmail('');
    }
  };

  // Función para eliminar todos los alumnos de la lista
  const eliminarAlumnos = () => {
    setAlumnos([]);
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cédula"
        value={ci}
        onChangeText={setCi}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Agregar Alumno" onPress={agregarAlumno} />
      <Button
        title="Eliminar Todos"
        onPress={eliminarAlumnos}
        disabled={alumnos.length === 0}
      />
      <FlatList
        data={alumnos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.text}>CI: {item.ci}</Text>
            <Text style={styles.text}>Nombre: {item.nombre}</Text>
            <Text style={styles.text}>Correo: {item.email}</Text>
          </View>
        )}
      />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
  },
});

export default ListAlumnos;
