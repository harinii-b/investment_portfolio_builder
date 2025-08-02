# 🌱 Ethical Investment Portfolio Builder

> A basic tool to help users plan for future expenses and explore sustainable investment options

This project is an early-stage investment planner that helps users estimate future financial needs and get simple, ESG-aware investment suggestions. It’s built with a focus on ethical investing—prioritizing companies and funds that align with environmental, social, and governance (ESG) values.

## 🚀 What It Does

### 👤 User Financial Profile

- Users can sign up and fill in:
  - Salary
  - Living expenses
  - EMI/loan amounts
  - How much they want to save
  - Risk tolerance (low, medium, high)
  - ESG category preferences

### 📊 Future Expense Estimation

- Predicts future costs for:
  - 🎓 Education
  - 🏥 Healthcare
  - 💍 Marriage
  - 👵 Retirement
- Adjusts projections using basic inflation data from APIs like:
  - [FRED](https://fred.stlouisfed.org/)
  - [World Bank](https://data.worldbank.org/)
  - [OECD](https://data.oecd.org/)

### 🌍 ESG Investment Suggestions

- Pulls basic data from:
  - [Alpha Vantage](https://www.alphavantage.co/)
  - Refinitiv ESG (if available)
  - Other public sustainability datasets
- Filters options based on:
  - Risk level
  - ESG scores (if available)
  - Time horizon

### 📈 Simple Dashboard

- Basic views showing:
  - Monthly investment amount
  - Predicted growth over time
  - ESG score summary (if available)

---

## 🛠 Tech Stack

| Part      | Tech                                  |
| --------- | ------------------------------------- |
| Frontend  | (Planned) React                       |
| Backend   | FastAPI, Python                       |
| Database  | MongoDB                               |
| APIs Used | Alpha Vantage, FRED, World Bank, etc. |

---
