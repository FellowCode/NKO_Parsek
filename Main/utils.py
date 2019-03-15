def pagination(current_page, max_pages):
    MAX_PAGINATION = 4
    min_page = current_page - MAX_PAGINATION if current_page - MAX_PAGINATION > 0 else 1
    max_page = current_page + MAX_PAGINATION + 1 if current_page + MAX_PAGINATION + 1 <= max_pages else max_pages + 1
    return {'page': current_page, 'range': range(min_page, max_page)}
