# Generated by Django 3.2.7 on 2022-04-06 04:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='quiz',
            name='times_taken',
        ),
    ]
