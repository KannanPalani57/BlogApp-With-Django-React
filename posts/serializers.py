from rest_framework import serializers

from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields= ('id','title','content','created_at','updated_at')
        model = Post


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user = user)
        return user    
