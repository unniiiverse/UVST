import { deleteAsync } from 'del';

export const clear = () => {
    return deleteAsync(['dist/*'])
}

export const clearSrc = () => {
    return deleteAsync(['src/*'])
}