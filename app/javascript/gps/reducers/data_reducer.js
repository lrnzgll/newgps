export default function (state, action) {
    if (state === undefined) {
        return []
    }
    switch (action.type) {
        case ('FETCH COUNTRIES AND REGIONS'):
            return action.payload
            break;
        default:
            return state
    }
}