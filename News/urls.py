from django.urls import path
from .views import *

urlpatterns = [
    path('category/<category>/', news_category),
    path('', news),
]