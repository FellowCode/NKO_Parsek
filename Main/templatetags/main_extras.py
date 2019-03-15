from django import template

register = template.Library()

@register.filter
def last_index(value):
    return value[-1]
