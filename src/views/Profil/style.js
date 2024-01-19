import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
        backgroundColor: 'green',
        padding: '10%',
        alignItems: 'center',
        marginBottom: '5%',
        },
    textStyle1: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: '2%',
        marginLeft:'2%',
      },
    separator: {
        height: 1, 
        width:'90%',
        backgroundColor: 'green', 
        alignSelf: 'center',
      },
    presablebutton : {
        width: '80%',
        height: '5%',
        alignSelf: 'center',
      },
    textPressable:{
        color: 'green',
        fontSize: 15,
        textDecorationLine: 'underline',
    },
});