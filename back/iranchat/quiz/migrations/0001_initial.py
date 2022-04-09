# Generated by Django 3.2.7 on 2022-04-09 10:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('blog', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=150, verbose_name='نام')),
                ('slug', models.SlugField(max_length=150, unique=True, verbose_name='آدرس')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='زمان ایجاد')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='زمان آپدیت')),
            ],
            options={
                'verbose_name': 'دسته بندی',
                'verbose_name_plural': 'دسته بندی\u200cها',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Quiz',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=255, verbose_name='عنوان')),
                ('thumbnail', models.ImageField(upload_to='images', verbose_name='تصویر آزمون')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='زمان ایجاد')),
                ('author', models.ForeignKey(default=None, on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL, verbose_name='نویسنده')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='quiz', to='quiz.category', verbose_name='دسته بندی')),
            ],
            options={
                'verbose_name': 'آزمون',
                'verbose_name_plural': 'آزمون\u200cها',
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('prompt', models.CharField(default='', max_length=255, verbose_name='سوال')),
                ('psot', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='psot', to='blog.post', verbose_name='نوشته')),
                ('quiz', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='questions', to='quiz.quiz', verbose_name='آزمون')),
            ],
            options={
                'ordering': ['id'],
            },
        ),
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(max_length=255, verbose_name='متن')),
                ('correct', models.BooleanField(default=False, verbose_name='صحیح')),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='answers', to='quiz.question', verbose_name='سوال')),
            ],
        ),
    ]
