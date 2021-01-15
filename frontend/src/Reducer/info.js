
import { GET_JSONFILE } from '../Action/types'

const initialState = {
    tab: []
}
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case GET_JSONFILE:
            return {
                ...state,
                tab: payload
            }
        default:
            return state
    }
}