import { deleteAsync } from 'del';

export const clear = () => {
    return deleteAsync(['dist/*', '!dist/.git'])
}

export const clearSrc = () => {
    return deleteAsync(['src/*'])
}