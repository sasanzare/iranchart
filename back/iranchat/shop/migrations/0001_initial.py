# Generated by Django 3.1.3 on 2022-03-31 14:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=150, verbose_name='نام')),
                ('slug', models.SlugField(max_length=150, unique=True, verbose_name='آدرس')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='زمان ایجاد')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='زمان آپدیت')),
            ],
            options={
                'verbose_name': 'دسته بندی',
                'verbose_name_plural': 'دسته بندی\u200cها',
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=100, verbose_name='نام دوره')),
                ('slug', models.SlugField(max_length=100, verbose_name='آدرس دوره')),
                ('level', models.CharField(db_index=True, max_length=100, verbose_name='سطح دوره')),
                ('location', models.CharField(db_index=True, max_length=100, verbose_name='محل برگزاری')),
                ('about', models.TextField(blank=True, verbose_name='درباره مدرس دوره')),
                ('description', models.TextField(blank=True, verbose_name='توضیحات')),
                ('price', models.DecimalField(decimal_places=0, max_digits=10, verbose_name='قیمت')),
                ('available', models.BooleanField(default=True, verbose_name='در دسترس')),
                ('stock', models.PositiveIntegerField(verbose_name='تعداد')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='زمان ایجاد')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='زمان آپدیت')),
                ('image', models.ImageField(blank=True, upload_to='images/products/%Y/%m/%d', verbose_name='تصویر محصول')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='shop.category', verbose_name='دسته بندی')),
            ],
            options={
                'verbose_name': 'دوره',
                'verbose_name_plural': 'دوره\u200cها',
                'ordering': ('name',),
                'index_together': {('id', 'slug')},
            },
        ),
    ]
