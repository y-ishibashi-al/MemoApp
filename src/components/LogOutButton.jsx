import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton() {
    const navigation = useNavigation();

    function handlePress() {
        firebase.auth().signOut()
         .then(() => {
            console.log("success");
            navigation.reset({
                index: 0,
                routes: [{name: 'LogIn'}],
            });
         })
         .catch((error) => {
            console.log(error.code, error.message);
            Alert.alert("ログアウトに失敗しました");
         });
    }

    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={StyleSheet.label}>ログアウト</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 4,
    },
    label: {
        fontSize: 14,
        color: 'rgba(255,255,255,0.7)',
    },
});
