const User = require("../models/userModel");
const Income = require("../models/incomeModel");
exports.addIncome = async (req, res) => {
  const userId = req.user.id;
  try {
    const { icon, source, amount, date } = req.body;
    if (!source || !amount || !date)
      return res.status(400).json({ message: "All fields are required" });
    const income = new Income({
      userId,
      icon,
      source,
      amount,
      date,
    });

    await income.save();
    res.status(201).json(income);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAllIncome = async (req, res) => {};
exports.deleteIncome = async (req, res) => {};
exports.downloadIncomeExcel = async (req, res) => {};
