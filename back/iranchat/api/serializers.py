from rest_framework import serializers
from blog.models import Post
from faq.models import FaqQuestion
from newsletter.models import Email
from contact.models import Contact
from shop.models import Product
from map.models import Map
from quiz.models import Quiz
from django.contrib.auth.models import User

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model= Post
        # fields = "__all__"
        exclude = ['status','updated','publish']

class FaqQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model= FaqQuestion
        fields = "__all__"
        
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model= Contact
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields = "__all__"

class EmailSerializer(serializers.ModelSerializer):
    class Meta:
        model= Email
        fields = ['email']

# shop
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model= Product
        fields = "__all__"

class MapSerializer(serializers.ModelSerializer):
    class Meta:
        model= Map
        exclude = ['created','updated']

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model= Quiz
        exclude = ['created','times_taken','author']

