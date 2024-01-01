import { StatusBar } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Image,
  Text,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {TabDisplayContext} from "../context/TabDisplayContextProvider";
import { useIsFocused } from '@react-navigation/native';

export default function ChatBot() {
  const [text, updateText] = useState("");

  const [chatData, updateChatData] = useState([
    //FIFO que
    // { message: 'Server 2' , id: '2', style: styles.serverSide, bubble: styles.serverMessage},
    // { message: 'Client 1' , id: '1', style: styles.clientSide, bubble: styles.clientMessage},
  ]);
  function changeHandler(Value) {
    updateText(Value);
    console.log(Value);
  }

  function submitText() {
    submitHandler(text);
    t1.setNativeProps({ text: "" });
  }

  const submitHandler = (text) => {
    updateChatData((prevChatData) => {
      return [
        {
          message: text,
          id: Math.floor(Math.random() * 100) + 1,
          style: styles.clientSide,
          bubble: styles.clientMessage,
        },
        ...prevChatData,
      ];
    });
  };

  var t1; //reference for TextInput

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <View style={{ flex: 1,}}>
        {/* header */}
        

        {/* Chats */}
        <FlatList
          data={chatData}
          keyExtractor={(item) => item.id.toString()}
          inverted={true}
          renderItem={({ item }) => (
            <>
              {/* <ChatMessage /> */}
              <View style={item.style}>
                <Text numberOfLines={1} style={item.bubble}>
                  {item.message}
                </Text>
              </View>
            </>
          )}
        />

        {/* text input */}
        <View style={{ backgroundColor: "#2D2D2D" }}>
          <View
            style={{
              height: 50,
              marginHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              ref={(Component) => (t1 = Component)}
              placeholder="Type Message"
              style={{
                backgroundColor: "#484848",
                borderRadius: 30,
                fontSize: 15,
               
                height: 40,
                width: "87%",
                paddingLeft: 20,
                color: "white",
              }}
              placeholderTextColor="#8D8D8D"
              onChangeText={(Value) => changeHandler(Value)}
            />
            <TouchableOpacity onPress={submitText}>
              <View
                style={{
                  backgroundColor: "#006A5D",
                  padding: 10,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 10,
                }}
              >
                {/* <Image
                  source={require("../asset/send.png")}
                  style={{ height: 22, width: 22 }}
                /> */}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  clientSide: {
    alignItems: "flex-end",
  },
  clientMessage: {
    color: "white",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 50,
    textAlign: "right",
    backgroundColor: "#404040",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  serverSide: {
    alignItems: "flex-start",
  },
  serverMessage: {
    color: "white",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 50,
    textAlign: "right",
    backgroundColor: "#006A5D",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
});
