import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native'

export function Home() {

  const [newSkill, setNewSkill] = useState('')  
  const [mySkills, setMySkills] = useState([])

  function handleAddNewSkill() {
      setMySkills(oldState => [...oldState, newSkill])
  }

  return(
    <View style={ styles.container }>
        <Text style={ styles.title }>React Native</Text>
        <TextInput 
            style={styles.input} 
            placeholder='New skill'
            placeholderTextColor="#555"
            onChangeText={setNewSkill}
        />
        <TouchableOpacity 
            style={ styles.button }
            activeOpacity={.7}
            onPress={handleAddNewSkill}
            >
            <Text style={ styles.buttonText }>Add</Text>
        </TouchableOpacity>
        <Text style={[ styles.title, { marginVertical: 25 } ]}>
            My Skills
        </Text>

        {
            mySkills.map(skill => (
                <TouchableOpacity key={skill} style={styles.buttonSkill}>
                    <Text style={styles.textSkill}>
                        {skill}
                    </Text>
                </TouchableOpacity>
            ))
        }

        
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#121015'
    },
    title : {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 15
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    },
    buttonSkill: {
        backgroundColor: '#1F1E25',
        padding: 15,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    }
})