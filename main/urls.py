from django import path
from . import views 

urlpatterns = [
    path('', views.club_status, name='club_status'),
    path('club_inquiry/', views.club_inquiry, name='club_inquiry'),
    path('club_apply/', views.club_apply, name='club_apply'),
]