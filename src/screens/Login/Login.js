/**
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {TextInput, TouchableOpacity, Text} from 'react-native';
import {styles} from "./styles";
// import firebase from '@react-native-firebase/app';



const Login = ({route}) => {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    // const itemsRef = db.ref('/items');
    // const usersRef = db.ref('/users');
    // const firestore = firebase.firestore();

    useEffect(()=> {
        // db.ref('/users/' + value).on('value', snapshot => {
        //     let data = snapshot.val();
        //     let items = Object.values(data);
        //     console.log(data, 'items')
        // });

        // firestore.collection("users").get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         console.log(`${doc.id} => ${doc.data()}`);
        //     });
        // });
    }, []);

    const handlePress = () => {
        // console.log('pressed');
        // itemsRef.set({
        //     ['lol']: value
        // });
        // db.ref('users/' + value).set({
        //     username: value,
        //     email: 'i@gmail.com',
        //     profile_picture : 'some_picture'
        // });
        // db.collection("users").add({
        //     first: value,
        //     last: "Lovelace",
        //     born: 1815
        // })
        //     .then(function(docRef) {
        //         console.log("Document written with ID: ", docRef.id);
        //     })
        //     .catch(function(error) {
        //         console.error("Error adding document: ", error);
        //     });

    };

    console.log(value);
    return (
        <>
            {/*<Text style={styles.episodeTitle}>Login</Text>*/}
            <TextInput style={styles.input} value={value} onChangeText={(text) => setValue(text)}/>
            <TouchableOpacity><Text style={{color: 'red' }} onPress={handlePress}>Save</Text></TouchableOpacity>
        </>
    )

};

export default Login

//set- replaces any existing data
//push
//update - to simultaneously write to specific children of a node without overwriting other child nodes, use the update()

//on - listen for value events, called each time data changes, including changes to the children
//once - it triggers once and then does not trigger again.

