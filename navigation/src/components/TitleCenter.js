import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const TitleCenter = ({ children }) => {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    title: {
        color: '#1a54aa',
        fontSize: 24,
        fontWeight: 'bold',
    }
});