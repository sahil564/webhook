from django.db import models

# Create your models here.



class Lead(models.Model):
    first_name=models.CharField(max_length=200)
    last_name=models.CharField("enter last name",max_length=200)
    gender=models.CharField("enter gender name",max_length=200)
    email=models.EmailField("enter email",max_length=200)
    number=models.CharField("enter first number",max_length=200)
    category=models.CharField("enter first category",max_length=200)
    service=models.CharField("enter first service",max_length=200)
    city=models.CharField("enter first city",max_length=200)
    center=models.CharField("enter first center",max_length=200)
    date = models.DateField(auto_now_add=True, null=True)


    def __str__(self):
        return f'{self.first_name} {self.last_name} {self.number}'