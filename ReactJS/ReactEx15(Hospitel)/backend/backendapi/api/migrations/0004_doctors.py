# Generated by Django 3.2.8 on 2021-10-22 14:04

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20211018_1927'),
    ]

    operations = [
        migrations.CreateModel(
            name='Doctors',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fname', models.CharField(max_length=50)),
                ('lname', models.CharField(max_length=50)),
                ('email', models.CharField(max_length=25)),
                ('avatar', models.ImageField(upload_to='media/')),
                ('speciality', models.CharField(max_length=30)),
                ('pracSpeciality', models.CharField(max_length=50)),
                ('mobile', models.CharField(max_length=15)),
                ('altmobile', models.CharField(max_length=15)),
                ('dob', models.DateField(default=django.utils.timezone.now)),
                ('exp', models.CharField(max_length=5)),
                ('caddress', models.TextField(max_length=70)),
                ('paddress', models.TextField(max_length=70)),
                ('passw', models.CharField(max_length=20)),
                ('cpass', models.CharField(max_length=20)),
            ],
        ),
    ]
