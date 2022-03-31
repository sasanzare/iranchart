from django.contrib import admin
from .models import Order, OrderItem

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    raw_id_fields = ['product']

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'first_name', 'last_name', 'email', 'address', 'phone', 'city', 'created', 'paid']
    list_filter = ['paid', 'created', 'updated']
    search_fields = ('first_name', 'last_name', 'email', 'address', 'phone', 'city')
    inlines = [OrderItemInline]



