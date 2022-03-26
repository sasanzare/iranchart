# from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView,ListAPIView,RetrieveAPIView
from blog.models import Post
from faq.models import FaqQuestion
from contact.models import Contact
from .serializers import PostSerializer,UserSerializer,FaqQuestionSerializer,ContactSerializer
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

class UserList(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer