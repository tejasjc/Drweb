from django.urls import path

from .views import ListFiles,DetailFiles,UpdateFiles,FilePath,DoMath,ImageCompress,CssCompress,JsCompress,HtmlCompress,CssStat,HtmlStat,JsStat,BadReq,RendBlockCss,RendBjs,NoAtImport

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
    path('htmlmin/',HtmlCompress.as_view()),
    path('cssstat/',CssStat.as_view()),
    path('htmlstat/',HtmlStat.as_view()),
    path('jsstat/',JsStat.as_view()),
    path('badreq/',BadReq.as_view()),
    path('rendblock/',RendBlockCss.as_view()),
    path('rendblockjs/',RendBjs.as_view()),
    path('noimport/',NoAtImport.as_view())

]