from django.urls import path
from .views import TaskList
from .views import TaskComplete

urlpatterns = [
    path('', TaskList.as_view(), name='task_list_url'),
    path('<str:id>/completed/', TaskComplete.as_view(),name='task_completed_url') # v souboru: todo.js: $.ajax({ url: '/tasks/'+ dataId + '/completed/' ...
]

# 
#  path( 
# URL pattern:  '' | '<str:id>/completed' 
# ViewName / v souboru [views.py] (must be also imported as class)
# 
# 
# 
# 
# 
# 
# 