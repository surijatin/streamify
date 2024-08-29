# Streamify Dashboard

This project is a dashboard for Streamify - a fictional music streaming service, providing various metrics and visualizations to monitor user growth, revenue and other key performance indicators.

## Thought Process

Given the technical requirements specified the use of **React**, the choice of framework was straightforward. I aimed to maintain a consistent color scheme aligned with [Speedy Labs](https://speedybrand.io/).

To achieve a minimal and elegant design, I utilized [Ant Design](https://ant.design/) for constructing basic components such as the metric card and the Data Table.

Additionally, I integrated [shadcn-ui's new charting library](https://ui.shadcn.com/charts) for various charts. These charts, which leverage Recharts under the hood, offer a clean and user-friendly interface, making them ideal for this project.

For state management, I opted for Redux. Although prop drilling was minimal and Redux could have been avoided, using it helped keep the code organized through action/reducer implementation.

Future enhancements could include:

- Transitioning from shadcn/ui charts to Airbnb's Visx library or directly to Recharts, as shadcn currently supports a limited variety of chart types.
- Improving mobile responsiveness, particularly addressing the Data Table overflow issue.
- Adding more dashboard views within the same project.

> **Note:** For detailed information about the data structure used in this project, please refer to the [Data Structure README](src/mockData/README.md).

## Steps to run this project locally

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/surijatin/streamify.git
   cd streamify-dashboard
   ```

2. **Install dependencies:**
   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm start
   ```

4. **Open the application:**
   Open your browser and navigate to `http://localhost:3000` to view the dashboard.

Follow these steps to get the Streamify Dashboard up and running on your local machine. If you encounter any issues, please refer to the project's documentation or open an issue on GitHub.

## Technologies Used

This project leverages a variety of modern web technologies to deliver a robust and interactive user experience. Below are the key technologies used:

- **React**: A JavaScript library for building user interfaces, allowing for the creation of reusable UI components.
- **Recharts**: A composable charting library built on React components, used for creating dynamic and responsive charts.
- **Ant Design**: A comprehensive design system and React UI library, providing a wide range of high-quality components and design elements.
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom user interfaces, offering a highly customizable and responsive design system.
- **shadcn/ui**: A collection of UI components and charts built on top of TailwindCSS, used for creating visually appealing and consistent chart elements.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality and maintainability by providing type safety and advanced IDE support.
- **React Router**: A library for routing in React applications, enabling navigation between different views and maintaining the state of the application.

These technologies work together to create a seamless and efficient development workflow, ensuring a high-performance and user-friendly dashboard.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [React documentation](https://reactjs.org/)
- [Recharts documentation](https://recharts.org/en-US/)
- [Ant Design documentation](https://ant.design/)
- [TailwindCSS documentation](https://tailwindcss.com/)
- [shadcn/ui charts documentation](https://ui.shadcn.com/charts)
