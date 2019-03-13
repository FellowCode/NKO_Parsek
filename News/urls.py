from django.urls import path
from .views import *

urlpatterns = [
    path('new/', new_news),
    path('add/', add),
    path('', news),
]