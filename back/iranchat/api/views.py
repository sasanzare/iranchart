# from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView,ListAPIView,RetrieveAPIView
from blog.models import Post
from faq.models import FaqQuestion
from .serializers import PostSerializer,UserSerializer,FaqQuestionSerializer
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

class UserList(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer