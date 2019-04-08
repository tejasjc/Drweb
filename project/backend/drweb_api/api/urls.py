from django.urls import path

from .views import ListFiles,DetailFiles,UpdateFiles,FilePath,DoMath,ImageCompress,CssCompress,JsCompress,HtmlCompress

# from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'', FileViewSet, base_name='File')
# urlpatterns = router.urls
urlpatterns = [
    path('',ListFiles.as_view()),
    path('getdata/',DoMath.as_view()),
    path('<int:pk>/', FilePath.as_view()),
    path('update/<pk>/',UpdateFiles.as_view()),
    path('image/',ImageCompress.as_view()),
    path('cssmin/',CssCompress.as_view()),
    path('jsmin/',JsCompress.as_view()),
    path('htmlmin/',HtmlCompress.as_view())

]