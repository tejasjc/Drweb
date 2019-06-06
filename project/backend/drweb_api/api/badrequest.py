from bs4 import BeautifulSoup
import re
import urllib3
import os
import sys
import requests
from requests.exceptions import RequestException
dict={'href':[],'status':[],'count':0}

def StatusCode(file,filepath, verbose=False):
	filepath = os.path.join(filepath, file)
	data=[]
	print(filepath)
	text_file = open(filepath, "r")
	lines = text_file.readlines()
	soup = BeautifulSoup(str(lines),"html.parser")
	
	for link in soup.findAll('a'):
		data.append(link.get('href'))
	for link in soup.findAll('link'):
		data.append(link.get('href'))
	print(data)
	http = urllib3.PoolManager() 
	for data in data:
		
		try:
			if(data.startswith('http')):
				r=requests.get(data)
				if(r.status_code==200):
					dict['href'].append(data)
					dict['status'].append('yes')
					print(r.status_code)
			
		except RequestException as e:
			dict['href'].append(data)
			dict['status'].append('no')
			r.close()
	dict['count']=len(dict['href'])
def BadRequest(project_path):
	
	for root, dirs, files in os.walk(project_path):
		for file in files:
			if os.path.splitext(file)[1].lower() in ('.html', '.htm'):
				StatusCode(file,root, True)
	return dict