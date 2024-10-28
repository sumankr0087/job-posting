from rest_framework import viewsets
from .models import JobPosting
from .serializers import JobPostingSerializer
from django.contrib.auth.models import User
from rest_framework import permissions
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import serializers
from django.contrib.auth import authenticate

class JobPostingViewSet(viewsets.ModelViewSet):
    queryset = JobPosting.objects.all()
    serializer_class = JobPostingSerializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class RegisterView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"id": user.id, "username": user.username}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            })
        return Response({"error": "Invalid Credentials"}, status=status.HTTP_401_UNAUTHORIZED)
