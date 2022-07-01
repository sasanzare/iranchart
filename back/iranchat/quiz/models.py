from django.db import models
from django.contrib.auth.models import User
from blog.models import Post
from django.utils.html import format_html

class Category(models.Model):
    name = models.CharField(max_length=150, db_index=True,verbose_name='نام')
    slug = models.SlugField(max_length=150, unique=True ,db_index=True,verbose_name='آدرس')
    created = models.DateTimeField(auto_now_add=True,verbose_name='زمان ایجاد')
    updated = models.DateTimeField(auto_now=True,verbose_name='زمان آپدیت')

    class Meta:
        ordering = ('name', )
        verbose_name = 'دسته بندی'
        verbose_name_plural = 'دسته بندی‌ها'

    def __str__(self):
        return self.name


class Quiz(models.Model):
	title = models.CharField(max_length=255, default='',verbose_name='عنوان')
	author = models.ForeignKey(User, on_delete=models.CASCADE, default=None,verbose_name='نویسنده')
	category = models.ForeignKey(Category, related_name='quiz', on_delete=models.CASCADE,verbose_name='دسته بندی')
	thumbnail = models.ImageField(upload_to='images',verbose_name='تصویر آزمون')
	created = models.DateTimeField(auto_now_add=True,verbose_name='زمان ایجاد')
	# times_taken = models.IntegerField(default=0, editable=False,verbose_name='زمان گرفته شده')

	@property
	def question_count(self):
		return self.questions.count()
	
	class Meta:
		verbose_name = "آزمون"
		verbose_name_plural = "آزمون‌ها"
		ordering = ['id']

	def __str__(self):
		return self.title

	def thumbnail_tag(self):
		return format_html("<img width='100px' height='70px' style='border-radius: 5px;' src='{}'/>".format(self.thumbnail.url))
	thumbnail_tag.short_description ="تصویر"  

class Question(models.Model):
	quiz = models.ForeignKey(
		Quiz, 
		related_name='questions', 
		on_delete=models.CASCADE,
        verbose_name='آزمون'
	)
	post = models.ForeignKey(
		Post, 
		related_name='psot', 
		on_delete=models.CASCADE,
        verbose_name='نوشته'
	)
	prompt = models.CharField(max_length=255, default='',verbose_name='سوال')

	class Meta:
		ordering = ['id']

	def __str__(self):
		return self.prompt


class Answer(models.Model):
	question = models.ForeignKey(
		Question, 
		related_name='answers', 
		on_delete=models.CASCADE,
        verbose_name='سوال'
	)
	text = models.CharField(max_length=255,verbose_name='متن')
	correct = models.BooleanField(default=False,verbose_name='صحیح')

	def __str__(self):
		return self.text

