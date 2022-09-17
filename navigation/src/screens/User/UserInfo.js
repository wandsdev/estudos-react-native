import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ContentCenter } from '../../components/ContentCenter'
import { TitleCenter } from '../../components/TitleCenter'

export default function UserInfo({ navigation }) {
  return (
    <ContentCenter>
      <TitleCenter>User Info</TitleCenter>
      <Button title='Producs' onPress={() => navigation.navigate('Product')}></Button>
    </ContentCenter>
  )
}

const styles = StyleSheet.create({})