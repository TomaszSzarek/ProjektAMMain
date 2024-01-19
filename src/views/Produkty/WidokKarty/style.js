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
        flex: 1,
      },
      textStyle2: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: '2%',
        alignSelf: 'center',
        flex: 1,
      },
      textStyle3: {
        color: 'black',
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: '2%',
        alignSelf: 'center',
        flex: 1,
      },
      textStyle4: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: '2%',
        marginLeft:'5%',
        flex: 1,
      },
      textStyle5: {
        color: 'black',
        fontSize: 15,
        marginBottom: '2%',
        marginLeft:'5%',
        flex: 1,
      },
    separator: {
        height: 1, 
        width:'90%',
        backgroundColor: 'green', 
        alignSelf: 'center',
        flex: 1,
      },
    presablebutton : {
        width: '80%',
        height: '5%',
        alignSelf: 'center',
        flex: 1
      },
    textPressable:{
        color: 'green',
        fontSize: 15,
        textDecorationLine: 'underline',
        flex: 1
    },
    textKarta1:{
        color: 'black',
        fontSize: 15,
        position: 'absolute',
        top: '20%', 
        right: '20%',
    },
    textKarta2:{
        color: 'black',
        fontSize: 15,
        position: 'absolute',
        alignSelf: 'center',
        bottom: '30%'
    },
    image:{
        alignSelf: 'center',
        width: '80%',   
    }
});
