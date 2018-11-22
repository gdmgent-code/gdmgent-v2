/*
Get hello
*/
export const get_hello = function(req, res, next) {
  return res.status(200).json({"message": "Hello"});
}