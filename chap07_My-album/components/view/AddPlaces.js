import { insertPlace } from "../../util/query";
import PlaceForm from "../places/PlaceForm";


const AddPlace = ({navigation}) =>{

    const craetePlaceHandler = async (place) =>{
        await insertPlace(place);
        navigation.navigate("Allplaces");
    }

    return <PlaceForm onCreatePlace= {craetePlaceHandler}/>
}

export default AddPlace;
