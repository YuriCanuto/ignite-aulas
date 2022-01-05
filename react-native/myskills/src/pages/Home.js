import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Platform, FlatList, ScrollView } from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

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

        <Button onPress={handleAddNewSkill} />
        
        <Text style={[ styles.title, { marginVertical: 25 } ]}>
            My Skills
        </Text>

        <FlatList 
            data={mySkills}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
                <SkillCard  skill={item} />
            )}
        />
        
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
    }
})