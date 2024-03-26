import { View,Text } from "react-native"

const ViewComponent = ({isTrue, styles})=>{

    if(!isTrue){
        return( <View>
            오류
        </View>)
    }

    return (
        <View style={styles}>
            <Text>i'm 썬더 람쥐</Text>
        </View>
    )
}

export default ViewComponent;