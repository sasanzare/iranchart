# Iranchart
### Abstract
The Iranchart project serves as an illustrative example of building a RESTful API using Django and Django Rest Framework (DRF). By following this sample project, developers can gain insights into structuring APIs, handling serializers, and managing endpoints.
________________________________________
Technical Overview
1. Project Setup
1.	Create a new Django project:
2.	django-admin startproject iranchart
3.	Set up a virtual environment and install required packages:
4.	cd iranchart
5.	python -m venv venv
6.	source venv/bin/activate
7.	pip install django djangorestframework
8.	Create a new app within the project:
9.	python manage.py startapp api
2. Model and Serializer
•	Define a simple model (e.g., Iranchart) in api/models.py.
•	Create a serializer (e.g., IranchartSerializer) to convert model instances to JSON.
3. Views and URLs
•	Create views (e.g., IranchartListView and IranchartDetailView) in api/views.py.
•	Define API endpoints in api/urls.py.
4. Database and Migrations
•	Set up your database (e.g., SQLite) in settings.py.
•	Run migrations to create database tables:
•	python manage.py makemigrations
•	python manage.py migrate
5. Sample Data
•	Populate the database with sample zip code data.
6. Testing the API
•	Start the development server:
•	python manage.py runserver
•	Access the API endpoints (e.g., /api/irancharts/ and /api/irancharts/<pk>/).

