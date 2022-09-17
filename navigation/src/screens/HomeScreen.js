import React from 'react'
import { Button } from 'react-native'
import { ContentCenter } from '../components/ContentCenter'
import { TitleCenter } from '../components/TitleCenter'

export const HomeScreen = ({ navigation }) => {
  function handleOnPress() {
    navigation.navigate('Product');
  }

  return (
    <ContentCenter>
      <TitleCenter>Home Screen</TitleCenter>
      <Button title='Producs' onPress={handleOnPress}></Button>
      <Button  title='Signin' onPress={() => navigation.replace('Signin')}></Button>
      <Button  title='User' onPress={() => navigation.navigate('User')}></Button>
    </ContentCenter>
  )
}
