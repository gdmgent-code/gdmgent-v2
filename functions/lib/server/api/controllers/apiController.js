"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_information = void 0;

/*
Get hello
*/
const get_information = function (req, res, next) {
  return res.status(200).json({
    "message": "Information"
  });
};

exports.get_information = get_information;