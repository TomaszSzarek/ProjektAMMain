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
      textbutton : {
        backgroundColor: 'green',
        padding: 16,
        borderRadius: 40,
        width: '80%',
        height: '10%',
        margin:'10%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1, 
        borderColor: 'black',
      },
      text:{
        color: "white",
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: 'bold',
      }
})
