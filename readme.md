
  # Back-end

<p  align="center"><img  src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

  

<p  align="center">

<a  href="https://travis-ci.org/laravel/framework"><img  src="https://travis-ci.org/laravel/framework.svg"  alt="Build Status"></a>

<a  href="https://packagist.org/packages/laravel/framework"><img  src="https://poser.pugx.org/laravel/framework/d/total.svg"  alt="Total Downloads"></a>

<a  href="https://packagist.org/packages/laravel/framework"><img  src="https://poser.pugx.org/laravel/framework/v/stable.svg"  alt="Latest Stable Version"></a>

<a  href="https://packagist.org/packages/laravel/framework"><img  src="https://poser.pugx.org/laravel/framework/license.svg"  alt="License"></a>

</p>

## Requirement
Composer: https://getcomposer.org/
mysql db installed
PHP 7 installed
Apache or Nginx

## Install

clone or download project (the project includes all packages pre installed)

add your database details in .env file. (examples which part to modify bellow)

> DB_CONNECTION=mysql

>DB_HOST=127.0.0.1

>DB_PORT=3306

>DB_DATABASE=boxinator

>DB_USERNAME=root

>DB_PASSWORD=secret


Create a database with the same name you added in .env file above

Run  **php artisan migrate**  to setup db migrations

Run **php artisan db:seed** if you want to seed 5 db collections

Run **php artisan serve** to start the application on port 8000, add port prefix to change port if needed **php artisan serve --port=8080**

Run **./vendor/bin/phpunit** to run the tests

# Front-end (React - Redux)

The directory boxinator-redux is the front-end and can moved out from the back-end project if desired.

The api requests are hardcoded to port 8000 which is the default port for the backend.

**npm install** to install all dependencies

**npm start** to run the server on port 3000



  


