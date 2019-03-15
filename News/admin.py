from django.contrib import admin
from django import forms
from .models import *
from django.forms import TextInput, Textarea
from django.db import models
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django.utils.html import format_html

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    readonly_fields = ['news_url']
    def news_url(self, obj):
        if obj.id:
            return format_html("<a href='{url}'>Посмотреть новость</a>", url='/news/?id=%d' % obj.id)
        else:
            return "Для открытия функции предпросмотра нажмите \"Сохранить и продолжить редактирование\""
    news_url.allow_tags = True



    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 4, 'cols': 100})},
    }

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


