# IranChart

[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react)](https://react.dev/)
[![Django](https://img.shields.io/badge/Django-3.2.7-092E20?logo=django)](https://www.djangoproject.com/)
[![DRF](https://img.shields.io/badge/Django%20REST%20Framework-3.13.1-red)](https://www.django-rest-framework.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4.6-7952B3?logo=bootstrap)](https://getbootstrap.com/)
[![Repository](https://img.shields.io/badge/GitHub-sasanzare%2Firanchart-181717?logo=github)](https://github.com/sasanzare/iranchart)

## Executive Summary

IranChart is a full-stack cryptocurrency and financial education platform built with React on the frontend and Django/Django REST Framework on the backend. The project combines educational articles, courses, quizzes, news, FAQ, contact handling, newsletter subscription, map/location content, product/course ordering models, and a Persian-language admin panel.

The repository is structured as two applications:

- `front`: A React single-page application that provides the public user experience.
- `back/iranchat`: A Django backend that manages content, exposes REST APIs, and powers the admin panel.

IranChart is a strong portfolio project because it demonstrates end-to-end product thinking: content management, API design, frontend routing, educational flows, quiz logic, course/product modeling, order modeling, newsletter/contact capture, rich text publishing, admin customization, and localization for Persian-speaking users.

## Product Vision

IranChart is designed to help Persian-speaking users learn about cryptocurrency, financial markets, brokers, courses, and related educational material. It combines informational content with interactive learning features so that users can move from reading articles to taking quizzes and exploring courses.

## Core Product Areas

| Area | Description |
| --- | --- |
| Educational articles | Published posts with categories, rich text, thumbnails, tags, and comments |
| Courses/products | Course catalog with price, capacity, location, level, description, topics, and availability |
| Quizzes | Quiz categories, quizzes, questions, answer options, scoring, and related learning resources |
| News | News publishing and API delivery |
| FAQ | Ordered FAQ questions and answers |
| Contact | Contact form model and API endpoint |
| Newsletter | Email capture and newsletter content models |
| Map | Location records and map-based frontend component |
| Orders | Order and order item models for course/product checkout flow |
| Admin panel | Persian Django admin with Volt admin theme support |

## Why This Project Matters

This project goes beyond a static website. It shows how to build a content-driven educational platform with a real backend and multiple domain modules. For a hiring review, it demonstrates:

- React SPA architecture and routing
- Component-based frontend development
- REST API consumption with Axios and Fetch
- Django model design
- Django REST Framework serializers and generic views
- Admin panel customization
- Rich text content management with CKEditor
- Filtering, ordering, and search-ready API configuration
- Persian localization and RTL-oriented content
- Quiz state management and scoring logic
- Product, order, contact, FAQ, newsletter, and map modules

## Technology Stack

### Frontend

| Layer | Technologies |
| --- | --- |
| Framework | React 17 |
| Routing | React Router DOM 6 |
| HTTP | Axios, Fetch |
| UI | Bootstrap 4.6, React Bootstrap |
| Components | Custom blocks, reusable components, micro components |
| Maps | React Map GL, Mapbox token configuration |
| Carousel | React Multi Carousel |
| Icons | Font Awesome |
| Build tooling | Create React App / React Scripts 5 |

### Backend

| Layer | Technologies |
| --- | --- |
| Framework | Django 3.2.7 |
| API | Django REST Framework 3.13.1 |
| Filtering | django-filter |
| CORS | django-cors-headers |
| Rich text | django-ckeditor |
| Tags | django-taggit |
| Admin UI | django-admin-volt |
| Images | Pillow |
| Sitemap | django-sitemaps |
| Database | SQLite in development settings |
| Language/timezone | Persian/Iran settings: `fa-ir`, `Asia/Tehran` |

## Repository Structure

```text
iranchart/
├── README.md
├── front/
│   ├── package.json
│   ├── public/
│   │   ├── css/
│   │   ├── image/
│   │   ├── js/
│   │   ├── video/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       ├── blocks/
│       │   ├── articleslist/
│       │   ├── courseList/
│       │   ├── footer/
│       │   ├── header/
│       │   ├── newsList/
│       │   └── quizzesList/
│       ├── components/
│       │   ├── CommentList/
│       │   ├── articlecard/
│       │   ├── articlecontent/
│       │   ├── contactform/
│       │   ├── courseCard/
│       │   ├── latestArticles/
│       │   ├── map/
│       │   ├── newsletter/
│       │   ├── quizCard/
│       │   └── sourcePost/
│       ├── microComponents/
│       │   ├── baseUrl/
│       │   ├── correct/
│       │   ├── incorrect/
│       │   ├── option/
│       │   └── quizCategory/
│       └── pages/
│           ├── about/
│           ├── article/
│           ├── articles/
│           ├── cart/
│           ├── contact/
│           ├── course/
│           ├── courses/
│           ├── faq/
│           ├── home/
│           ├── news/
│           ├── order/
│           ├── quiz/
│           └── quizzes/
└── back/
    └── iranchat/
        ├── manage.py
        ├── requirements.txt
        ├── api/
        ├── blog/
        ├── config/
        ├── contact/
        ├── faq/
        ├── map/
        ├── news/
        ├── newsletter/
        ├── orders/
        ├── quiz/
        ├── shop/
        ├── static/
        └── static/admin_volt/
```

## Frontend Application

The frontend is a React single-page application. `App.js` defines the main application shell with a shared header, footer, back-to-top behavior, scroll restoration, and route mapping.

### Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about-us` | About |
| `/contact-us` | Contact |
| `/articles` | Article listing |
| `/article/:id` | Article detail |
| `/faq` | FAQ |
| `/courses` | Course listing |
| `/course/:id` | Course detail |
| `/cart` | Cart |
| `/order` | Order form |
| `/quizzes` | Quiz listing |
| `/quiz/:id` | Interactive quiz |
| `/news` | News listing |
| `*` | Not found page |

### Frontend Components

| Component area | Responsibility |
| --- | --- |
| `articleslist` | Fetches and renders recent articles |
| `courseList` | Fetches and renders courses/products |
| `quizzesList` | Fetches quizzes and renders responsive carousel cards |
| `contactform` | Validates email format and posts contact messages |
| `newsletter` | Captures newsletter email subscriptions |
| `map` | Displays Mapbox-based location markers |
| `quizCard` | Presents quiz entry cards |
| `sourcePost` | Shows learning resources related to missed quiz answers |
| `loading` | Reusable loading state |
| `useDocumentTitle` | Per-page SEO title and meta description helper |

## Backend Application

The backend is a Django project with several independent apps. Django REST Framework exposes public endpoints through `api/views.py`, while Django admin provides content and operational management.

### Installed Django Apps

| App | Purpose |
| --- | --- |
| `blog` | Articles, categories, comments, rich text content, tags |
| `api` | REST API serializers, views, and URLs |
| `faq` | Frequently asked questions |
| `contact` | Contact messages |
| `quiz` | Quiz categories, quizzes, questions, and answers |
| `shop` | Course/product catalog |
| `orders` | Orders and order items |
| `newsletter` | Newsletter email capture and content |
| `map` | Location records |
| `news` | News publishing |
| `ckeditor` | Rich text editor and uploads |
| `taggit` | Tagging for posts |
| `rest_framework` | API layer |
| `corsheaders` | Cross-origin frontend/backend communication |
| `django_filters` | API filtering |
| `admin_volt` | Admin dashboard theme |

## API Surface

The API is mounted under `/api/`, with versioned endpoints under `/api/v1/`.

| Endpoint | Method style | Purpose |
| --- | --- | --- |
| `/api/v1/` | List | Published article list |
| `/api/v1/<id>` | Retrieve | Article detail |
| `/api/v1/map` | List | Map locations |
| `/api/v1/faq` | List | FAQ questions |
| `/api/v1/contact` | List/Create | Contact messages |
| `/api/v1/newsletter` | List/Create | Newsletter emails |
| `/api/v1/products` | List | Course/product catalog |
| `/api/v1/product/<id>` | Retrieve | Course/product detail |
| `/api/v1/quizzes/` | List | Quizzes, filterable by category |
| `/api/v1/quiz/<id>` | Retrieve | Quiz detail |
| `/api/v1/question/` | List | Questions, filterable by quiz |
| `/api/v1/question-option/` | List | Answer options, filterable by question |
| `/api/v1/news/` | List | News, filterable by date |

## Backend Models

### Blog

The blog app supports article publishing with categories, authors, rich text content, thumbnails, tags, status workflow, publish date, and comments.

| Model | Responsibility |
| --- | --- |
| `Category` | Blog category with name and slug |
| `Post` | Rich article with title, slug, description, author, category, body, thumbnail, status, tags |
| `Comment` | Comment records attached to posts |

### Quiz

The quiz app supports interactive learning and remediation. Questions can reference a `Post`, which allows the frontend to show related reading material when a user answers incorrectly.

| Model | Responsibility |
| --- | --- |
| `Category` | Quiz category |
| `Quiz` | Quiz metadata, author, category, thumbnail |
| `Question` | Prompt attached to a quiz and related post |
| `Answer` | Answer options with `correct` flag |

### Shop and Orders

The shop app models courses as products. Orders and order items define the checkout domain.

| Model | Responsibility |
| --- | --- |
| `shop.Category` | Course/product category |
| `Product` | Course with level, location, description, topics, price, availability, stock, image |
| `Order` | Buyer details, address, phone, email, description, payment state |
| `OrderItem` | Product, price, quantity, and cost calculation |

### Communication and Content Support

| Model | Responsibility |
| --- | --- |
| `Contact` | Contact form messages |
| `Email` | Newsletter email records |
| `Content` | Newsletter/content block model |
| `FaqQuestion` | Ordered FAQ questions and answers |
| `News` | Rich news content |
| `Map` | Named location with slug, latitude, and longitude |

## Interactive Quiz Flow

The quiz page is one of the most portfolio-relevant parts of the project. It shows frontend state management and backend-driven learning content.

### Flow

1. The user opens `/quiz/:id`.
2. The frontend fetches the quiz detail from `/api/v1/quiz/<id>`.
3. The frontend fetches questions from `/api/v1/question/?quiz=<id>`.
4. For each question, answer options are fetched from `/api/v1/question-option/?question=<id>`.
5. The UI tracks selected answer, score, correct count, incorrect count, progress, and completion state.
6. If a user answers incorrectly, the frontend fetches the related post and adds it as a recommended learning resource.

This creates a useful learning loop: test the user, identify knowledge gaps, then direct the user back to relevant educational content.

## Content and SEO Features

The frontend includes a reusable `UseDocumentTitle` helper for per-page titles and meta descriptions. The backend uses rich text fields through CKEditor, which lets admins create formatted articles, product/course descriptions, topics, and news content without changing code.

## Admin Panel

The Django admin is customized for Persian:

- Site header: IranChart admin panel
- Site title: IranChart
- Index title: welcome message
- Admin Volt theme integrated through `django-admin-volt`
- Persian language code and Tehran timezone

The admin can manage core content such as articles, quizzes, products, FAQ items, contact messages, newsletter emails, map records, orders, and news.

## Local Development

### Prerequisites

- Python 3.x
- Node.js and npm
- pip and virtualenv
- Git

### Clone

```bash
git clone https://github.com/sasanzare/iranchart.git
cd iranchart
```

## Backend Setup

```bash
cd back/iranchat
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Backend development server:

```text
http://localhost:8000
```

Django admin:

```text
http://localhost:8000/admin/
```

API base URL:

```text
http://localhost:8000/api/v1/
```

## Frontend Setup

```bash
cd front
npm install
npm start
```

Frontend development server:

```text
http://localhost:3000
```

The frontend currently points to:

```js
const BASE_URL = "http://localhost:8000/api/v1/";
```

Update `front/src/microComponents/baseUrl/BaseUrl.js` when deploying to production.

## Environment and Configuration

| Area | Current behavior |
| --- | --- |
| Backend database | SQLite in development settings |
| Backend language | Persian, `fa-ir` |
| Backend timezone | `Asia/Tehran` |
| CORS | Allows local frontend origin |
| Static/media | Django static and media serving configured |
| Frontend API base | Hardcoded local API base URL |
| Mapbox | Token loaded from `mapBoxToken.json` |

## Running The Full Stack

Start backend:

```bash
cd back/iranchat
.venv\Scripts\activate
python manage.py runserver
```

Start frontend in a second terminal:

```bash
cd front
npm start
```

Then open:

```text
http://localhost:3000
```

## Portfolio Presentation

This project can be presented as a real full-stack platform because it demonstrates:

- Separation between frontend and backend applications
- API-first communication between React and Django REST Framework
- Public content pages and admin-managed content
- Rich text publishing through CKEditor
- Interactive quiz logic with scoring and learning recommendations
- Product/course catalog modeling
- Order and order item modeling
- Contact and newsletter workflows
- Persian localization and admin customization
- Reusable frontend components and page-level routing
- Backend filters and ordering through DRF and django-filter
- Map/location integration

## Suggested Demo Script For Interviews

1. Start with the product goal: a Persian educational platform for crypto and financial learning.
2. Show the frontend route map in `App.js`.
3. Open the homepage and explain article/course/quiz sections.
4. Show the quiz page and explain question loading, option loading, scoring, and recommended posts for wrong answers.
5. Show the Django admin and explain content authoring.
6. Open `api/urls.py` and show the API contract.
7. Open `api/views.py` and explain DRF generic views.
8. Open `blog/models.py`, `quiz/models.py`, and `shop/models.py` to explain the core domain models.
9. Show how the frontend consumes `/api/v1/` endpoints.
10. Finish with production-hardening steps.

## Production Hardening Notes

The project is strong as a portfolio sample and has a clear path to production readiness. Recommended hardening steps:

- Move `SECRET_KEY`, debug settings, allowed hosts, CORS origins, and Mapbox token into environment variables.
- Use separate development and production settings consistently.
- Set `DEBUG = False` in production.
- Replace SQLite with PostgreSQL for production deployment.
- Add API permissions and authentication where write operations are exposed.
- Add validation and throttling to contact/newsletter endpoints.
- Add tests for serializers, views, quiz scoring behavior, and contact/newsletter submissions.
- Replace hardcoded frontend API base URL with environment-based configuration.
- Add loading, error, and empty states consistently across all pages.
- Add sitemap and SEO metadata for published articles and courses.
- Add screenshots and a short recorded demo to the README.

## Roadmap

| Priority | Improvement |
| --- | --- |
| High | Add environment-based configuration for frontend and backend |
| High | Add screenshots and demo data for portfolio presentation |
| High | Add API permissions and production settings |
| Medium | Add tests for quiz, blog, product, contact, and newsletter modules |
| Medium | Add full order submission integration from frontend to backend |
| Medium | Improve map data loading from the backend instead of static fallback data |
| Low | Add analytics for quiz completion and popular course pages |

## API Reference Summary

```text
GET  /api/v1/                     List published posts
GET  /api/v1/<id>                 Retrieve a post
GET  /api/v1/map                  List map records
GET  /api/v1/faq                  List FAQ records
GET  /api/v1/products             List products/courses
GET  /api/v1/product/<id>         Retrieve product/course
GET  /api/v1/quizzes/             List quizzes
GET  /api/v1/quiz/<id>            Retrieve quiz
GET  /api/v1/question/?quiz=<id>  List questions for quiz
GET  /api/v1/question-option/     List answer options
GET  /api/v1/news/                List news records
POST /api/v1/contact              Submit contact message
POST /api/v1/newsletter           Submit newsletter email
```

## Source

Repository: <https://github.com/sasanzare/iranchart>

