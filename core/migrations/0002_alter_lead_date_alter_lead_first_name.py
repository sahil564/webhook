# Generated by Django 4.2.4 on 2023-08-17 10:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='lead',
            name='first_name',
            field=models.CharField(max_length=200),
        ),
    ]