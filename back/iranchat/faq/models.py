from django.db import models

# Create your models here.

class FaqQuestion(models.Model):
    question = models.CharField(max_length=350,verbose_name='سوال')
    answer =  models.TextField(verbose_name='پاسخ')
    position = models.IntegerField(null=True,unique=True,verbose_name='موقعیت')
    created = models.DateTimeField(auto_now_add=True,verbose_name='زمان ایجاد')
    updated = models.DateTimeField(auto_now=True,verbose_name='زمان آپدیت')
    class Meta:
        verbose_name = 'سوال متداول'
        verbose_name_plural = 'سوالات متداول'
        ordering =['position']
    def __str__(self):
        return self.question