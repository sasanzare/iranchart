from django.contrib import admin
from .models import FaqQuestion
# Register your models here.

@admin.register(FaqQuestion)
class FaqQuestionAdmin(admin.ModelAdmin):
    list_display =('question','answer','position')
    list_filter = ('question','answer','position')
    search_fields = ('question','answer','position')
