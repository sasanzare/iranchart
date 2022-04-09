from django.contrib import admin
from .models import News

# Register your models here.
@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ['title','date','updated']
    search_fields = ('title','content','created','updated','date')
    list_filter = ('date', )