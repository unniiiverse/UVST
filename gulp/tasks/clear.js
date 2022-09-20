import { deleteAsync } from 'del';

export const clear = () => {
    return deleteAsync(['dist/*', '!dist/.git', '!dist/fonts/'])
}

export const clearSrc = () => {
    return deleteAsync(['src/*'])
}