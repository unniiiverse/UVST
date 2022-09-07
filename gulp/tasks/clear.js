import { deleteAsync } from 'del';

export const clear = () => {
    return deleteAsync(['dist'])
}