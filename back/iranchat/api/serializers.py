from rest_framework import serializers
from blog.models import Post
from faq.models import FaqQuestion
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

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields = "__all__"