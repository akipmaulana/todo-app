import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import Style from "./Style";

export const FooterCell = props => {

    const { isLoadMore, numberOfRow } = props

    const footer = (
        <View style={{ paddingVertical: numberOfRow > 0 ? "5%" : "50%" }} >
            <ActivityIndicator animating size="large" />
        </View>
    )
    return isLoadMore ? footer : null
}