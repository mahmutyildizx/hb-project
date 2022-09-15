# HepsiBurada Frontend Challenge

This project implements the e-commerce web app for HepsiBurada code challenge.
The product list of the application was created with JSON Server.

- Application available on [Heroku](https://hb-project.herokuapp.com/)
- Backend data [Heroku](https://products-mock-api.herokuapp.com/products)
- Backend repository [GitHub](https://github.com/mahmutyildizx/products-api)

## Features

- A maximum of 12 products are displayed on the page.
- If there are more than 12 products, you can see the other products with the pagination at the bottom.
- You can add a product to the cart with a button. When the product is added to the cart, the button is disable.
- When the application is opened for the first time, the data about the Cart are saved in the Local Storage layer. The products in the Cart continue to appear when the page is refreshed or closed and opened.
- You can search for products with the search bar above.
- You can filter the products as you wish with the SideBars on the left.
- You can sort the products as you wish with the SideBars on the left. Sorting does not change when filter is changed.

## Install dependencies

First clone this repository.

```bash
$ git clone https://github.com/mahmutyildizx/hb-project.git
```

Install dependencies. Make sure you already have [`nodejs`](https://nodejs.org/en/) & [`npm`](https://www.npmjs.com/) installed in your system.

**Install**

```zsh
$ npm install  # or yarn
```

## Project commands

**Test**

```zsh
$ npm run test # or yarn test
```

**Run it**

```zsh
$ npm start # or yarn start
```

## Author

- **Mahmut Yıldız**
