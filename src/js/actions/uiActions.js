import { SCREEN_RESIZE } from './actionTypes'

export const screenResize = (width) => ({
        type: SCREEN_RESIZE,
        screenWidth: width
})
