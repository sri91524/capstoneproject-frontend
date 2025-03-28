# React + Vite

# RTT-60-2024 Class Repo

## Description
Online Shopping 

### Technologies
Vite, React, Javascript, Tailwindcss (Heroicons), Axios

#### A link to live site -- https://sri-react-onlineshopping.netlify.app/

#### Components and API
1. NewsAPI used ( Env file used to store API_Key and added in gitignore to avoid tracking in github)
3. React components like SearchForm, productlist and cart are developed
4. React hooks like useState, useEffect are used
5. Interface is created to interact with api created for CRUD operation on db

##### Functionality
1. Browsing products -- User can search products using search form based on category or searchterm
2. Product Display   -- Products will be displayed based on the search 
                        Addtocart functionality which enables user to add the product to the cart
3. Shopping Cart     -- In cart, he can add/remove/delete product and based on it price and total will be calculated 
                        No. of items in the cart can be viewed on the cart menu
4. Manage Products   -- Products can be managed by adding / editing/ deleting the product
5. Thirdparty Api    -- thenewsapi is used to get news articles

###### Approach
1. useState & localstorage is used to handle the cart state across pages
2. State is stored in App component and is passed to Product page -> productlist component -> cart -> nav
3. Based on iscartopen state, cart div is toggled to show on and off
4. View product grid, add/edit product form is used to manage products
5. Products are stored in mongodb and managed via mongoose
6. Axios is used to access thenewsapi and search by category/keyword
7. Exception handling performed using try..catch block
