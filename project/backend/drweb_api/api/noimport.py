from bs4 import BeautifulSoup
import re
import urllib3
import os
import sys
import requests
from requests.exceptions import RequestException
dict={'file':[],'status':[],'count':0}

def StatusCode(file,filepath, verbose=False):
    filepath = os.path.join(filepath, file)
    with open(filepath) as f:
            contents = f.read()
            search_word = '@import'
            if search_word in contents:
                dict['file'].append(file)
                dict['status'].append("yes")
            else:
                dict['file'].append(file)
                dict['status'].append("no")
    dict['count']=len(dict['file'])
def NoImport(project_path):
	
	for root, dirs, files in os.walk(project_path):
		for file in files:
			if os.path.splitext(file)[1].lower() in ('.css'):
				StatusCode(file,root, True)
	return dict