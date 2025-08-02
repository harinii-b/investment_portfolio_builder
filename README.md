# 🌱 Ethical Investment Portfolio Builder

> Personalized, ESG-focused financial planning and investment recommendation system

The **Ethical Investment Portfolio Builder** is a full-stack application that empowers users to build a financially sound and sustainable future. It helps users plan their investments based on personal income, expenses, and life goals while prioritizing ethical and ESG-compliant (Environmental, Social, Governance) assets.

## 🚀 Features

### 👤 User Profile & Financial Intake

- Secure registration and authentication (with email verification & password hashing)
- Financial profile setup with:
  - Salary & living expenses
  - EMI/loan obligations
  - Savings preference
  - Risk tolerance level
  - ESG category preferences

### 📊 Personalized Financial Planning

- Predicts future expenses for:
  - 🎓 Education
  - 🏥 Healthcare
  - 💍 Marriage
  - 👵 Retirement
- Uses inflation-adjusted projections powered by APIs like:
  - [FRED](https://fred.stlouisfed.org/)
  - [World Bank](https://data.worldbank.org/)
  - [OECD](https://data.oecd.org/)

### 🌍 ESG Investment Recommendations

- Fetches real-time data from:
  - [Alpha Vantage](https://www.alphavantage.co/) (ETFs, Stocks, Bonds)
  - Refinitiv ESG API (Sustainability scores)
  - OpenSustainability / Carbon Interface (Impact data)
- Filters options based on:
  - ESG score thresholds
  - Risk appetite
  - Time horizon
- Suggests optimal investment splits:
  | Investment Type | Allocation | Time Horizon | Risk | Return |
  |----------------------|------------|---------------|-------|----------|
  | Green Bonds | 40% | 10+ years | Low | 6–8% |
  | Sustainable ETFs | 30% | 5–10 years | Medium| 8–12% |
  | ESG Stocks | 20% | 2–5 years | High | 12–20% |
  | Fixed Deposits (FDs) | 10% | Liquid | Very Low | 4–6% |

### 📈 Dashboard & Visualization

- Real-time visual insights on:
  - Portfolio growth
  - Expense coverage over time
  - Asset allocation & sustainability score
- Interactive charts: line, bar, pie, area graphs for performance & planning

### 🔔 Notifications & Reports

- Alerts for:
  - Market volatility
  - Rebalancing suggestions
  - New ESG opportunities
- Exportable reports:
  - Investment strategy report
  - Sustainability impact analysis
  - Goal coverage summary

---

## 🛠 Tech Stack

| Layer         | Technologies                                                       |
| ------------- | ------------------------------------------------------------------ |
| **Frontend**  | React / React Native (for future mobile support)                   |
| **Backend**   | FastAPI, Python                                                    |
| **Database**  | MongoDB                                                            |
| **APIs Used** | Alpha Vantage, Refinitiv ESG, World Bank, FRED, OpenSustainability |

---
