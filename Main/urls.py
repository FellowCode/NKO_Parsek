from django.urls import path
from .views import index, set_timezone

urlpatterns = [
    path('set-timezone/', set_timezone),
    path('', index),
]