"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkOutClearAction = void 0;

var checkOutClearAction = function checkOutClearAction() {
  return function (dispatch) {
    dispatch({
      type: "GET_CHECKOUT_CLEAR"
    });
  };
};

exports.checkOutClearAction = checkOutClearAction;