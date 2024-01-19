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
    textContainer : {
        backgroundColor: 'green',
        padding:16,
        borderRadius: 40,
        width: '80%',
        height: '13%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1, 
        borderColor: 'black',
      },
      textStyle1: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      textStyle2: {
        color: 'white',
        fontSize: 12,
      },
      textStyle3: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        padding: 16,
      },
      textStyle4: {
        color: 'black',
        fontSize: 22,
        padding: 16,
      },
      Container2 : {
        flex:1,
        backgroundColor: 'lightgreen',
        width: '80%',
        height: '10%',
        borderRadius: 40,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        //borderWidth: 1, 
        //borderColor: 'black',
        marginBottom: '4%',
      },
      imageNeoBank:{    
      },
      separator: {
        height: 1, 
        width:'90%',
        backgroundColor: 'green', 
        alignSelf: 'center',
      },
});
