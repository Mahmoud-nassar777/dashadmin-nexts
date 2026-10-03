# DashAdmin Next

A modern, responsive admin dashboard built with **Next.js, TypeScript, Tailwind CSS, Framer Motion, and Recharts**.

The dashboard provides a clean interface for managing products, clients, sales, and orders, with interactive charts, responsive tables, search functionality, and animated UI components.

## ✨ Features

* 📊 Overview dashboard with key statistics
* 🛍️ Products management table
* 👥 Clients management and search
* 💰 Sales overview and analytics
* 📦 Orders management and filtering
* 📈 Interactive charts and data visualization
* 🔎 Search functionality
* 📱 Fully responsive layout
* 🎨 Modern dark dashboard UI
* ⚡ Smooth animations and transitions
* 🧩 Reusable React components
* 🗂️ Local JSON data source for dashboard content

## 🛠️ Tech Stack

* **Next.js 16**
* **React 19**
* **TypeScript**
* **Tailwind CSS**
* **Framer Motion**
* **Recharts**
* **Lucide React**
* **Next.js Image**
* **ESLint**

## 📌 Dashboard Sections

### Dashboard

Provides an overview of the main business metrics, including:

* Total Sales
* Total Clients
* Total Products
* Stock
* Sales Overview
* Category Distribution
* Order Status Distribution
* Product Performance

### Products

Displays product information including:

* Product name
* Product ID
* Category
* Price
* Stock
* Sales
* Actions

### Clients

Provides a responsive clients table with:

* Client name
* Email
* Phone number
* Country
* Search functionality
* Edit and delete actions

### Sales

Includes sales analytics such as:

* Total Revenue
* Average Order Value
* Total Sales
* Total Growth
* Sales Overview
* Category Distribution

### Orders

Provides an order management interface with:

* Order ID
* Client
* Total
* Status
* Date
* Country
* Search functionality
* Edit and delete actions

## 📊 Data Visualization

The dashboard uses **Recharts** to visualize data through interactive charts, including:

* Sales overview
* Category distribution
* Order status distribution
* Product performance

## 📱 Responsive Design

The interface is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

Tables and dashboard sections adapt to smaller screens for a better user experience.

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/Mahmoud-nassar777/dashadmin-nexts.git
```

Navigate to the project:

```bash
cd dashadmin-nexts
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📂 Project Structure

```text
dashadmin-nexts/
├── app/
│   ├── products/
│   ├── users/
│   ├── sales/
│   ├── orders/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── StateCard.tsx
│   ├── OrdersTable.tsx
│   ├── UsersTable.tsx
│   ├── SalesOverviewChart.tsx
│   ├── CategoryDistributionChart.tsx
│   └── ...
│
├── public/
│   └── data/
│       └── data.json
│
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Project Goals

This project was built to practice and demonstrate modern frontend development using the Next.js ecosystem, with a focus on:

* TypeScript
* Reusable components
* Responsive UI development
* Data visualization
* Component-based architecture
* Client-side interactions
* Modern dashboard interfaces

## 👨‍💻 Author

**Mahmoud Nassar**

Frontend Developer focused on building modern, responsive web applications with React and Next.js.

* GitHub: https://github.com/Mahmoud-nassar777
* LinkedIn: https://www.linkedin.com/in/mahmoud-nassar-a83163323/
* Portfolio: https://dev-mwn.vercel.app/

## 📄 License

This project is available for educational and portfolio purposes.
