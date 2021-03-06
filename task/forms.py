from django import forms
from django.db import models
from django.forms import widgets
from .models import Task


class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['title']


        widgets =  {
            'title': forms.TextInput(attrs={'class':'form-control'})
        }