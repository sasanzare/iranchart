from django.db import models
from datetime import date
from ckeditor_uploader.fields import RichTextUploadingField

class News(models.Model):
    title = models.CharField(max_length=250,verbose_name='عنوان')
    content = RichTextUploadingField(verbose_name="محتوا")
    date = models.DateField(auto_now_add=True,verbose_name="تاریخ")
    created = models.DateTimeField(auto_now_add=True,verbose_name='زمان ایجاد')
    updated = models.DateTimeField(auto_now=True,verbose_name='زمان آپدیت')
    class Meta:
        verbose_name = 'خبر'
        verbose_name_plural = 'اخبار'
        ordering =['date']
    def __str__(self):
        return self.title