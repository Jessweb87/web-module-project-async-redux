import axios from "axios";

export const LOADING ="LOADING";
export const ERROR ='ERROR';
export const SUCCESS = 'SUCCESS';

export const getCharacters = () => (dispatch) => {
    dispatch({type: LOADING})
        axios.get("https://api.disneyapi.dev/characters")
            .then(resp => {
                dispatch({type:SUCCESS, payload: resp.data})
            })
            .catch((err) => {
                dispatch({type:ERROR, payload: {err}})
            });
};


