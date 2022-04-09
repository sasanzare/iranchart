# from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView,ListAPIView,RetrieveAPIView
from blog.models import Post
from faq.models import FaqQuestion
from contact.models import Contact
from newsletter.models import Email
from shop.models import Product
from map.models import Map
from quiz.models import Quiz,Question,Answer
from news.models import News
from .serializers import PostSerializer,UserSerializer,FaqQuestionSerializer,ContactSerializer,EmailSerializer,ProductSerializer,MapSerializer,QuizSerializer,QuestionSerializer,QuestionOptionSerializer,NewsSerializer 
from django.contrib.auth.models import User

# Create your views here.
class PostList(ListAPIView):
    queryset = Post.objects.filter(status='published')
    serializer_class = PostSerializer

class PostDetail(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class FaqList(ListAPIView):
    queryset = FaqQuestion.objects.all()
    serializer_class = FaqQuestionSerializer 
    
class ContactList(ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class EmailList(ListCreateAPIView):
    queryset = Email.objects.all()
    serializer_class = EmailSerializer


class UserList(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# shop 
class ProductList(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Map
class MapList(ListAPIView):
    queryset = Map.objects.all()
    serializer_class = MapSerializer

#Quiz
class QuiztList(ListAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    filterset_fields = ['id']

class QuestionList(ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer 
    filterset_fields = ['quiz']

class QuestionOptionList(ListAPIView):
    queryset = Answer.objects.all()
    serializer_class = QuestionOptionSerializer 
    filterset_fields = ['question']

# news
class NewsList(ListAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer 
    filterset_fields = ['date']