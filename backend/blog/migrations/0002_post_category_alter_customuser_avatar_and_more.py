# Generated by Django 4.2.6 on 2023-10-05 15:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='category',
            field=models.CharField(choices=[('Sport', 'Sport'), ('Politics', 'Politics'), ('Science', 'Science'), ('Education', 'Education')], default='', max_length=10),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='avatar',
            field=models.ImageField(upload_to='media'),
        ),
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(upload_to='media'),
        ),
    ]
