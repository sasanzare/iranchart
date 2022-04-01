from django.db import models




class Content(models.Model):
    title = models.CharField(max_length=250,verbose_name='عنوان')
    body = models.TextField(verbose_name='محتوا')
    created = models.DateTimeField(auto_now_add=True,verbose_name='زمان ایجاد')
    updated = models.DateTimeField(auto_now=True,verbose_name='زمان آپدیت')

    class Meta:
        ordering = ('title', )
        verbose_name = 'محتوا'
        verbose_name_plural = 'محتوا'

    def __str__(self):
        return self.title


class Email(models.Model):
    email = models.EmailField(verbose_name='ایمیل')
    created = models.DateTimeField(auto_now_add=True,verbose_name='زمان ایجاد')
    updated = models.DateTimeField(auto_now=True,verbose_name='زمان آپدیت')

    class Meta:
        ordering = ('email', )
        verbose_name = 'ایمیل'
        verbose_name_plural = 'ایمیل‌ها'

    def __str__(self):
        return self.email
