const intialState = {
    user:null,
    camps:null
}


function AppReducer(state=intialState,action){
    switch(action.type){
        case 'SET_USER':
            return {
            ...state,
            user:action.user
            }

            case 'SET_CAMPS':
                return {
                ...state,
                camps:action.camps
                }

                case 'ADD_CAMP':
                    return {
                    ...state,
                    camps:[...state.camps,action.camp]
                    }

        default:
            return state;
    }
}

export default AppReducer;