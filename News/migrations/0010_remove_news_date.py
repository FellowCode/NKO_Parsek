# Generated by Django 2.1.7 on 2019-03-14 09:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('News', '0009_news_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='news',
            name='date',
        ),
    ]