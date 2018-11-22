"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _controllers = require("./controllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/', _controllers.apiController.get_information);
router.get('/nmd/hello', _controllers.nmdController.get_hello);
var _default = router;
exports.default = _default;