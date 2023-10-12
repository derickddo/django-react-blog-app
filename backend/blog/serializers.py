from rest_framework import serializers
from .models import Post
from django.utils.timesince import timesince
from django.template.defaultfilters import truncatewords

class PostSerializer(serializers.ModelSerializer):
    author_firstname = serializers.CharField(source='author.first_name', read_only=True)
    author_avatar = serializers.ImageField(source ='author.avatar', read_only=True )
    # image = serializers.SerializerMethodField(method_name='get_image_url')
    time_since_created = serializers.SerializerMethodField(method_name='get_time_since_created')
      
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
    
    # def get_image_url(self, obj):
    #     request = self.context['request']
    #     return request.build_absolute_uri(obj.image.url)
    
    
class CreatePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title', 'content', 'image', 'category']
