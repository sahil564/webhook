# Generated by Django 4.2.4 on 2023-08-17 06:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lead',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200, verbose_name='enter first name')),
                ('last_name', models.CharField(max_length=200, verbose_name='enter last name')),
                ('gender', models.CharField(max_length=200, verbose_name='enter gender name')),
                ('email', models.EmailField(max_length=200, verbose_name='enter email')),
                ('number', models.CharField(max_length=200, verbose_name='enter first number')),
                ('category', models.CharField(max_length=200, verbose_name='enter first category')),
                ('service', models.CharField(max_length=200, verbose_name='enter first service')),
                ('city', models.CharField(max_length=200, verbose_name='enter first city')),
                ('center', models.CharField(max_length=200, verbose_name='enter first center')),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]