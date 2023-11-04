from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse

# Create your views here.
class GetCourseScheduleView(APIView):
    def get(self, request):

        return JsonResponse({}, safe=False)