from django.contrib import admin
from .models import Map
# Register your models here.

@admin.register(Map)
class MapAdmin(admin.ModelAdmin):
    list_display = ('name','longitude','latitude','created','updated')
