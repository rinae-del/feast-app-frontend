import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { FlashList } from '@shopify/flash-list'
import FeaturedStoresCard from '@/components/ui/FeaturedStoresCard'
import { store_credit_cards } from '@/utils/store_icon_cards_data'
import CreditStoreCard from '@/components/ui/CreditStoreCard'

export default function StoreCreditScreen() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: Colors.lightGray,
            padding: 20,
        }}>
            <FlashList
                renderItem={({ item }) => {
                    return <CreditStoreCard imageUri={item.icon} storeName={item.title} tagline={item.tagline} />
                }}
                estimatedItemSize={10}
                data={store_credit_cards}
            />
        </View>
    )
}