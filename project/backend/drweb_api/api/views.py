
from .models import Files,Result
from .serializers import FileSerializer,FilePathSerializer, ImageSerializer
from rest_framework import views
from rest_framework import generics
from .api import count
from rest_framework.views import APIView
from rest_framework.response import Response
from .imagecomp import ImageCompressor
from .minify import CssCompressor,HtmlCompressor,JsCompressor
from .badrequest import BadRequest
from .rendblock import RendBlock
from .rendblockjs import RendBlockJs
from .noimport import NoImport
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
        r=json.dumps(analysis[0])

        # res=Result.objects.get(id=2)
        # res.img_dump=json.dumps(analysis[1])
        # res.save() 
        return Response(json.loads(r))

class CssCompress(generics.ListCreateAPIView):
    def get(self,request,format=None):
        f=Files.objects.get(id=1)
        analysis=CssCompressor(f.title)
        r=json.dumps(analysis)
        res=Result.objects.get(id=1)
        res.css_dump=r
        res.save()
        return Response(json.loads(r))

class HtmlCompress(generics.ListCreateAPIView):
    def get(self,request,format=None):
        f=Files.objects.get(id=1)
        analysis=HtmlCompressor(f.title)
        r=json.dumps(analysis)
        res=Result.objects.get(id=1)
        res.html_dump=r
        res.save()
        return Response(json.loads(r))

class JsCompress(generics.ListCreateAPIView):
    def get(self,request,format=None):
        f=Files.objects.get(id=1)
        analysis=JsCompressor(f.title)
        r=json.dumps(analysis)
        res=Result.objects.get(id=1)
        res.js_dump=r
        res.save()
        return Response(json.loads(r))

class CssStat(generics.ListCreateAPIView):
    def get(self,request,format=None):
        res=Result.objects.get(id=1)
        return Response(json.loads(res.css_dump))
class HtmlStat(generics.ListCreateAPIView):
    def get(self,request,format=None):
        res=Result.objects.get(id=1)
        return Response(json.loads(res.html_dump))
class JsStat(generics.ListCreateAPIView):
    def get(self,request,format=None):
        res=Result.objects.get(id=1)
        return Response(json.loads(res.js_dump))
class BadReq(generics.ListCreateAPIView):
    def get(self,request,format=None):
        f=Files.objects.get(id=1)
        badr=BadRequest(f.title)
        res=json.dumps(badr)
        return Response(json.loads(res))
class RendBlockCss(generics.ListCreateAPIView):
    def get(self,request,format=None):
        f=Files.objects.get(id=1)
        badr=RendBlock(f.title)
        res=json.dumps(badr)
        return Response(json.loads(res))
class RendBjs(generics.ListCreateAPIView):
    def get(self,request,format=None):
        f=Files.objects.get(id=1)
        badr=RendBlockJs(f.title)
        res=json.dumps(badr)
        return Response(json.loads(res))
class NoAtImport(generics.ListCreateAPIView):
    def get(self,request,format=None):
        f=Files.objects.get(id=1)
        badr=NoImport(f.title)
        res=json.dumps(badr)
        return Response(json.loads(res))
