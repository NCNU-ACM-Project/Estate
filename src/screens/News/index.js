import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import px from 'react-native-px2dp';

import Top from "./Top"
import Filter from "./Filter"
import Sort from "./Sort"
import Menu from "./Menu"
import ChooseDate from './ChooseDate';
import KeyInput from './KeyInput'
import Search from './Search';
import News from './News';

export default function App() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <KeyInput Left= {25*px} Top= {61*px} Placeholder="  輸入關鍵字"/>
          <ChooseDate Left={25*px} Top={104*px}/>
          <Filter Top={108*px} Left={194*px}/> 
          <Sort Left= {235*px} Top={108*px}/>
  
          <News 
            Uri="https://i.imgur.com/4KZ0d2S.png"
            Context="至於象徵房市供給面的建築融資，6月餘額增至2.6兆元同步創下歷史新高，月增389億元為6個月最大，不過，建築融資年增率降至16.68%，連5個月下滑，並為2020年1..."
            Top={120*px}
          />
  
          <News 
            Uri="https://i.imgur.com/4KZ0d2S.png"
            Context="至於象徵房市供給面的建築融資，6月餘額增至2.6兆元同步創下歷史新高，月增389億元為6個月最大，不過，建築融資年增率降至16.68%，連5個月下滑，並為2020年1..."
            Top={80*px}
          />
  
          <News 
            Uri="https://i.imgur.com/4KZ0d2S.png"
            Context="至於象徵房市供給面的建築融資，6月餘額增至2.6兆元同步創下歷史新高，月增389億元為6個月最大，不過，建築融資年增率降至16.68%，連5個月下滑，並為2020年1..."
            Top={40*px}
          />
  
          <News 
            Uri="https://i.imgur.com/4KZ0d2S.png"
            Context="至於象徵房市供給面的建築融資，6月餘額增至2.6兆元同步創下歷史新高，月增389億元為6個月最大，不過，建築融資年增率降至16.68%，連5個月下滑，並為2020年1..."
            Top={0*px}
          />
  
          <Search Left={230*px} Top={66*px}/>
        </ScrollView>
        <Menu/>
        <Top Title="業 界 新 聞"/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      position: 'relative',
      backgroundColor: '#fff',
    },
  });
  