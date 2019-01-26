import { LOADING } from '../actions/loading';

const initState = {
  loading: false
}

export const loadingReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return { loading: !state.loading }
  
    default:
      return {...state}
  }
}