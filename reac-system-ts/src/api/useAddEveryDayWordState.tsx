import { useEffect, useState, useReducer } from "react";
import { IFormInput } from '../pages/EveryDayWord/EveryDayWord';
import { useNavigate } from "react-router-dom";

export type State = {
    respMessage: string,
    isLoading: boolean,
    isError: boolean,
    isAdded: boolean,
}

export type Action = {
    type: 'FETCH_ADD_INIT'
} | {
    type: 'INIT_SUCCESS'
} | {
    type: 'FETCH_ADD_SUCCESS',
    payload: string,
} | {
    type: 'FETCH_ADD_FAILURE',
    payload: string,
} | {
    type: 'NET_ERROR_FETCH_ADD_FAILURE',
    payload: string
}


export const useAddReducer = (state: State, action: Action): State => {

    switch (action.type) {
        case 'FETCH_ADD_INIT':
            return {
                ...state,
                respMessage: 'init',
                isLoading: false,
                isError: false,
                isAdded: false
            }
        case 'INIT_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isAdded: false
            }
        case 'FETCH_ADD_SUCCESS':
            return {
                ...state,
                respMessage: action.payload,
                isLoading: false,
                isError: false,
                isAdded: true
            }
        case 'FETCH_ADD_FAILURE':
            return {
                ...state,
                respMessage: action.payload,
                isLoading: false,
                isError: true,
                isAdded: false
            }
        case 'NET_ERROR_FETCH_ADD_FAILURE':
            return {
                ...state,
                respMessage: action.payload,
                isLoading: true,
                isError: true,
                isAdded: false
            }




    }
}

const initialState: State = {
    respMessage: '',
    isLoading: false,
    isError: false,
    isAdded: false,
}

const initalFetchData: IFormInput = {
    word: '',
    lomazi: '',
    translate: ''
}

const useAddEveryDayWordState = (): any => {

    const [fetchData, setFetchData] = useState<IFormInput>(initalFetchData);
    const [state, dispatch] = useReducer(useAddReducer, initialState);
    const navigate = useNavigate();

    useEffect((): void => {
        let storage = window.localStorage;
        storage.setItem('inputData', JSON.stringify(fetchData));
        const doFetch = async () => {

            dispatch({ type: 'FETCH_ADD_INIT' })
            try {
                const res = await fetch("http://localhost:8090/everydayword/wordcheck", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Accept": "application/json,text/plain,*/*",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ data: fetchData })
                }).then(res => res?.json()).then(data => data)
                if (res.status === "ok") {
                    dispatch({ type: 'FETCH_ADD_SUCCESS', payload: res.message })
                    navigate('kakunin', { state: fetchData })
                } else {
                    res.message === '' ? dispatch({ type: 'INIT_SUCCESS' }) : dispatch({ type: 'FETCH_ADD_FAILURE', payload: res.message })
                }
            } catch (error) {
                dispatch({ type: 'NET_ERROR_FETCH_ADD_FAILURE', payload: ' ネットワークから切断された' })
            }
        }
        doFetch()
    }, [fetchData])

    const fetchDataFun = (FormInput: IFormInput): void => setFetchData(FormInput)

    return { ...state, fetchDataFun }



}

export default useAddEveryDayWordState