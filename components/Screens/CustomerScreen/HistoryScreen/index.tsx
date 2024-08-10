import { View, Text } from 'react-native'
import React from 'react'
import StoreIconCard from '@/components/ui/StoreIconCard'
import { Colors } from '@/constants/Colors'
import { FlashList } from "@shopify/flash-list";
import { history_cards } from "../../../../utils/store_icon_cards_data"
export default function HistoryScreen() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.lightGray,
            padding: 20,
        }}>
            <FlashList
                renderItem={({ item }) => {
                    return <StoreIconCard imageUri={item.icon} storeName={item.title} creditAmount={item.creditAmount} time={item.time} />;
                }}
                estimatedItemSize={50}
                data={history_cards}
            />

        </View>
    )
}