from rest_framework import serializers
from .models import Files


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'js_count',
            'css_count',
            'html_count',
            'img_count',
        )
        model = Files

class FilePathSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
        )
        model = Files

class ImageSerializer(serializers.Serializer):
   avg_comp = serializers.IntegerField()
   class Meta:
        fields = (
            'avg_comp'
        )


