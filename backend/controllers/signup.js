const SignupSchema = require("../models/NewUserModel");

exports.signUp = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  const signup = new SignupSchema({
    username,
    email,
    password,
    confirmPassword,
  });

  try {
    // Validations
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required!" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match!" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long!" });
    }
    // Add more validations if necessary

    await signup.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }

  console.log(signup);
};

exports.getUser = async (req, res) => {
  try {
    const users = await SignupSchema.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Server Error" });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by email
    const user = await SignupSchema.findOne({ username });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if password matches
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getIncomes = async (req, res) => {
  try {
    const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// exports.deleteExpense = async (req, res) => {
//   const { id } = req.params;
//   ExpenseSchema.findByIdAndDelete(id)
//     .then((form) => {
//       res.status(200).json({ message: "Expense Deleted" });
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Server Error" });
//     });
// };
