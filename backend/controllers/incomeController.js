const User = require("../models/User");
const Income = require("../models/Income");
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

exports.getAllIncome = async (req, res) => {
  try {
    const userId = req.user.id;
    const income = await Income.find({ userId }).sort({ date: -1 });
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({err: error.message})
  }
};
exports.deleteIncome = async (req, res) => {
    // const userId = req.user.id
    try {
        await Income.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Income deleted successfully"})
    } catch (error) {
        
    }
};
exports.downloadIncomeExcel = async (req, res) => {};
