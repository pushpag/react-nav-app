# React Nav App

This is a React application built with TypeScript that features a sidebar and a home page. The sidebar has a default width of 65px and expands to 250px on hover. The home page adapts its layout based on the sidebar's width.

## Project Structure

```
my-react-app
├── public
│   ├── img
│   ├── index.html
├── src
│   ├── components
│   │   ├── Sidebar.tsx
│   ├── interfaces
│   │   ├── sidebar-props.ts
│   ├── pages
│   │   ├── Billing.tsx
│   │   ├── Home.tsx
│   │   ├── Paatients.tsx
│   │   ├── Reports.tsx
│   │   ├── Schedule.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── routes.tsx
│   └── styles
│       └── App.css
├── package.json
├── tsconfig.json
└── README.md
```

## Features

- **Sidebar**: A collapsible sidebar that expands on hover.
- **Home Page**: Displays main content that adjusts based on the sidebar's width.
- **Routing**: Configured with lazy loading for the home page.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd react-nav-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to see the application in action.

## Technologies Used

- React
- TypeScript
- React Router

## License

This project is licensed under the MIT License.