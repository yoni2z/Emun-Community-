from rest_framework import serializers
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

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ['id', 'description', 'image']

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'description', 'image', 'date', 'category', 'creator', 'created_at']

class CauseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cause
        fields = ['id', 'title', 'description', 'image', 'date', 'creator', 'created_at']

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'name', 'logo']

class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ['id', 'name', 'role', 'email', 'phone_number', 'self_description']

class BankAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankAccount
        fields = ['id', 'bank_name', 'account_number', 'created_at']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'color', 'image', 'video']

class ProgramSerializer(serializers.ModelSerializer):
    projects = ProjectSerializer(many=True)

    class Meta:
        model = Program
        fields = ['id', 'name', 'color', 'photo', 'description', 'projects']

class ResourceDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResourceDetail
        fields = ['id', 'title', 'description', 'color', 'image', 'video', 'link']

class ResourceSerializer(serializers.ModelSerializer):
    resourceDetails = ResourceDetailSerializer(many=True)

    class Meta:
        model = Resource
        fields = ['id', 'name', 'image', 'color', 'description', 'resourceDetails']

class BoardMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = BoardMember
        fields = ['id', 'name', 'role', 'work', 'image']