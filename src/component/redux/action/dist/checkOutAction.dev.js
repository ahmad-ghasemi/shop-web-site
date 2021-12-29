"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkOutAction = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _function = require("../../helper/function");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var checkOutAction = function checkOutAction(cartState, shipingInfo) {
  return function (dispatch, getState) {
    var ordersData = {
      orderItems: (0, _function.orderItemsCreator)(cartState.selectedItems),
      shippingAddress: shipingInfo,
      paymentMethod: "online",
      itemsPrice: cartState.total,
      shippingPrice: "0.00",
      totalPrice: cartState.total
    };
    dispatch({
      type: "GET_CHECKOUT_REQUEST"
    });

    _axios["default"].post('http://45.138.24.15:9000/api/orders', ordersData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer ".concat(getState().profileState.data.token)
      }
    }).then(function (response) {
      dispatch({
        type: "GET_CHECKOUT_SUCCSESS",
        payload: response.data
      });
      console.log(response.data);
    })["catch"](function (error) {
      return dispatch({
        type: "GET_CHECKOUT_FAILURE",
        payload: error.status
      });
    });
  };
};

exports.checkOutAction = checkOutAction;