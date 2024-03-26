import { StyleSheet, View } from "react-native";
import ViewComponent from "./01_basicComponent/01_ViewComponent";
import { useState } from "react";
import TextInputComponent from "./01_basicComponent/03_TextInputComponent";
import TextComponent from "./01_basicComponent/02_TextComponent";
import ImageComponent from "./01_basicComponent/04_ImageComponent";
import ScrollViewComponent from "./01_basicComponent/05_ScrollViewComponent";

export default function App() {
  // react에서 "state"는 컴포넌트의 상태를 나타내며,
  // 해당 상태의 변경에 따라 UI를 업데이트할 수 있는 hooks이다.
  // 자세한 내용은 react의 hooks 파트에서 다룰 것 이다.
  const [name, setName] = useState("");

  const onChangeHandler = (name) => {
    setName(name);
  }

  return (
    <ScrollViewComponent>
      <View style={styles.container}>
        <ViewComponent isTrue={true} styles={styles.viewComponent} />
        <TextInputComponent onChangeHandler={onChangeHandler} name={name} styles={styles.textInputComponent} />
        <TextComponent name={name} styles={styles.textComponent} />
        <ImageComponent isTrue={true} styles={styles.imageComponent} />
        <ImageComponent isTrue={false} styles={styles.imageComponent} />
      </View>
    </ScrollViewComponent>
  );
}

const styles = StyleSheet.create({
  scrollrContainer: {
    flex: 1
  },
  container: {
    width: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFF99',
    marginTop: 20
  },
  viewComponent: {
    alignItems: 'center',
    backgroundColor: "yellow",
    marginVertical: 2,
    borderWidth: 1,
    marginHorizontal: 4,
    width: "80%"
  },
  textInputComponent: {
    borderColor: 'black',
    borderRadius: 3,
    fontSize: 15,
    borderWidth: 1,
    marginHorizontal: 4,
    marginVertical: 3,
    paddingHorizontal: 4,
    width: "80%"
  },
  textComponent: {
    marginHorizontal: 4,
    borderWidth: 1,
    paddingHorizontal: 3,
    marginVertical: 3,
    fontSize: 20,
    width: "80%"
  },
  imageComponent: {
    height: 300,
    marginTop: 10,
    borderRadius: 10,
    width: "80%"
  }
});
