# React + Vite

# RTT-60-2024 Class Repo

## Description
Capstone Project - Frontend

### Technologies
Vite, React, Javascript, Tailwindcss (Heroicons), Axios

#### A link to live site -- 

#### Components and API
NewsAPI used
env file used to store API_Key and added in gitignore to avoid tracking in github
React components like SearchForm, productlist and cart are developed
React hooks like useState, useEffect are used
interface is created to interact with api created for CRUD operation on db

##### Functionality
Browsing products -- User can search products using search form based on category or searchterm
Product Display   -- Products will be displayed based on the search 
                     Addtocart functionality which enables user to add the product to the cart
Shopping Cart     -- In cart, he can add/remove/delete product and based on it price and total will be calculated 
                      No. of items in the cart can be viewed on the cart menu
Manage Products   -- Products can be managed by adding / editing/ deleting the product
Thirdparty Api    -- thenewsapi is used to get news articles

###### Approach
useState & localstorage is used to handle the cart state across pages
State is stored in App component and is passed to Product page -> productlist component -> cart -> nav
Based on iscartopen state, cart div is toggled to show on and off
View product grid, add/edit product form is used to manage products
Products are stored in mongodb and managed via mongoose
Axios is used to access thenewsapi and search by category/keyword
Exception handling performed using try..catch block
