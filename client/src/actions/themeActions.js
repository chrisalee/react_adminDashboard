import { SET_COLOR, SET_MODE, GET_THEME } from "../constants/themeConstants"

export const setMode = mode => {
    return {
        type: SET_MODE,
        payload: mode
    }
}

export const setColor = color => {
    return {
        type: SET_COLOR,
        payload: color
    }
}

export const getTheme = () => {
    return {
        type: GET_THEME
    }
}

const exportDefault = {
    
}
