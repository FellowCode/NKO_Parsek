from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
from ckeditor_uploader.fields import RichTextUploadingField
from datetime import datetime
from django.utils import timezone

class News(models.Model):
    visible = models.BooleanField(default=False, verbose_name='Показывать новость')
    title = models.CharField(max_length=1024, verbose_name='Название')
    short_desc = models.TextField(verbose_name='Краткое описание')
    tags = models.TextField(default='', blank=True, verbose_name='Тэги (через запятую)')
    category = models.ManyToManyField('Category', verbose_name='Категории')

    image = ProcessedImageField(upload_to='images/news-posters/',
                                 format='JPEG',
                                 processors=[ResizeToFill(1280, 720)],
                                 options={'quality': 75},
                                verbose_name='Постер',
                                help_text='Соотношение сторон будет преобразовано в 2:1')

    body = RichTextUploadingField(default='', verbose_name='Содержание')

    date = models.DateTimeField(default=timezone.now, verbose_name='Дата')

    date_edit = models.DateTimeField(auto_now=True, verbose_name='Дата изменения')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новости'
        verbose_name_plural = 'Новости'
        ordering = ['-date']


class Category(models.Model):
    name = models.CharField(max_length=512)
    slug = models.CharField(max_length=128, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Категирия'
        verbose_name_plural = 'Категории'
