from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    email = models.EmailField(unique=True)
    avatar = models.ImageField()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self) -> str:
        return self.email
    
CATEGORY = (
    ('Sport', 'Sport'),
    ('Politics', 'Politics'),
    ('Science', 'Science'),
    ('Education', 'Education'),
    ('Technology', 'Technology'),
)
CATEGORY_DEFAULT = ''

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    image = models.ImageField()
    category = models.CharField(choices=CATEGORY, default=CATEGORY_DEFAULT, max_length=10)

    def __str__(self):
        return self.title
    

