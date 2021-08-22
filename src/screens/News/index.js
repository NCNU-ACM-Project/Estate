import React from "react";
import { ScrollView, VStack, Center, HStack, Box } from "native-base";
import { Filter } from "./Filter";
import { Sort } from "./Sort";
import { KeyInput } from "./KeyInput";
import { News } from "./News";
import { ChooseDate } from "./ChooseDate";

export default function App() {
  return (
    <Box bg="#fff" flex={1}>
      <ScrollView>
        <Center>
          <KeyInput />
        </Center>
        <HStack space={8} alignItems="center">
          <ChooseDate />
          <Filter />
          <Sort />
        </HStack>
        <Box pt={13} mx={2}>
          <VStack>
            <News
              Uri="https://i.imgur.com/4KZ0d2S.png"
              Context="至於象徵房市房市供給面的建築融資，6月餘額增至2.6兆元同步創下歷史新高，月增389億元為6個月最大，不過，建築融資年增率降至16.68%，連5個月下滑，並為2020年1..."
            />

            <News
              Uri="https://i.imgur.com/4KZ0d2S.png"
              Context="至於象徵房市供給面的建築融資，6月餘額增至2.6兆元同步創下歷史新高，月增389億元為6個月最大，不過，建築融資年增率降至16.68%，連5個月下滑，並為2020年1..."
            />

            <News
              Uri="https://i.imgur.com/4KZ0d2S.png"
              Context="至於象徵房市供給面的建築融資，6月餘額增至2.6兆元同步創下歷史新高，月增389億元為6個月最大，不過，建築融資年增率降至16.68%，連5個月下滑，並為2020年1..."
            />

            <News
              Uri="https://i.imgur.com/4KZ0d2S.png"
              Context="至於象徵房市供給面的建築融資，6月餘額增至2.6兆元同步創下歷史新高，月增389億元為6個月最大，不過，建築融資年增率降至16.68%，連5個月下滑，並為2020年1..."
            />
            <News
              Uri="https://i.imgur.com/4KZ0d2S.png"
              Context="至於象徵房市供給面的建築融資，6月餘額增至2.6兆元同步創下歷史新高，月增389億元為6個月最大，不過，建築融資年增率降至16.68%，連5個月下滑，並為2020年1..."
            />
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  );
}
