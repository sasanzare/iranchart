from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=150, db_index=True,verbose_name='نام')
    slug = models.SlugField(max_length=150, unique=True ,db_index=True,verbose_name='آدرس')
    created_at = models.DateTimeField(auto_now_add=True,verbose_name='زمان ایجاد')
    updated_at = models.DateTimeField(auto_now=True,verbose_name='زمان آپدیت')

    class Meta:
        ordering = ('name', )
        verbose_name = 'دسته بندی'
        verbose_name_plural = 'دسته بندی‌ها'

    def __str__(self):
        return self.name

    

class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE,verbose_name='دسته بندی')
    name = models.CharField(max_length=100, db_index=True,verbose_name='نام محصول')
    slug = models.SlugField(max_length=100, db_index=True,verbose_name='آدرس محصول')
    description = models.TextField(blank=True,verbose_name='توضیحات')
    price = models.DecimalField(max_digits=10, decimal_places=0,verbose_name='قیمت')
    available = models.BooleanField(default=True,verbose_name='در دسترس')
    stock = models.PositiveIntegerField(verbose_name='تعداد')
    created_at = models.DateTimeField(auto_now_add=True,verbose_name='زمان ایجاد')
    updated_at = models.DateTimeField(auto_now=True,verbose_name='زمان آپدیت')
    image = models.ImageField(upload_to='images/products/%Y/%m/%d', blank=True,verbose_name='تصویر محصول')

    class Meta:
        ordering = ('name', )
        verbose_name = 'محصول'
        verbose_name_plural = 'محصول‌ها'
        index_together = (('id', 'slug'),)

    def __str__(self):
        return self.name

   