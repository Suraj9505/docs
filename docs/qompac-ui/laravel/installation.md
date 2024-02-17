---
sidebar_position: 21
---

# Installation

<hr/>

<div className="border-bottom border-dark"></div>

1. _Create Database_
2. _Upload the Codes in below directory based on your server_

   _**In Linux**_

   _Path: var/www/html/_

   _**In cPanel**:_

   _Inside File manager -> Path: public_html/_

3. _For database settings, open the .env file with a text editor and set your database settings._

:::info
.env is a hidden file, you can see it by opening directory to a text editor.
:::

4. Link your storage folder to public Run in terminal or CMD: php artisan storage:link

**Steps to follow for getting started with the template:**

### Laravel

1. _Start command prompt window or terminal and change directory laravel_

```
cd laravel
```

2. _For installing vendor Run in terminal or CMD:_

```
composer install
```

3. _Copy .env.example to .env file_

```
cp .env.example .env
```

4. _For generating key Run in terminal or CMD:_

```
php artisan key:generate
```

5. Create database with name "**Your Database Name**" in your sqlyog,laragon,xampp,wamp

- _Open and edit the /.env file and provide your server details:_

```
DB_CONNECTION="mysql"
DB_HOST="127.0.0.1"
DB_PORT="3306"
DB_DATABASE="YOUR DATABASE NAME"
DB_USERNAME="YOUR USERNAME"
DB_PASSWORD="YOUR PASSWORD"

```

- _Then run the below commands_

```
php artisan migrate
```

```
php artisan db:seed
```

OR

```
php artisan migrate:fresh --seed
```

6. _For installing node_modules Run in terminal or CMD:_

```
npm install
```

7. _For building css and js Run in terminal or CMD:_

```
npm run dev
```

OR

```
npm run build
```

OR

```
npm run watch
```

8. To run project

```
php artisan serve
```
