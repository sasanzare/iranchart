# Generated by Django 3.2.7 on 2022-04-04 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Map',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250, verbose_name='نام محل')),
                ('slug', models.SlugField(max_length=250, verbose_name='آدرس محل')),
                ('longitude', models.DecimalField(decimal_places=4, max_digits=7, verbose_name='طول جغرافیایی')),
                ('latitude', models.DecimalField(decimal_places=4, max_digits=7, verbose_name='عرض جغرافیایی')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
            ],
            options={
                'verbose_name': 'نقشه',
                'verbose_name_plural': 'نقشه\u200cها',
            },
        ),
    ]
