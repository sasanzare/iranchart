from django.contrib import admin
from .models import Category, Product

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name','image_tag','available', 'price', 'stock', 'created', 'updated']
    list_editable = [ 'available']
    prepopulated_fields = {'slug': ('name',)}
    search_fields = ('name', 'price','about','location','level','description','topic')


