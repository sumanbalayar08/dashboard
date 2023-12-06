from django.urls import path

from . import views
urlpatterns = [
    path('api/prices/', views.get_price, name='get_price')
]