from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display =('subject','email','message')
    list_filter = ('email','subject','name')
    search_fields = ('email','subject','message','name')