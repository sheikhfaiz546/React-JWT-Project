import {
  ORDER_CREATE_FAILED,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_RESET,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAIL_FAILED,
  ORDER_DETAIL_REQUEST,
  ORDER_DETAIL_SUCCESS,
  ORDER_MINE_LIST_FAILED,
  ORDER_MINE_LIST_REQUEST,
  ORDER_MINE_LIST_SUCCESS,
  ORDER_PAY_FAILED,
  ORDER_PAY_REQUEST,
  ORDER_PAY_RESET,
  ORDER_PAY_SUCCESS,
} from "../Constants/order-constants";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, order: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAIL_REQUEST:
      return {
        loading: true,
      };
    case ORDER_DETAIL_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    case ORDER_DETAIL_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    default:
      return state;
  }
};

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return { loading: true};
    case ORDER_PAY_SUCCESS:
        return { loading: false, success: true };
        case ORDER_PAY_FAILED:
            return{loading:false,error:action.payload}
            case ORDER_PAY_RESET:
              return {};
    default:
      return state;
  }
};
export const orderMineReducer = (state={orders:[]},action) => {
  switch(action.type){
    case ORDER_MINE_LIST_REQUEST :
      return{loading:true}
    case ORDER_MINE_LIST_SUCCESS :
      return{loading:false,orders:action.payload}
    case ORDER_MINE_LIST_FAILED :
      return{loading:false,error:action.payload}
      default :
      return state
  }
}