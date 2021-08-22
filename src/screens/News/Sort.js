import React, { useState } from "react";
import { Menu, Divider, View } from "native-base";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function Sort() {
  const SortItemSelect = ({ Text, key }) => {
    console.log({ Text, key });
  };

  const [ordervalue, onChangeorder] = useState("asc");
  const [Typevalue, onChangetype] = useState("date");

  return (
    <View>
      <Menu
        mx={30}
        px={30}
        trigger={(triggerProps) => {
          return (
            <Pressable {...triggerProps}>
              <FontAwesome name="sort" size={30} color="#8E8E8E" />
            </Pressable>
          );
        }}
      >
        <Menu.OptionGroup defaultValue={ordervalue} title="Order" type="radio">
          {Types.map(({ Text, key }) => {
            return (
              <Menu.ItemOption
                value={key}
                key={key}
                onPress={() => {
                  SortItemSelect({ Text, key });
                  onChangeorder(key);
                }}
              >
                {Text}
              </Menu.ItemOption>
            );
          })}
        </Menu.OptionGroup>

        <Divider />

        <Menu.OptionGroup defaultValue={Typevalue} title="Data" type="checkbox">
          {SortData.map(({ Text, key }) => {
            return (
              <Menu.ItemOption
                value={key}
                key={key}
                onPress={() => {
                  SortItemSelect({ Text, key });
                  onChangetype(key);
                }}
              >
                {Text}
              </Menu.ItemOption>
            );
          })}
        </Menu.OptionGroup>
      </Menu>
    </View>
  );
}

const SortData = [
  { Text: "日 期", key: "date" },
  { Text: "坪 數", key: "ping" },
  { Text: "總 價", key: "money" },
  { Text: "地 址", key: "address" },
];
const Types = [
  { Text: "升 冪", key: "asc" },
  { Text: "降 冪", key: "desc" },
];
