# Generated by Django 2.1.1 on 2018-11-05 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map', '0008_auto_20181105_1045'),
    ]

    operations = [
        migrations.AlterField(
            model_name='planner',
            name='time',
            field=models.FloatField(default=0),
        ),
    ]
