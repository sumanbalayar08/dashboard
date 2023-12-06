from django.db import models

# Create your models here
class price(models.Model):
    article=models.IntegerField(max_length=10,primary_key=True)
    product = models.CharField(max_length=100)
    inprice = models.IntegerField(max_length=10)
    price=models.IntegerField(max_length=10)
    unit=models.CharField(max_length=20)
    instock=models.IntegerField(max_length=10)
    desc=models.CharField(max_length=100)