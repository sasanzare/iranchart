# Generated by Django 3.2.7 on 2022-04-04 05:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0002_alter_map_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='map',
            name='slug',
            field=models.SlugField(max_length=250, unique_for_date='created', verbose_name='آدرس محل'),
        ),
    ]
