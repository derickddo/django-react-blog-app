from django.urls import path
from .views import PostView, GetPostView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('posts', PostView.as_view()),
    path('posts/<str:pk>', GetPostView.as_view()),
    path('token', obtain_auth_token),
]