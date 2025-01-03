from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

from .views import (
    PhotoGalleryViewSet,
    BlogViewSet,
    CauseViewSet,
    ClientViewSet
)

router = DefaultRouter()
router.register(r'photo-gallery', PhotoGalleryViewSet, basename="photo-gallery")
router.register(r'blogs', BlogViewSet, basename="blogs")
router.register(r'causes', CauseViewSet, basename="causes")
router.register(r'clients', ClientViewSet, basename="sponsors")

urlpatterns = [
    path('api/', include(router.urls))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
