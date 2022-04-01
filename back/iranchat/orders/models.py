from django.db import models
from shop.models import Product


class Order(models.Model):
    first_name = models.CharField(max_length=60,verbose_name='نام')
    last_name = models.CharField(max_length=60,verbose_name='نام‌خانوادگی')
    province = models.CharField(max_length=100,verbose_name='استان')
    city = models.CharField(max_length=100,verbose_name='شهر')
    address = models.CharField(max_length=250,verbose_name='آدرس')
    phone = models.DecimalField(max_digits=14, decimal_places=0,verbose_name='شماره تماس')
    email = models.EmailField(verbose_name='ایمیل')
    description = models.TextField(blank=True,verbose_name='توضیحات')
    created = models.DateTimeField(auto_now_add=True,verbose_name='زمان ایجاد')
    updated = models.DateTimeField(auto_now=True,verbose_name='زمان آپدیت')
    paid = models.BooleanField(default=False,verbose_name='پرداخت شده')

    class Meta:
        ordering = ('-created', )
        verbose_name = 'سفارش'
        verbose_name_plural = 'سفارش‌ها'

    def __str__(self):
        return 'Order {}'.format(self.id)

    def get_total_cost(self):
        return sum(item.get_cost() for item in self.items.all())


class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE)
    product = models.ForeignKey(Product, related_name='order_items', on_delete=models.CASCADE,verbose_name='دوره')
    price = models.DecimalField(max_digits=10, decimal_places=0,verbose_name='قیمت')
    quantity = models.PositiveIntegerField(default=1,verbose_name='تعداد')

    class Meta:
        verbose_name = 'سفارش دوره'
        verbose_name_plural = 'سفارش‌ دوره‌ها'

    def __str__(self):
        return '{}'.format(self.id)

    def get_cost(self):
        return self.price * self.quantity

