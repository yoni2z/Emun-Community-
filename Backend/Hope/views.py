from django.shortcuts import render
from rest_framework import viewsets

from .models import (
    Gallery,
    Blog, Cause,
    Client,
    Volunteer,
    BankAccount,
    Program, Project,
    Resource, ResourceDetail,
    BoardMember
)

from .serializer import (
    GallerySerializer,
    BlogSerializer,
    CauseSerializer,
    ClientSerializer,
    VolunteerSerializer,
    BankAccountSerializer,
    ProgramSerializer, ProjectSerializer,
    ResourceSerializer, ResourceDetailSerializer,
    BoardMemberSerializer    
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

class BankAccountViewSet(viewsets.ModelViewSet):
    queryset = BankAccount.objects.all()
    serializer_class = BankAccountSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProgramViewSet(viewsets.ModelViewSet):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer

class ResourceDetailViewSet(viewsets.ModelViewSet):
    queryset = ResourceDetail.objects.all()
    serializer_class = ResourceDetailSerializer

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer

class BoardMemberViewSet(viewsets.ModelViewSet):
    queryset = BoardMember.objects.all()
    serializer_class = BoardMemberSerializer