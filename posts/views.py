from django.shortcuts import render
from rest_framework import generics
from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Post
from .serializers import PostSerializer, UserSerializer, PostArtileSerializer

# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    


class PostList(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer       

class PostArticle(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostArtileSerializer
    