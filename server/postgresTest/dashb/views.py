from django.shortcuts import render
from django.http import JsonResponse
from .models import price

# Create your views here.
def get_price(request):
    prices=price.objects.all()
    data = [{'article': price.article, 'product': price.product,'inprice':price.inprice,'price':price.price,'unit':price.unit,'instock':price.instock,'desc':price.desc} for price in prices]
    return JsonResponse({'prices': data})