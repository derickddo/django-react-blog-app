from rest_framework import generics
from .models import Post
from .serializers import PostSerializer, CreatePostSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authentication import SessionAuthentication
from rest_framework.authtoken.models import Token

# Create your views here.
# class GetAllPostView(generics.ListAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer

def get_auth_token(request):
    token = request.headers.get('Authorization')
    if token is None:
        return None
    return token.split()[1]

def get_auth_user(token):
    token_obj = Token.objects.get(key=token)
    return token_obj.user

class PostView(APIView):
    # authentication_classes = SessionAuthentication
    def get(self, request, format=None):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True, context={'request':request})
        return Response(serializer.data, status.HTTP_200_OK)
        

    def post(self, request, format=None):
        serializer = CreatePostSerializer(data=self.request.data)
        if serializer.is_valid(raise_exception=True):
            token = get_auth_token(self.request)
            user = get_auth_user(token)
            serializer.save(author=user)
            return Response({'message':'created'}, status.HTTP_201_CREATED)

class GetPostView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

