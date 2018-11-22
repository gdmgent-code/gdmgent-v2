/*
Get hello
*/
export const get_information = function(req, res, next) {
  return res.status(200).json({"message": "Information"});
}