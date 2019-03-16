from django.contrib import admin
from django.shortcuts import redirect
from django import forms
from .models import *
from django.forms import TextInput, Textarea
from django.db import models
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django.utils.html import format_html

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    readonly_fields = ['date_edit']
    def response_change(self, request, obj):
        default_page = super().response_change(request, obj)
        if '_preview' in request.POST:
            return redirect('/news/?id=%d'%obj.id)
        else:
            return default_page

    formfield_overrides = {
        models.CharField: {'widget': TextInput(attrs={'size': 100})},
        models.TextField: {'widget': Textarea(attrs={'rows': 4, 'cols': 100})},
    }

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


