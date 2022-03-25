from django.db import models

# Create your models here.

class FaqQuestion(models.Model):
    question = models.TextField(verbose_name='سوال')
    answer =  models.TextField(verbose_name='پاسخ')
    position = models.IntegerField(null=True,unique=True,verbose_name='موقعیت')
    class Meta:
        verbose_name = 'سوال متداول'
        verbose_name_plural = 'سوالات متداول'
        ordering =['position']
    def __str__(self):
        return self.question