from django.db import models

class Files(models.Model):
    title = models.CharField(max_length=200)
    js_count=models.IntegerField()
    css_count=models.IntegerField()
    html_count=models.IntegerField()
    img_count=models.IntegerField()

    def __str__(self):
        """A string representation of the model."""
        return self.title+str(self.js_count)
