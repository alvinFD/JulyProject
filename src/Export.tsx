export const API_GET_INFO = 'http://dev.prismcubehk.com/hkcsd/index.php/api/visitStatusHandInArticles/getAll?lang=tc'
import {createStore} from "redux"


export function reducer (state = {value: 0}, action){
    switch (action.type){
        case 1:
            return 1
        case 2:
            return 2
        case 3:
            return 3
    }
}

let store = createStore(reducer)