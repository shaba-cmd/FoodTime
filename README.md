# FoodTime — Fullstack Food Delivery App

## Описание

FoodTime — это веб-приложение для доставки здоровой еды. Проект включает клиентскую часть, административную панель и REST API с аутентификацией и базой данных.

## Технологии

**Frontend**
 * React
 * Vite
 * React Router
**Admin Panel**
 * React
 * Vite
 * React Router
**Backend**
 * Node.js 24
 * Express.js
 * PostgreSQL (через pg)
 * bcryptjs (хеширование паролей)
 * jsonwebtoken (JWT аутентификация)
 * multer (загрузка файлов)
 * express-validator (валидация)

## Деплой

**Проект задеплоен на Render**

| Сервис       | URL                                                 |
| ------------ | --------------------------------------------------- |
| Frontend     | <https://foodtime-x20c.onrender.com>                |
| Admin Panel  | <https://foodtime-admin-xxxxx.onrender.com>         |
| API          | <https://foodtime-api-26ur.onrender.com>            |
| Health Check | <https://foodtime-api-26ur.onrender.com/api/health> |

## Локальный запуск

```bash
# Клонировать репозиторий
git clone https://github.com/shaba-cmd/FoodTime.git
cd FoodTime

# Запустить все сервисы через Docker Compose
docker compose up --build
```

После запуска:
* Frontend: http://localhost:3000
* Admin: http://localhost:3001
* API: http://localhost:5000
* Database: localhost:5432

## API Endpoints

| Метод | Путь               | Описание                   |
| ----- | ------------------ | -------------------------- |
| GET   | /api/health        | Проверка работоспособности |
| POST  | /api/auth/register | Регистрация                |
| POST  | /api/auth/login    | Авторизация                |
| GET   | /api/auth/me       | Текущий пользователь       |
| GET   | /api/products      | Список продуктов           |
| GET   | /api/faq           | FAQ с категориями          |
| POST  | /api/orders        | Создание заказа            |


## Автор

shaba-cmd