# Generated by Django 2.1.1 on 2018-11-05 10:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0005_auto_20181105_1004'),
    ]

    operations = [
        migrations.AlterField(
            model_name='planner',
            name='stay_time',
            field=models.FloatField(default=0),
        ),

    ]