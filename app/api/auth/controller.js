const { User } = require("../../db/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  // Signin Function
  signin: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const checkUser = await User.findOne({ where: { email: email } });

      if (checkUser) {
        const checkPassword = bcrypt.compareSync(password, checkUser.password);

        if (checkPassword) {
          const token = jwt.sign(
            {
              user: {
                id: checkUser.id,
                name: checkUser.name,
                email: checkUser.email,
              },
            },
            "secret"
          );
          res.status(200).json({
            message: "Login Success",
            data: token,
          });
        } else {
          res.status(403).json({ message: "Password not match" });
        }
      } else {
        res.status(403).json({
          message: "Email user not found",
        });
      }
    } catch (error) {
      console.log(error);
    }
  },

  // SignUp Function
  signup: async (req, res, next) => {
    try {
      const { name, email, password, confirmPassword } = req.body;

      if (password !== confirmPassword) {
        res.status(403).json({
          message: "confirm password not match with password",
        });
      }

      const checkEmail = await User.findOne({ where: { email: email } });
      if (checkEmail) {
        return res.status(403).json({
          message: "Email Registered",
        });
      }

      const encryptPassword = bcrypt.hashSync(password, 10);

      const user = await User.create({
        name,
        email,
        password: encryptPassword,
        role: "admin",
      });

      delete user.dataValues.password;

      res.status(201).json({
        message: "Success Signup",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  },
};
