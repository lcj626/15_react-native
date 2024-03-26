import { Button, Text, View } from "react-native";


const StackComponent=({route, navigation})=>{

    const page = ()=>{
        navigation.navigate("StackView");
    }

    const tapRouter = ()=>{
        navigation.navigate("NestingNavigation");
    }

    return(
        <View>
            <Text>
                Stack View 화면
            </Text>
            <Button onPress={page} title="이동"/>
            <View>
                <Text>Tap 메뉴 이동</Text>
                <Button onPress={tapRouter} title="Tap 이동"/>
            </View>
        </View>
    )
}

export default StackComponent;