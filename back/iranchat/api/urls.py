from django.urls import path,include
from .views import PostList,PostDetail,FaqList,UserList,ContactList,EmailList,ProductList,ProductDetail,MapList,QuizList,QuestionList,QuestionOptionList,NewsList,QuizDetail
app_name = 'api'

urlpatterns = [
    path('v1/', PostList.as_view(), name='post-list'),
    path('v1/<int:pk>', PostDetail.as_view(), name='detail'),
    path('v1/map', MapList.as_view(), name='map'),
    path('v1/faq', FaqList.as_view(), name='faq-list'),
    path('v1/contact', ContactList.as_view(), name='contact-list'),
    path('v1/newsletter', EmailList.as_view(), name='email-list'),
    path('v1/products', ProductList.as_view(), name='product-list'),
    path('v1/product/<int:pk>', ProductDetail.as_view(), name='product-detail'),
    path('v1/quizzes/', QuizList.as_view(), name='Quiz-list'),
    path('v1/quiz/<int:pk>', QuizDetail.as_view(), name='Quiz-detail'),
    path('v1/question/', QuestionList.as_view(), name='question-list'),
    path('v1/question-option/', QuestionOptionList.as_view(), name='question-option'),
    path('v1/news/', NewsList.as_view(), name='news-list'),
    # path('v1/user/', UserList.as_view(), name='user-list'),

]
 