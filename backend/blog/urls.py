from django.urls import path
from .views import GetAllPostView

urlpatterns = [
    path('posts', GetAllPostView.as_view())
]