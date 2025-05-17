# FED2 Ecom Store - Vibity

**Diana Bergelin**

![Vibity Banner](https://github.com/user-attachments/assets/3746af46-def3-4eac-9a6e-f41fde7f10a6)

## 🎯 Assignment Goal

To apply React knowledge to build a responsive, multi-page eCommerce store using the Noroff Online Shop API.

[🔗 Live Demo](https://vibitystore.netlify.app/)

---

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Future Improvements](#future-improvements)
- [Credits](#credits)
- [License](#license)

---

## 🛍️ Project Brief

This application is a functional eCommerce site built with React. It fetches product data, allowing users to:

- Browse all products on the homepage
- View detailed product information
- Add products to a cart
- Complete a checkout flow
- Contact the store via a validated form

---

## Features

- 🔍 **Homepage** | Lists all products from the API. Includes an autocomplete search bar that filters by product title.
- 🛍️ **Product Page** | Dynamic route that shows detailed product info including image, price, discount, and reviews.
- 🛒 **Cart Page** with Zustand
- ✅ **Checkout Success Page** with confetti animation
- 📱 **Contact Page** | Validated form with name, subject, email, and message inputs.

---

## Technologies Used

### 🧑‍💻 Frontend

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Styled Components](https://img.shields.io/badge/-Styled%20Components-db7093?logo=styled-components&logoColor=white&style=for-the-badge)
![Zustand](https://img.shields.io/badge/-Zustand-000000?logo=react&logoColor=white&style=for-the-badge)

### 🔧 Tools

![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![VSCode](https://img.shields.io/badge/-VSCode-007ACC?logo=visual-studio-code&logoColor=white&style=for-the-badge)
![Vitest](https://img.shields.io/badge/-Vitest-6E9F18?logo=vitest&logoColor=white&style=for-the-badge)

---

## Installation

Make sure you have **Node.js** installed on your machine.

### 1. Clone the repository

```bash
git clone https://github.com/Anaid0616/react-ecom.git
```

```bash
npm install
```

```bash
npm run dev
```

---

## 🗂️ File Structure

/public # Static files

/src

/assets # Image, Logo

/common # Api

/components # Reusable UI components

/pages # Page views (Home, Product, Cart, etc.)

/store # Zustand store

/styles # Global and styled-components

/types # TypeScript types

/utils # Custom hooks and utilities

main.tsx # Entry point

App.tsx # Route layout and navigation

---

## Usage

1. Browse all available products on the homepage.

2. Use the search bar to filter items.

3. Click on a product to view more details.

4. Add products to your cart.

5. Click the cart icon to review and proceed to checkout.

6. Complete checkout and view the confirmation screen.

## Credits

Design & Code: Diana Bergelin

Images: Chat gpt DALL-E, Noroff API

Icons: React Icons

Animations: canvas-confetti

Inspiration: Fyndiq, Pinterest

Learning Support: Moodle, Martin Krüger tutorials, React homepage, ChatGPT, React tutorials

## License

This project was built for educational purposes at Noroff and is not licensed for commercial use.

## Contact

📧 diana.bergelin@live.se

🔗 [LinkedIn](https://www.linkedin.com/in/diana-b-4209a72ba/)

[Back to Top](#FED2-Ecom-Store-Vibity)
