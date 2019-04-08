
from .models import Files
from .serializers import FileSerializer,FilePathSerializer, ImageSerializer
from rest_framework import views
from rest_framework import generics
from .api import count
from rest_framework.views import APIView
from rest_framework.response import Response
from .imagecomp import ImageCompressor
from .minify import CssCompressor,HtmlCompressor,JsCompressor
import json
class ListFiles(generics.ListCreateAPIView):
    queryset = Files.objects.all()
    serializer_class = FileSerializer
class DetailFiles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Files.objects.all()
    serializer_class = FileSerializer

class FilePath(generics.RetrieveUpdateDestroyAPIView):
    queryset = Files.objects.all()
    serializer_class = FilePathSerializer

class UpdateFiles(generics.UpdateAPIView):
    queryset = Files.objects.all()
    serializer_class = FileSerializer

class DoMath(views.APIView):
    def get(self, request):
        f=Files.objects.get(id=1)
        analysis=count(f.title)
        f.js_count=analysis['js']
        f.css_count=analysis['css']
        f.html_count=analysis['html']
        f.img_count=analysis['img']
        f.save()    
        snippets = Files.objects.all()
        serializer = FileSerializer(snippets, many=True)
        return Response(serializer.data)

class ImageCompress(generics.ListCreateAPIView):
    def get(self,request,format=None):
        f=Files.objects.get(id=1)
        analysis=ImageCompressor(f.title)
        r=json.dumps(analysis)
        return Response(json.loads(r))

class CssCompress(generics.ListCreateAPIView):
    def get(self,request,format=None):
        f=Files.objects.get(id=1)
        analysis=CssCompressor(f.title)
        r=json.dumps(analysis)
        return Response(json.loads(r))

class HtmlCompress(generics.ListCreateAPIView):
    def get(self,request,format=None):
        f=Files.objects.get(id=1)
        analysis=HtmlCompressor(f.title)
        r=json.dumps(analysis)
        return Response(json.loads(r))

class JsCompress(generics.ListCreateAPIView):
    def get(self,request,format=None):
        f=Files.objects.get(id=1)
        analysis=JsCompressor(f.title)
        r=json.dumps(analysis)
        return Response(json.loads(r))


    
