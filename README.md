# Investor Calculator

## 📌 Overview

**Investor Calculator** is a React single-page application (SPA) that helps users estimate the growth of their investments over time. By inputting key financial details, the app calculates the future value of an investment based on compound interest.

## 🚀 Features

- Calculate investment growth using four key inputs:
  - **Initial Investment**: The amount invested at the start.
  - **Annual Investment**: Additional amount invested each year.
  - **Expected Return**: The expected annual interest rate.
  - **Duration**: The number of years the investment will grow.
- Displays a breakdown of the investment's growth over time.
- Provides a user-friendly interface for easy data input.
- Real-time calculation updates as inputs change.

## 🛠️ Technologies Used

- **React + Vite**: Fast and modern development setup.
- **JavaScript (ES6+)**: Core programming language.
- **CSS Modules**: Scoped styling for a clean UI.
- **Flexbox & Grid**: Responsive layout techniques.

## 🏗️ Project Structure

```
investor-calculator/ 
│── public/
│── src/ 
│ ├── assets/ # Static assets
│ │ ├── investment-calculator-logo.png
│ ├── components/ # Reusable UI components
│ │ ├── Header.jsx # Application header
│ │ ├── UserInput.jsx # Form for user inputs
│ │ ├── Result.jsx # Displays investment growth
│ ├── util/
│ │ ├── investment.js
│ ├── App.jsx # Main application component
│ ├── index.css # CSS file
│ ├── index.jsx # React root file
│── .gitignore # Files to ignore in Git
│── package.json # Project dependencies
│── README.md # Project documentation
│── vite.config.js # Vite configuration
```

## 📊 How It Works

1. Enter values for **Initial Investment**, **Annual Investment**, **Expected Return**, and **Duration**.
2. The app calculates the yearly investment growth using compound interest.
3. Results are displayed in a table format, showing the progression of total value over time.

## 💡 React Fundamentals Used

- **State Management**: `useState` is used to handle user inputs dynamically.
- **Component Composition**: The UI is built with modular React components.
- **Event Handling**: Handles user input changes efficiently.
- **Props & Data Flow**: Passes data between components for seamless updates.
- **Effects & Hooks**: Uses `useEffect` if additional side effects are needed.

## 🎨 CSS Styling

- **CSS Modules**: Used for scoped and maintainable styles.
- **Flexbox & Grid**: Ensures a responsive layout.
- **Theming**: Simple, modern, and visually appealing design.

## 🏃 Getting Started

1. Clone the repository:
```sh
git clone https://github.com/yourusername/investor-calculator.git
```

2. Navigate to the project directory:
```sh
cd investor-calculator
```

3. Install dependencies:
```sh
npm install
```

4. Start the development server:
```sh
npm run dev
```

5. Open your browser and go to ```http://localhost:5173``` to see the app in action.

### 📌 Future Improvements
- Add support for different compounding frequencies (monthly, quarterly).
- Implement data visualization with charts.
- Save user inputs using local storage.

### 📜 License
This project is open-source and available under the MIT License.
