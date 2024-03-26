import { StyleSheet, Switch, Text, View } from "react-native";

const SwitchComponet = ({isDark, setIsDark})=>{

    const toggleHandler = ()=> setIsDark(state => !state);


    return (
        <View style={styles.toggleContainer} >
            <Text style={{color:isDark? 'white':'black'}}>{!isDark ? 'dark':'light'}</Text>
            <Switch
                trackColor={{false:'#767577', true:'#81b0ff'}}
                thumbColor={isDark ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleHandler}
                value={isDark}
            />
        </View>
    )
}

export default SwitchComponet;

const styles = StyleSheet.create({
    toggleContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    }
})