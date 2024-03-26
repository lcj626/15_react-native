
import {Ionicons} from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

const IconButton = ({icon, size, color, onPress}) =>{

    return(
        <Pressable onPress={onPress} style={({pressd}) => [styles.button, pressd && styles.pressed]}>
            <Ionicons name={icon} size={size} color={color} />
        </Pressable>
    )
}


export default IconButton;

const styles = StyleSheet.create({
    button:{
        padding:8,
        margin:4,
        justifyContent:'center',
        alignItems:'center'
    },
    pressed:{
        opacity:0.7
    }
})