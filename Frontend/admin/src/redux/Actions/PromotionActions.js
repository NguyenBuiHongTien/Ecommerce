import axios from "axios";
import {
  PROMOTION_LIST_REQUEST,
  PROMOTION_LIST_SUCCESS,
  PROMOTION_LIST_FAIL,
  PROMOTION_DETAIL_REQUEST,
  PROMOTION_DETAIL_SUCCESS,
  PROMOTION_DETAIL_FAIL,
  PROMOTION_UPDATE_REQUEST,
  PROMOTION_UPDATE_SUCCESS,
  PROMOTION_UPDATE_FAIL,
  PROMOTION_ADD_REQUEST,
  PROMOTION_ADD_SUCCESS,
  PROMOTION_ADD_FAIL,
  PROMOTION_DELETE_REQUEST, 
  PROMOTION_DELETE_SUCCESS,  
  PROMOTION_DELETE_FAIL, 
} from "../Constants/PromotionConstants";
import { logout } from "./UserActions";

// Get ALL
export const listPromotions = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PROMOTION_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };

    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/api/promotions/all`, config);

    dispatch({ type: PROMOTION_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PROMOTION_LIST_FAIL,
      payload: message,
    });
  }
};

//Get detail
export const getPromotionDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROMOTION_DETAIL_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/promotions/${id}`,
      config
    );

    dispatch({ type: PROMOTION_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PROMOTION_DETAIL_FAIL,
      payload: message,
    });
  }
};

// Update
export const updatePromotion = (promotion) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROMOTION_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };

    const { data } = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/promotions/${promotion._id}`,
      promotion,
      config
    );

    dispatch({ type: PROMOTION_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PROMOTION_UPDATE_FAIL,
      payload: message,
    });
  }
};
// Delete
export const deletePromotion = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: PROMOTION_DELETE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      };
  
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/promotions/${id}`, config);
  
      dispatch({ type: PROMOTION_DELETE_SUCCESS, payload: id });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: PROMOTION_DELETE_FAIL,
        payload: message,
      });
    }
  };

// Create
export const addPromotion = (promotion) => async (dispatch, getState) => {
  try {
    dispatch({ type: PROMOTION_ADD_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/promotions/add`,
      promotion,
      config
    );

    dispatch({ type: PROMOTION_ADD_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: PROMOTION_ADD_FAIL,
      payload: message,
    });
  }
};
