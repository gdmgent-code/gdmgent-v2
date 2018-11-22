"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_hello = void 0;

/*
Get hello
*/
const get_hello = function (req, res, next) {
  return res.status(200).json({
    "message": "Hello"
  });
};

exports.get_hello = get_hello;