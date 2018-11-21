"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helloWorld = void 0;

var functions = _interopRequireWildcard(require("firebase-functions"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const message = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`from Babelified Cloud Functions!`);
    }, 5000);
  });
};

let helloWorld = functions.https.onRequest(async (req, res) => {
  let world = await message();
  res.status(200).send(`Hello ${world}`);
});
exports.helloWorld = helloWorld;