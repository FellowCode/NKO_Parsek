from django.urls import path
from .views import *

urlpatterns = [
    path('set-timezone/', set_timezone),
    path('', index),
]