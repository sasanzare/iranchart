from django.db import models

# Create your models here.


class Map(models.Model):
    name = models.CharField(max_length=250,verbose_name="نام محل")
    slug = models.SlugField(max_length=250,unique_for_date='created',verbose_name='آدرس محل')
    longitude = models.DecimalField(max_digits=7, decimal_places=4,verbose_name="طول جغرافیایی")
    latitude = models.DecimalField(max_digits=7, decimal_places=4,verbose_name="عرض جغرافیایی")
    created = models.DateTimeField(auto_now_add=True,verbose_name='زمان ایجاد')
    updated = models.DateTimeField(auto_now=True,verbose_name='زمان‌ آپدیت')

    class Meta:
        verbose_name="نقشه"
        verbose_name_plural = "نقشه‌ها"

    def __str__(self):
        return self.name