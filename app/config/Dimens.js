import { Dimensions } from 'react-native'

export const Dimens = {
    full_width: Dimensions.get('window').width,
    full_height: Dimensions.get('window').height,
    width: (persentage) => {
        return Dimens.full_width * persentage
    },
    height: (persentage) => {
        return Dimens.full_height * persentage
    }
}