from bs4 import BeautifulSoup
import re
import urllib3
import os
import sys
import requests
from requests.exceptions import RequestException
dict={'file':[],'status':[],'count':[],'total':0}
def StatusCode(file,filepath, verbose=False):
    filepath = os.path.join(filepath, file)
    data=[]
    print(filepath)
    text_file = open(filepath, "r")
    lines = text_file.readlines()
    soup = BeautifulSoup(str(lines),"html.parser")
    c=0
    for link in soup.findAll('link'):
        c=c+1
    dict['file'].append(file)
    dict['count'].append(c)
    if(c>1):
        dict['status'].append("yes")
    else:
        dict['status'].append("no")
    dict['total']=len(dict['file'])

def RendBlock(project_path):
	
	for root, dirs, files in os.walk(project_path):
		for file in files:
			if os.path.splitext(file)[1].lower() in ('.html', '.htm'):
				StatusCode(file,root, True)
	return dict