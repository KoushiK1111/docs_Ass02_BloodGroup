import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { DropDataDonars } from '../data/DropData';
import DropDownPicker from 'react-native-dropdown-picker';

const FindDonar = (props) => {
    const [open, setOpen] = useState(false);
    const [group, setGroup] = useState('All');
    const [items, setItems] = useState(DropDataDonars);


    //console.log(props.data)
    return (
        <View style={styles.conatiner}>
            <View style={styles.header}>
                <Text style={styles.headerText}>DONARS</Text>
            </View>
            <DropDownPicker
                style={{ width: 200, alignSelf: 'center', marginBottom: 20 }}
                textStyle={{ fontSize: 20 }}
                open={open}
                value={group}
                items={items}
                setOpen={setOpen}
                setValue={setGroup}
                setItems={setItems}
            />
            {group !== 'All' ? <FlatList
                data={props.data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    {
                        if (item.group === group) {
                            return (
                                <View style={styles.btnStyle}>
                                    <View>
                                        <Text style={styles.btnText}>{item.name} ( {item.group} )</Text>
                                        <Text style={styles.subText}>{item.mobile}</Text>
                                    </View>
                                    <Text style={{ color: 'green', fontSize: 24 }}>call</Text>
                                </View>
                            )
                        }
                    }
                }}
            /> :
                <FlatList
                    data={props.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.btnStyle}>
                            <View>
                                <Text style={styles.btnText}>{item.name} ( {item.group} )</Text>
                                <Text style={styles.subText}>{item.mobile}</Text>
                            </View>
                            <Text style={{ color: 'green', fontSize: 24 }}>call</Text>
                        </View>
                    )
                    }
                />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        padding: 20
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    headerText: {
        fontSize: 20,
        color: 'red'
    },
    btnStyle: {
        margin: 10,
        borderBottomWidth: 2,
        borderColor: 'grey',
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    btnText: {
        fontSize: 18
    },
    subText: {
        paddingBottom: 15,
        color: 'grey'
    }
})


const mapStateToProps = state => {
    return {
        data: state.Reducer
    }
}

export default connect(mapStateToProps)(FindDonar);