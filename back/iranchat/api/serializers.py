from rest_framework import serializers
from blog.models import Post
from django.contrib.auth.models import User

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model= Post
        # fields = "__all__"
        exclude = ['status','updated','publish']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields = "__all__"