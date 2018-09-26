import { Dimensions } from 'react-native'

export const Dimen = {
    full_width: Dimensions.get('window').width,
    full_height: Dimensions.get('window').height,
    width: (persentage) => {
        return Dimen.full_width * persentage
    },
    height: (persentage) => {
        return Dimen.full_height * persentage
    },
    circular_radius: (width, height) => {
        return Math.round(width + height) / 2
    },
    card_margin_side: 8,
    card_radius: 4,
    badge_cell: 16,
    project_header_height: () => {
        return Dimen.full_height * 0.2
    },
    button: {
        height: 48,
        margin: 16,
        padding: 8,
        radius: 4,
    }
}