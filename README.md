Project Description:
Developed a fully responsive web app using Next.js, Tailwind CSS, and ShadCN UI. Integrated the JSONPlaceholder API to display user, post, and comment data. Enhanced UX with Mapbox for location mapping and ApexCharts for real-time data visualization. Emphasized reusable components, responsive design, and efficient data fetching with React Query.
Set-up and installation description

Step 1. Create a New Next.js App
npx create-next-app@latest my-app --typescript
cd my-app
Step 2. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Update tailwind.config.js:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Update ./src/app/globals.css:
@tailwind base;
@tailwind components;
@tailwind utilities;
Step 3. Install ShadCN UI

👥 Team Roles
Members Contribution:
Raydan Tagub - Code editor
Diane Bona - Suggestion with the overall design
Renzo Jazareno - Overall suggestion
Jerri Mae Dela Torre

Deployment URL
https://webtechfinal.vercel.app

