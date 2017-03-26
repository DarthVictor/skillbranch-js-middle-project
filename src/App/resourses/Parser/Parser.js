import parse from '../../../config/parser'

export default (ctx) => {
  // const User = ctx.models.User;
  const parser = {}

  parser.nestedConfig = (req, res) => {
    const params = req.allParams();
    return res.json(parse(params.data))
  }

  return parser
};
