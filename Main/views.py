from django.shortcuts import render, redirect
from News.utils import get_category_list
from News.models import News
from .utils import pagination
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def set_timezone(request):
    if request.POST:
        if 'tz_info' in request.POST:
            tz_info = request.POST['tz_info']
            request.session['tz_info'] = tz_info
        return redirect('/')
    else:
        return redirect('/')

def index(request):
    NEWS_BY_PAGE = 12

    current_page = 1
    news_list = News.objects.filter(visible=True)
    news_list, pages = pagination(current_page, news_list, NEWS_BY_PAGE)
    if request.GET:
        try:
            current_page = int(request.GET['page'])
            if not (current_page>0 and current_page<=pages['max_pages']):
                return redirect('/')
        except:
            return redirect('/')

    categories = get_category_list()
    return render(request, 'Main/Index.html', {'categories': categories,
                                               'news_list': news_list,
                                               'pages': pages})
