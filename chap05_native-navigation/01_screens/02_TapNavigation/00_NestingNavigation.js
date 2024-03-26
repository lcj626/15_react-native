import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TapHome from "./01_TapHome";
import TapView from "./02_TapView";
import {Ionicons} from '@expo/vector-icons';

const Tap = createBottomTabNavigator();

const NestingNavigation = () => {


    return(
        <Tap.Navigator>
            <Tap.Screen
                name="home"
                component={TapHome}
                options={{
                    tabBarIcon: ({focused}) => focused ? (<Ionicons name="home" size={30} color="red" />) : (<Ionicons name="home" size={30} color="black" />),
                    tabBarBadge:3
                }}
            />
            <Tap.Screen
                name="rootPage"
                component={TapView}    
                options={{
                    tabBarIcon: ({focused}) => focused ? (<Ionicons name="eye-outline" size={30} color="red" />) : (<Ionicons name="eye-outline" size={30} color="black" />)
                     
                }}
            />
        </Tap.Navigator>

    )
}


export default NestingNavigation;
