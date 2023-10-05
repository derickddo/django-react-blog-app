from rest_framework import serializers
from .models import Post
from django.utils.timesince import timesince
from django.template.defaultfilters import truncatewords

class PostSerializer(serializers.ModelSerializer):
    author_firstname = serializers.CharField(source='author.first_name', read_only=True)
    author_avatar = serializers.ImageField(source ='author.avatar', read_only=True )
    time_since_created = serializers.SerializerMethodField(method_name='get_time_since_created')
    content = serializers.SerializerMethodField(method_name='get_content_truncated')

    class Meta:
        model = Post
        fields = [
            'id', 
            'title', 
            'content', 
            'image', 
            'author_firstname',
            'author_avatar', 
            'category', 
            'time_since_created',   
        ]

    def get_time_since_created(self, obj):
        return timesince(obj.created)
    
    def get_content_truncated(self, obj):
        return truncatewords(obj.content, 20)
