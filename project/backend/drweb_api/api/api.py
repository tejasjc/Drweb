import os
import fnmatch
import glob
from pathlib import Path
def count(file_name):
    css=[]
    js=[]
    html=[]
    img=[]
    analysis={}
    for root, dirs, files in os.walk(file_name):
        for file in files:
            if file.endswith('.css'):
                css.append(file)
            if file.endswith('.js'):
                js.append(file)
            if file.endswith('.html'):
                html.append(file)
            if file.endswith('.PNG'):
                img.append(file)
            if file.endswith('.JPG'):
                img.append(file) 
            if file.endswith('.png'):
                img.append(file)
            if file.endswith('.jpg'):
                img.append(file) 
            
    

    analysis['css']=len(css)
    analysis['js']=len(js)
    analysis['html']=len(html)
    analysis['img']=len(img)
    return analysis