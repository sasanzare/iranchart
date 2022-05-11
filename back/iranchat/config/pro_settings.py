
"""
using Django 3.2.7.
"""

from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-uwid^c3wx4-w06d)%#r*7v05&00ofcj0aj+e@^(op3!ii#eeoq'



# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['178.216.251.79','iranchart.net']

SITE_ID = 1

# Application definition

INSTALLED_APPS = [
    # admin panel
    'admin_volt.apps.AdminVoltConfig',
    # admin panel
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'blog.apps.BlogConfig',
    'api.apps.ApiConfig',
    'faq.apps.FaqConfig',
    'contact.apps.ContactConfig',
    'quiz.apps.QuizConfig',
    'shop.apps.ShopConfig',
    'orders.apps.OrdersConfig',
    'newsletter.apps.NewsletterConfig',
    'map.apps.MapConfig',
    'news.apps.NewsConfig',
    'ckeditor',
    'ckeditor_uploader',
    'taggit',
    'django.contrib.sites',
    'django.contrib.sitemaps',
    'rest_framework',
    'corsheaders',
    'django_filters',
]
#Production environment

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    ),
     'DEFAULT_FILTER_BACKENDS': [
         'django_filters.rest_framework.DjangoFilterBackend',
         'rest_framework.filters.SearchFilter',
         'rest_framework.filters.OrderingFilter',
      ],

}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware', 
]

CORS_ALLOWED_ORIGIN_REGEXES = [
    'http://178.216.251.79:80',
    'http://iranchart.net'
]


ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'django.template.context_processors.request',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}



AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]




LANGUAGE_CODE = 'fa-ir'

TIME_ZONE = 'Asia/Tehran'

USE_I18N = True

USE_L10N = True

USE_TZ = True


STATIC_URL = '/static/'

MEDIA_URL = '/media/'

  

if DEBUG:
  STATICFILES_DIRS = [ BASE_DIR /  'static']
else:
  STATIC_ROOT = BASE_DIR / 'static'


MEDIA_ROOT = BASE_DIR /  'static/media'





DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

CKEDITOR_UPLOAD_PATH = "uploads/"

