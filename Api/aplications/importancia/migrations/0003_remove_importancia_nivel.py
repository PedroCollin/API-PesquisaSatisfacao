# Generated by Django 3.2.4 on 2021-12-03 01:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('importancia', '0002_importancia_desc'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='importancia',
            name='nivel',
        ),
    ]