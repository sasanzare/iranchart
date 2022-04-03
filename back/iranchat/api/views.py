# from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView,ListAPIView,RetrieveAPIView
from blog.models import Post
from faq.models import FaqQuestion
from contact.models import Contact
from newsletter.models import Email
from shop.models import Product
from .serializers import PostSerializer,UserSerializer,FaqQuestionSerializer,ContactSerializer,EmailSerializer,ProductSerializer
from django.contrib.auth.models import User

# Create your views here.
class PostList(ListAPIView):
    queryset = Post.objects.all()
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