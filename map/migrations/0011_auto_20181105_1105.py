# Generated by Django 2.1.1 on 2018-11-05 11:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0010_auto_20181105_1053'),
    ]

    operations = [
        migrations.AlterField(
            model_name='planner',
            name='times',
            field=models.FloatField(default=0),
        ),
    ]
