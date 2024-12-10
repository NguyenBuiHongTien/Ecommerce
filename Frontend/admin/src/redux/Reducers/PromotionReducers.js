import {
    PROMOTION_LIST_REQUEST,
    PROMOTION_LIST_SUCCESS,
    PROMOTION_LIST_FAIL,
    PROMOTION_DETAIL_REQUEST,
    PROMOTION_DETAIL_SUCCESS,
    PROMOTION_DETAIL_FAIL,
    PROMOTION_DELETE_REQUEST,
    PROMOTION_DELETE_SUCCESS,
    PROMOTION_DELETE_FAIL,
    PROMOTION_UPDATE_REQUEST,
    PROMOTION_UPDATE_SUCCESS,
    PROMOTION_UPDATE_FAIL,
    PROMOTION_UPDATE_RESET,
    PROMOTION_ADD_REQUEST,
    PROMOTION_ADD_SUCCESS,
    PROMOTION_ADD_FAIL,
  } from "../Constants/PromotionConstants";
  
  // List
  export const promotionListReducer = (state = { promotions: [] }, action) => {
    switch (action.type) {
      case PROMOTION_LIST_REQUEST:
        return { loading: true };
      case PROMOTION_LIST_SUCCESS:
        return { loading: false, promotions: action.payload };
      case PROMOTION_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // Detail 
  export const promotionDetailReducer = (state = { promotion: {} }, action) => {
    switch (action.type) {
      case PROMOTION_DETAIL_REQUEST:
        return { loading: true, ...state };
      case PROMOTION_DETAIL_SUCCESS:
        return { loading: false, promotion: action.payload };
      case PROMOTION_DETAIL_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // Delete
  export const promotionDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case PROMOTION_DELETE_REQUEST:
        return { loading: true };
      case PROMOTION_DELETE_SUCCESS:
        return { loading: false, success: true };
      case PROMOTION_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // Update
  export const promotionUpdateReducer = (state = { promotion: {} }, action) => {
    switch (action.type) {
      case PROMOTION_UPDATE_REQUEST:
        return { loading: true };
      case PROMOTION_UPDATE_SUCCESS:
        return { loading: false, success: true, promotion: action.payload };
      case PROMOTION_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case PROMOTION_UPDATE_RESET:
        return { promotion: {} };
      default:
        return state;
    }
  };
  
  // Create
  export const promotionAddReducer = (state = {}, action) => {
    switch (action.type) {
      case PROMOTION_ADD_REQUEST:
        return { loading: true };
      case PROMOTION_ADD_SUCCESS:
        return { loading: false, success: true, promotion: action.payload };
      case PROMOTION_ADD_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  