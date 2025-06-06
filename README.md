# Simple E-Commerce Website

A lightweight e-commerce website built with pure JavaScript, HTML, and CSS. This project demonstrates fundamental web development concepts including shopping cart functionality, modal dialogs, and checkout process.

## Features

- 🛍 Product grid display
- 🛒 Shopping cart functionality
- 💳 Checkout process
- 📱 Responsive design
- 🔄 Local storage persistence
- 🎨 Modern UI/UX

## Project Structure

```
e-commerce/
├── index.html          # Main HTML file
├── styles.css         # CSS styles
├── script.js         # Frontend JavaScript
├── images/          # Product images
└── ecommerce-backend/ # Backend server (Node.js)
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alexis0822/e-commerce.git
cd e-commerce
```

2. Install backend dependencies:
```bash
cd ecommerce-backend
npm install
```

3. Set up environment variables:
Create a `.env` file in the `ecommerce-backend` directory:
```
MONGODB_URI=mongodb://localhost:27017/ecommerce
PORT=5000
```

4. Start the backend server:
```bash
node server.js
```

5. Open `index.html` in your browser or use a local server:
```bash
python -m http.server 8000
```

## Usage

1. Browse products on the main page
2. Click "Add to Cart" to add items to your shopping cart
3. Click the cart icon to view your cart
4. Proceed to checkout and fill in your details
5. Complete the order

## Technologies Used

- Frontend:
  - HTML5
  - CSS3
  - Vanilla JavaScript
  - LocalStorage API

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [Unicode Emoji](https://unicode.org/emoji/charts/full-emoji-list.html)
