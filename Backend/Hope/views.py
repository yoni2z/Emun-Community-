from django.shortcuts import render
from rest_framework import viewsets

from .models import (
    Gallery,
    Blog, Cause,
    Client,
    Volunteer,
)

from .serializer import (
    GallerySerializer,
    BlogSerializer,
    CauseSerializer,
    ClientSerializer,
    VolunteerSerializer,
)

# Create your views here.

class GalleryViewSet(viewsets.ModelViewSet):
    queryset = Gallery.objects.all()
    serializer_class = GallerySerializer

class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.all().order_by("-created_at")
    serializer_class = BlogSerializer

class CauseViewSet(viewsets.ModelViewSet):
    queryset = Cause.objects.all()
    serializer_class = CauseSerializer

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class VolunteerViewSet(viewsets.ModelViewSet):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer