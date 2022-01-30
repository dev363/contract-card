import { toast } from "react-toastify";
import * as CONST from "./contractTypes";

export const addContract = (data, callback) => {
  return (dispatch, getState) => {
    const { list } = getState().contracts;
    dispatch({
      type: CONST.ADD_CONTRACT,
      payload: [...list, data],
    });
    setTimeout(() => {
      callback &&
        callback({
          success: true,
          message: "Contract Added",
        });
    }, 500);
  };
};

export const editContract = (data, callback) => {
  return (dispatch, getState) => {
    const { list } = getState().contracts;
    const index = list?.findIndex((con) => con.id === data.id);
    dispatch({
      type: CONST.EDIT_CONTRACT,
      payload: [...list.slice(0, index), { ...data }, ...list.slice(index + 1)],
    });
    setTimeout(() => {
      callback &&
        callback({
          success: true,
          message: "Contract Added",
        });
    }, 500);
  };
};

export const removeContract = (id) => {
  return (dispatch, getState) => {
    const { list } = getState().contracts;
    const contracts = list?.filter((con) => con.id !== id);
    dispatch({
      type: CONST.REMOVE_CONTRACT,
      payload: [...contracts],
    });
    toast.success("Contract Deleted");
  };
};

export const addFavirateContract = (id) => {
  return (dispatch, getState) => {
    const { list } = getState().contracts;
    const index = list?.findIndex((con) => con.id === id);
    dispatch({
      type: CONST.ADD_TO_FAVOURITE_CONTRACT,
      payload: [
        ...list.slice(0, index),
        { ...list[index], favorite: true },
        ...list.slice(index + 1),
      ],
    });
    toast.success("Contract Add to favorite");
  };
};

export const removeFavirateContract = (id) => {
  return (dispatch, getState) => {
    const { list } = getState().contracts;
    const index = list?.findIndex((con) => con.id === id);
    dispatch({
      type: CONST.ADD_TO_FAVOURITE_CONTRACT,
      payload: [
        ...list.slice(0, index),
        { ...list[index], favorite: false },
        ...list.slice(index + 1),
      ],
    });
    toast.success("Contract removed from Favorite");
  };
};
