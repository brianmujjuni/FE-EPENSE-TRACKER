import React from "react";
import { LuArrowRight } from "react-icons/lu";

export default function ExpenseTransactions({ transactions, onSeeMore }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Expense</h5>
        <button className="card-btn" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>
    </div>
  );
}
