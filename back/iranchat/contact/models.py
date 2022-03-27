from django.db import models

# Create your models here.
class Contact(models.Model):
    name    = models.CharField(max_length=255,verbose_name='نام',blank=True)
    email   = models.EmailField(verbose_name='ایمیل')
    subject = models.CharField(max_length=255,verbose_name='عنوان')
    message = models.TextField(verbose_name='پیام')

    class Meta:
        verbose_name = "پیام"
        verbose_name_plural = "پیام‌ها"

    def __str__(self):
        return self.email