const {
  addExpense,
  getExpense,
  deleteExpense,
} = require("../controllers/expense");
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/income");
const { signUp, login, getUser } = require("../controllers/signup");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("B Hello");
});

router.post("/signup", signUp).post("/login", login).get("/users", getUser);

router
  .post("/add-income", addIncome)
  .get("/get-incomes", getIncomes)
  .delete("/delete-income/:id", deleteIncome)
  .post("/add-expense", addExpense)
  .get("/get-expenses", getExpense)
  .delete("/delete-expense/:id", deleteExpense);

module.exports = router;
