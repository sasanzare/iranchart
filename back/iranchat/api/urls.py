from django.urls import path,include
from .views import PostList,UserList

app_name = 'api'

urlpatterns = [
    path('v1/', PostList.as_view(), name='post-list'),
    path('v1/user/', UserList.as_view(), name='user-list'),

]
 