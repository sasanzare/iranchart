# Generated by Django 3.1.3 on 2022-03-31 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, verbose_name='نام')),
                ('email', models.EmailField(max_length=254, verbose_name='ایمیل')),
                ('subject', models.CharField(max_length=255, verbose_name='عنوان')),
                ('message', models.TextField(verbose_name='پیام')),
            ],
            options={
                'verbose_name': 'پیام',
                'verbose_name_plural': 'پیام\u200cها',
            },
        ),
    ]
