from django.db import models

class JobPosting(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    requirements = models.CharField(max_length=255)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.title
