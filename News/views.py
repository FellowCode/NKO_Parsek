from django.shortcuts import render
from .models import *

def news(request):
    pass

def new_news(request):
    return render(request, 'News/New.html')

def add(request):
    pass
