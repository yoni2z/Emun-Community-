from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

from .views import (
    GalleryViewSet,
    BlogViewSet,
    CauseViewSet,
    ClientViewSet,
    VolunteerViewSet
)

router = DefaultRouter()
router.register(r'gallery', GalleryViewSet, basename="photo-gallery")
router.register(r'blogs', BlogViewSet, basename="blogs")
router.register(r'causes', CauseViewSet, basename="causes")
router.register(r'clients', ClientViewSet, basename="sponsors")
router.register(r'volunteers', VolunteerViewSet, basename="volunteers")

urlpatterns = [
    path('api/', include(router.urls))
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
