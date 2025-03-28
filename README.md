# Enhanced Gen AI Analytics Dashboard

## Overview
The **Enhanced Gen AI Analytics Dashboard** is a powerful and visually appealing analytics tool that leverages AI to process queries and generate interactive visualizations. This project includes significant improvements in UI/UX, query processing, and visualization capabilities.

## Features

### Enhanced Visualizations
- Supports multiple chart types: **Line, Bar, Area, Pie**
- Beautiful **color gradients and animations**
- **Responsive and interactive** charts
- **Smart chart type selection** based on query content

### Improved UI/UX
- **Larger, more prominent search input**
- AI indicator with a **sparkles icon** ✨
- **Better spacing and typography** for readability
- Smooth **transitions and hover effects**
- **Descriptive titles and insights** for each visualization

### Smarter Query Processing
- **Context-aware** chart selection
- Uses different **mock datasets** based on query content
- More **realistic query suggestions**
- Improved **loading and error states**

### New Features
- **Dynamic chart switching** based on data type
- **Gradient fills** for area charts
- **Custom color palettes** for different chart types
- **Detailed insights** accompanying each visualization

## Project Structure
```
📂 src
 ├── 📂 store
 │    └── querySlice.ts    # Manages query-related state
 │
 ├── 📂 components
 │    ├── QueryInput.tsx    # Search input component
 │    ├── ResultsDisplay.tsx # Displays charts and insights
 │
 ├── App.tsx                # Main application entry
```

## Installation & Setup

### Prerequisites
- **Node.js** (Latest LTS version recommended)
- **npm** or **yarn**

### Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd enhanced-gen-ai-dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

## Usage
- Enter a **query** in the search bar.
- The AI **automatically selects** the best visualization type.
- Hover over charts for **interactive insights**.
- Enjoy a **seamless experience** with animations and transitions.

## Technologies Used
- **React** (Frontend Framework)
- **TypeScript** (Static Typing)
- **Recharts** (Data Visualization)
- **Redux Toolkit** (State Management)
- **Tailwind CSS** (Styling)

## Contributing
We welcome contributions! Feel free to submit **issues** or **pull requests**.

## License
This project is licensed under the **MIT License**.

---

🚀 Enjoy using the **Enhanced Gen AI Analytics Dashboard**!

