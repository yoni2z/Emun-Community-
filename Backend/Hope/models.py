from django.db import models

# Create your models here.

class PhotoGallery(models.Model):
    photo = models.ImageField(upload_to="photo_gallery/")

class Blog(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    image = models.ImageField(upload_to='blog_images/')
    date = models.DateField(blank=True, null=True)
    creator = models.CharField(max_length=100, default="Creator")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Cause(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    image = models.ImageField(upload_to='cause_images/')
    date = models.DateField(blank=True, null=True)
    creator = models.CharField(max_length=100, default="Creator")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Client(models.Model):
    name = models.CharField(max_length=200)
    logo = models.ImageField(upload_to="sponsor_logos")

    def __str__(self):
        return self.name

