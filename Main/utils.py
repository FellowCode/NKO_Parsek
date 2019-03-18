import math

def pagination(current_page, objects, obj_in_page):
    MAX_PAGINATION = 4
    max_pages = math.ceil(objects.count() / obj_in_page)
    min_page = current_page - MAX_PAGINATION if current_page - MAX_PAGINATION > 0 else 1
    max_page = current_page + MAX_PAGINATION + 1 if current_page + MAX_PAGINATION + 1 <= max_pages else max_pages + 1
    #Выборка из списка по странице
    right = current_page*obj_in_page
    if right > objects.count():
        objects = objects[(current_page-1)*obj_in_page:]
    else:
        objects = objects[(current_page-1)*obj_in_page:right]
    return objects, {'page': current_page, 'range': range(min_page, max_page), 'max_pages': max_pages}
