# Generated by Django 2.1.7 on 2019-03-14 09:55

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('News', '0006_remove_news_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2019, 3, 14, 19, 55, 53, 257335)),
        ),
    ]
