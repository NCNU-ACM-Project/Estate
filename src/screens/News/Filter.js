import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setNewsType } from "../../store/slices/filter";
import { Menu, HamburgerIcon, Box } from "native-base";
import { Pressable } from "react-native";

export function Filter() {
  const { newsType } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const MenuItemSelect = ({ Data, key }) => {
    dispatch(setNewsType(key));
    console.log({ Data, key });
  };

  return (
    <Box>
      <Menu
        mr={60}
        width={200}
        height={500}
        trigger={(triggerProps) => {
          return (
            <Pressable {...triggerProps}>
              <HamburgerIcon color="#8E8E8E" />
            </Pressable>
          );
        }}
      >
        <Menu.OptionGroup title="Type" type="radio" defaultValue={newsType}>
          {NewsDatas.map(({ Data, key }) => {
            return (
              <Menu.ItemOption
                alignItems="center"
                value={key}
                key={key}
                onPress={() => {
                  MenuItemSelect({ Data, key });
                }}
              >
                {Data}
              </Menu.ItemOption>
            );
          })}
        </Menu.OptionGroup>
      </Menu>
    </Box>
  );
}
const NewsDatas = [
  { Data: "全 部", key: "0" },
  { Data: "系統故事", key: "1" },
  { Data: "品牌故事", key: "2" },
  { Data: "商品資訊", key: "3" },
  { Data: "重要提醒", key: "4" },
  { Data: "活動訊息", key: "5" },
  { Data: "新品上架", key: "6" },
  { Data: "祝 賀", key: "7" },
  { Data: "媒體報導", key: "8" },
  { Data: "法律實務", key: "9" },
  { Data: "平台公告", key: "10" },
  { Data: "房仲生活", key: "11" },
  { Data: "縣市導覽", key: "12" },
  { Data: "影 音", key: "13" },
];
