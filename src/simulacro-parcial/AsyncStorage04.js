import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '@rneui/themed';

const AsyncStorageParcial04 = () => {
  const [codigo, setCodigo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [facultas, setFacultas] = useState('');
  const [alumnos, setAlumnos] = useState([]);
  const [editingCodigo, setEditingCodigo] = useState(null);

  useEffect(() => {
    loadAlumnos();
  }, []);

  const saveOrUpdateAlumno = async () => {
    if (codigo && carrera && facultas) {
      if (editingCodigo !== null) {
        const updatedAlumnos = alumnos.map(alumno =>
          alumno.codigo === editingCodigo ? { codigo, carrera, facultas } : alumno
        );
        await AsyncStorage.setItem('alumnos', JSON.stringify(updatedAlumnos));
        setAlumnos(updatedAlumnos);
        setEditingCodigo(null);
      } else {
        const newAlumno = { codigo, carrera, facultas };
        const updatedAlumnos = [...alumnos, newAlumno];
        await AsyncStorage.setItem('alumnos', JSON.stringify(updatedAlumnos));
        setAlumnos(updatedAlumnos);
      }
      setCodigo('');
      setCarrera('');
      setFacultas('');
    }
  };

  const loadAlumnos = async () => {
    const storedAlumnos = await AsyncStorage.getItem('alumnos');
    if (storedAlumnos) {
      setAlumnos(JSON.parse(storedAlumnos));
    }
  };

  const deleteAlumno = async (codigoToDelete) => {
    const updatedAlumnos = alumnos.filter(alumno => alumno.codigo !== codigoToDelete);
    await AsyncStorage.setItem('alumnos', JSON.stringify(updatedAlumnos));
    setAlumnos(updatedAlumnos);
  };

  const editAlumno = (alumno) => {
    setCodigo(alumno.codigo);
    setCarrera(alumno.carrera);
    setFacultas(alumno.facultas);
    setEditingCodigo(alumno.codigo);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Código"
        value={codigo}
        onChangeText={setCodigo}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />
      <TextInput
        style={styles.input}
        placeholder="Facultas"
        value={facultas}
        onChangeText={setFacultas}
      />
      <Button
        title={editingCodigo !== null ? "Actualizar Alumno" : "Agregar Alumno"}
        onPress={saveOrUpdateAlumno}
        buttonStyle={styles.submitButton}
        titleStyle={styles.buttonText}
      />

      <Text style={styles.title}>Lista de Alumnos:</Text>
      <FlatList
        data={alumnos}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => (
          <View style={styles.alumnoContainer}>
            <Text>{item.codigo} - {item.carrera} - {item.facultas}</Text>
            <View style={styles.buttonContainer}>
              <Button
                icon={{ name: 'edit', type: 'font-awesome', size: 15, color: 'white' }}
                buttonStyle={[styles.button, styles.editButton]}
                onPress={() => editAlumno(item)}
              />
              <Button
                icon={{ name: 'trash', type: 'font-awesome', size: 15, color: 'white' }}
                buttonStyle={[styles.button, styles.deleteButton]}
                onPress={() => deleteAlumno(item.codigo)}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
  alumnoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#007BFF',
  },
  editButton: {
    backgroundColor: '#007BFF',
  },
  deleteButton: {
    backgroundColor: '#FF5733',
  },
});

export default AsyncStorageParcial04;
