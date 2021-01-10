import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, FlatList } from 'react-native';
//! https://github.com/ivpusic/react-native-image-crop-picker Image Crop Picker 
//! https://www.youtube.com/watch?v=3_ldEVWlL18&t=105s&ab_channel=PradipDebnath
import ImagePicker from 'react-native-image-crop-picker';


export default function App() {

    // const [image, setImage] = useState([null])

    const [image, setImage] = useState(["https://images.unsplash.com/photo-1610249101495-41cc9cd8b301?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80", "https://images.unsplash.com/photo-1610272612254-bcb3474421b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"])

    // const [image, setImage] = useState("https://images.unsplash.com/photo-1610249101495-41cc9cd8b301?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80")


    const handleChoosePhoto = () => {
        // console.warn("Choose Photo")
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setImage([image.path])
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Button
                title="Choose Photo"
                onPress={handleChoosePhoto}
            />
            {/* 
            <ImageBackground
                source={{
                    uri: image,
                }}
                style={{ height: 400, width: 300 }}
                imageStyle={{ borderRadius: 15 }}
            /> */}
            <FlatList data={image} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
                <ImageBackground source={{ uri: item }} style={{ height: 400, width: 300, marginBottom: 10 }} imageStyle={{ borderRadius: 15 }} />)
            } />


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
    },

});



{/* <ImageBackground
                source={{
                    uri: image,
                }}
                style={{ height: 400, width: 300 }}
                imageStyle={{ borderRadius: 15 }}
            /> */}
{/* <Image source={{ uri: "https://images.unsplash.com/photo-1610272612254-bcb3474421b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" }} style={{ height: 400, width: 300 }} resizeMode="contain" /> */ }