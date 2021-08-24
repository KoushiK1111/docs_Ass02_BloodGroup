import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import { AddDonarItem } from '../redux/Action';
import {DropData} from '../data/DropData'

const AddDonar = (props) => {
    const [open, setOpen] = useState(false);
    const [group, setGroup] = useState(null);
    const [items, setItems] = useState(DropData);
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')

    const AddData = () =>{
        const id = Math.floor(Math.random()*999999);
        props.Add({id,name,mobile,group})
        setName('');
        setMobile('');
        setGroup(null)
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.header}>DONATE YOUR BLOOD</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    onChangeText={setName}
                    autoCapitalize='none'
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Mobile'
                    keyboardType='numeric'
                    onChangeText={setMobile}
                    value={mobile}
                />
                <DropDownPicker
                    style={{ width: 200, alignSelf: 'center' }}
                    textStyle={{ fontSize: 20 }}
                    open={open}
                    value={group}
                    items={items}
                    setOpen={setOpen}
                    setValue={(value)=>{
                        Keyboard.dismiss()
                        setGroup(value);
                         
                    }}
                    setItems={setItems}
                />
                <TouchableOpacity style={styles.btn} onPress={AddData}>
                    <Text style={{ fontSize: 20 }}>SUMBIT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const mapDispatchToProps = dispatch =>{
    return{
        Add :(data)=>dispatch(AddDonarItem(data))
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    card: {
        flex: 1,
        backgroundColor: 'lightgrey',
        paddingHorizontal: 15
    },
    header: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center',
        paddingVertical: 20,
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'black',
        paddingLeft: 10,
        fontSize: 18,
        marginBottom: 40,
        backgroundColor:'#fff'
    },
    btn: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 10,
        width: 300,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    }
})

export default connect(null,mapDispatchToProps)(AddDonar);