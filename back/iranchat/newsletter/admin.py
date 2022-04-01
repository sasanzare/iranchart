from django.contrib import admin
from .models import Content,Email


@admin.register(Content)
class ContentAdmin(admin.ModelAdmin):
    list_display = ('title', 'body','created','updated')
    list_filter = ('title', 'body')

@admin.register(Email)
class EmailAdmin(admin.ModelAdmin):
    list_display = ('email','created')