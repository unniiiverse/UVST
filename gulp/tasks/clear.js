import { deleteAsync } from 'del';

export const clear = () => {
    return deleteAsync(['dist/*', '!dist/.git', '!dist/fonts/'])
}

export const setupClear = () => {
    return deleteAsync(['dist/*' ,'src/*'])
}

export const setupClearSecondStage = () => {
    return deleteAsync(['src/img/placeholder.txt', 'src/fonts/placeholder.txt'])
}

export const updateFonts = () => {
    return deleteAsync(['dist/fonts/*', 'src/scss/base/fonts.scss'])
}