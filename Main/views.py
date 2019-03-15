from django.shortcuts import render, redirect
from News.utils import get_category_list
from .utils import pagination

def index(request):
    max_pages = 12
    current_page = 1
    if request.GET:
        try:
            current_page = int(request.GET['page'])
            if not (current_page>0 and current_page<=max_pages):
                return redirect('/?page=1')
        except:
            pass
    pages = pagination(current_page, max_pages)
    categories = get_category_list()
    return render(request, 'Main/Index.html', {'categories': categories, 'pages': pages})
