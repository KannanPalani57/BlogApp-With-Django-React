from django.urls import path,include
from . import views
from rest_framework import routers
from .views import UserViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)



urlpatterns = [
     path('', views.PostList.as_view()),
     path('<int:pk>', views.PostDetail.as_view()),
     path('', include(router.urls)),
]
