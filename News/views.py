from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
import json
from .utils import get_category_list
from Main.utils import pagination
import math

def news(request):
    if request.GET:
        id = int(request.GET['id'])
        news = News.objects.get(id=id)
        return render(request, 'News/News.html', {'categories': get_category_list(), 'news': news})
    else:
        redirect('/')

def news_category(request, category):
    NEWS_BY_PAGE = 12

    current_page = 1
    category = Category.objects.get(slug=category)
    news_list = News.objects.filter(category=category, visible=True)
    max_pages = math.ceil(news_list.count()/NEWS_BY_PAGE)
    if request.GET:
        try:
            current_page = int(request.GET['page'])
            if not (current_page>0 and current_page<=max_pages):
                return redirect('/news/list/')
        except:
            return redirect('/news/list/')

    #Выборка из списка по странице
    right = current_page*NEWS_BY_PAGE
    if right > news_list.count():
        news_list = news_list[(current_page-1)*NEWS_BY_PAGE:]
    else:
        news_list = news_list[(current_page-1)*NEWS_BY_PAGE:right]
    pages = pagination(current_page, max_pages)
    return render(request, 'News/NewsCategory.html', {'categories': get_category_list(),
                                                      'category': category,
                                                      'news_list': news_list,
                                                      'pages': pages})
