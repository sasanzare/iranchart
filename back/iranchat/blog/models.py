from django.db import models
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.models import User
from taggit.managers import TaggableManager
from django.utils.html import format_html
from ckeditor.fields import RichTextField

class PublishedManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status='published')

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


class Post(models.Model):
    STATUS_CHOICES = (
        ('draft', 'پیش نویس'),
        ('published', 'منتشر شده'),
    )
    title = models.CharField(max_length=250,verbose_name="عنوان")
    slug = models.SlugField(max_length=250,unique_for_date='publish',verbose_name='آدرس نوشته')
    author = models.ForeignKey(User,on_delete=models.CASCADE,related_name='blog_posts',verbose_name='نویسنده')
    category = models.ForeignKey(Category,on_delete=models.DO_NOTHING,related_name='blog_category',verbose_name='دسته بندی')
    body = RichTextField(verbose_name="محتوا")
    thumbnail = models.ImageField(upload_to='images',verbose_name='تصویر نوشته')
    publish = models.DateTimeField(default=timezone.now,verbose_name='زمان انتشار')
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    status = models.CharField(max_length=10,choices=STATUS_CHOICES,default='draft',verbose_name='وضعیت')
    objects = models.Manager()
    published = PublishedManager()
    tags = TaggableManager(blank=True)

    class Meta:
        ordering = ('-publish',)
        verbose_name="نوشته"
        verbose_name_plural = "نوشته‌ها"

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('blog:post_detail',args=[self.publish.year,self.publish.month,self.publish.day, self.slug])

    def thumbnail_tag(self):
        return format_html("<img width='100px' height='70px' style='border-radius: 5px;' src='{}'/>".format(self.thumbnail.url))
    thumbnail_tag.short_description ="تصویر"  

class Comment(models.Model):
    post = models.ForeignKey(Post,on_delete=models.CASCADE,related_name='comments',verbose_name='نوشته')
    name = models.CharField(max_length=80,verbose_name='نام')
    email = models.EmailField(verbose_name='ایمیل')
    body = models.TextField(verbose_name='محتوا')
    created = models.DateTimeField(auto_now_add=True,verbose_name="تاریخ ایجاد")
    updated = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True,verbose_name='نمایش')

    class Meta:
        ordering = ('created',)
        verbose_name="نظر"
        verbose_name_plural = "نظرات"

    def __str__(self):
        return f'Comment by {self.name} on {self.post}'
