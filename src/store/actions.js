import * as api from '../api';

export const NAMES = {
    GET_LISTS: 'GET_LISTS',
    GET_LIST_PATH: 'GET_LIST_PATH',
    CREATE_DATA: 'CREATE_DATA'
};

export const setStatus = payload => ({type: NAMES.GET_LISTS, payload})

export function getList(lists) {
    return api.getLists(lists)
        .then(lists => ({
            type: 'GET_LISTS',
            payload: {
                lists
            }
        }));
}

export function getPath(path) {
    return api.getPath(path)
        .then(path => ({
            type: 'GET_LIST_PATH',
            payload: {
                path
            }
        }));
}

export function createTitle(data) {
    return api.createTitle(data)
        .then(data => ({
            type: 'CREATE_DATA',
            payload: {
                data
            }
        }));
}
