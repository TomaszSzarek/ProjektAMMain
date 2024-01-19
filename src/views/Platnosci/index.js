import React from 'react';
import {Pressable, Text, View, Image} from "react-native";
import { styles } from './style';

export function Platnosci({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../img/NeoBank.png')} style={styles.imageNeoBank} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textStyle2}>123413242</Text>
                <Text style={styles.textStyle3}>Karta płatnicz do konta</Text>
            </View>
            <View style={styles.separator} />
            <Pressable onPress={() => navigation.navigate('PrzelewZwykly')}>
                <Text style={styles.textStyle4}>Przelew zwykły</Text>
            </Pressable>
            <View style={styles.separator2} />
            <Pressable onPress={() => navigation.navigate('PrzelewNaTelefon')}>
                <Text style={styles.textStyle4}>Przelew na telefon</Text>
            </Pressable>
        </View>
    );
}
