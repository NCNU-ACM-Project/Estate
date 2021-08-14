import React from 'react'
import { TouchableOpacity, StyleSheet, View, Dimensions } from 'react-native'
import ShortCutBtn from './ShortCutBtn';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const ITEM_WIDTH = Math.floor(Dimensions.get("window").height / 10) - 30;

const HomeShortCut = ({style, navigation}) => {
    const onPress = (navigation) =>{
        navigation.push('Fake');
    }

    return (
        <View style={[styles.container, style]}>
            <ShortCutBtn title="租房" style={styles.btn} icon={<Feather name="home" size={ITEM_WIDTH} color="black" onPress={()=>{onPress(navigation)}}/>} />
            <ShortCutBtn title="急售物件" style={styles.btn} icon={<Ionicons name="warning-outline" size={ITEM_WIDTH} color="black" />} />
            <ShortCutBtn title="業界新聞" style={styles.btn} icon={<FontAwesome name="newspaper-o" size={ITEM_WIDTH} color="black" />} />
            <ShortCutBtn title="新增物件" style={styles.btn} icon={<Ionicons name="add-circle-outline" size={ITEM_WIDTH} color="black" />} />
            <ShortCutBtn title="好康消息" style={styles.btn} icon={<Ionicons name="megaphone-outline" size={ITEM_WIDTH} color="black" />} />
            <ShortCutBtn title="試算" style={styles.btn} icon={<SimpleLineIcons name="calculator" size={ITEM_WIDTH} color="black" />} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        flexWrap: "wrap",
    }, btn: {
        fontSize: ITEM_WIDTH,
        width: "33%"
    }
})

export default HomeShortCut
