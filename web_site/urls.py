from django.contrib import admin
from django.urls import path
from main import view_page

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', view_page.club_status, name='club_status'),
    path('club_inquiry/', view_page.club_inquiry, name='club_inquiry'),
    path('club_apply/', view_page.club_apply, name='club_apply'),
]