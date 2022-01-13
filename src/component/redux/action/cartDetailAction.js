import axios from "axios";

export const cartDetailAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: "GET_ONE_DATA_REQUEST" });
    const { data } = await axios.get(`http://45.138.24.15:9000/api/products/${id}`);
    dispatch({ type: "GET_ONE_DATA_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_ONE_DATA_FAIL", payload: error.message });
  }
};