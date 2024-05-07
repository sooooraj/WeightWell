from .import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.index,name="index"),
    path("contact",views.contact, name="contact"),
    path("blog",views.blog, name="blog"),
    path("blogs",views.blogs, name="blogs"),
    path("diet",views.diet, name="diet"),
    path("workout",views.workout, name="workout"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)