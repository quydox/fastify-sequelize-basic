import {
  Token as TokenModel,
  User as UserModel
} from 'models'

exports.createToken = async (data) => {
  return (await Token.create(data))
}

exports.getTokenWithUser = async (conditions) => {
  return (await Token.findOne(conditions))
}

exports.getToken = async (conditions) => {
  return (await Token.findOne({ where: conditions }))
}
