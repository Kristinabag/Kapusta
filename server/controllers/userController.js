require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.module');
const createToken = require('../helpers/token');
const { userDstructurization } = require('../helpers/user');

const {
  jwtToken, jwtRefreshToken,
} = process.env;

const saltRounds = process.env.saltRounds ?? 10;

const login = async (req, res) => {
  const { email, pass } = req.body;

  if (email && pass) {
    try {
      const user = await User.findOne({ email }).exec();
      const isValidPass = await bcrypt.compare(pass, user.pass);

      if (isValidPass) {
        const payload = { id: user._id };
        user.accessToken = createToken('access', payload);
        user.refreshToken = createToken('refresh', payload);

        user.save();
        return res.json(userDstructurization(user));
      }
      return res.sendStatus(401);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(204);
};

const registration = async (req, res) => {
  const { name, email, pass } = req.body;
  if (name && email && pass) {
    try {
      const userPass = await bcrypt.hash(pass, Number(saltRounds));
      const newUser = new User({
        name,
        email,
        pass: userPass,
      });

      const payload = { id: newUser._id };

      newUser.accessToken = createToken('access', payload);
      newUser.refreshToken = createToken('refresh', payload);

      await newUser.save();

      return res.json(userDstructurization(newUser));
    } catch (error) {
      console.log(error);
      return res.status(422).json({ message: 'Email already exists in system' });
    }
  }
  return res.sendStatus(204);
};

const token = async (req, res) => {
  const { refreshToken } = req.body;

  if (refreshToken) {
    try {
      jwt.verify(refreshToken, jwtRefreshToken, async (err, decoded) => {
        if (err) return res.sendStatus(403);

        const user = await User.findById(decoded.id);

        if (!user || user.refreshToken !== refreshToken) return res.sendStatus(403);

        const payload = { id: user._id };
        user.accessToken = createToken('access', payload);
        user.refreshToken = createToken('refresh', payload);

        user.save();
        return res.json(userDstructurization(user));
      });
    } catch (e) {
      return res.sendStatus(500);
    }
  } else {
    return res.sendStatus(401);
  }
};

const info = async (req, res) => {
  const { id } = req.body;

  const user = await User.findById(id);
  res.json({
    name: user.name,
    email: user.email,
  });
};

module.exports = {
  registration,
  login,
  token,
  info,
};
