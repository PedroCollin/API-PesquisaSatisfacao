# Generated by Django 3.2.9 on 2021-11-09 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('formulario', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='formulario',
            name='feedback',
            field=models.CharField(default='', max_length=500),
        ),
    ]
