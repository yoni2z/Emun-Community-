from django.contrib import admin

from .models import (
    PhotoGallery,
    Blog, Cause,
    Client,
)

# Register your models here.

admin.site.register(PhotoGallery)
admin.site.register(Blog)
admin.site.register(Cause)
admin.site.register(Client)