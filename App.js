import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './components/FirebaseConfig';
import Login from './components/Login'

export default function App() {
  return (
    <>
      <Login />
    </>
  );
}