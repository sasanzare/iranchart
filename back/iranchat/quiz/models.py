from django.db import models
from django.contrib.auth.models import User
from blog.models import Post

class Quiz(models.Model):
	author = models.ForeignKey(User, on_delete=models.DO_NOTHING, default=None,verbose_name='نویسنده')
	title = models.CharField(max_length=255, default='',verbose_name='عنوان')
	created_at = models.DateTimeField(auto_now_add=True,verbose_name='زمان ایجاد')
	times_taken = models.IntegerField(default=0, editable=False,verbose_name='زمان گرفته شده')

	@property
	def question_count(self):
		return self.questions.count()
	
	class Meta:
		verbose_name = "آزمون"
		verbose_name_plural = "آزمون‌ها"
		ordering = ['id']

	def __str__(self):
		return self.title

class Question(models.Model):
	quiz = models.ForeignKey(
		Quiz, 
		related_name='questions', # need related name for hyper link related field to work ?!?
		on_delete=models.DO_NOTHING,
        verbose_name='آزمون'
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
		on_delete=models.DO_NOTHING,
        verbose_name='سوال'
	)
	text = models.CharField(max_length=255,verbose_name='متن')
	correct = models.BooleanField(default=False,verbose_name='صحیح')

	def __str__(self):
		return self.text
