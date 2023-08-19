from django.urls import path
from core.views import *
from core.webhook import *


urlpatterns = [
    path("",form,name="form"),
    path("register",register,name="register"),
    path("new/",new,name="new"),
    path("webhook/",fb_webhook,name="webhook")
]