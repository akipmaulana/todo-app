import { Dimensions } from 'react-native'

export const Dimen = {
    full_width: Dimensions.get('window').width,
    full_height: Dimensions.get('window').height,
    width: (persentage) => {
        return Dimen.full_width * persentage
    },
    height: (persentage) => {
        return Dimen.full_height * persentage
    }
}