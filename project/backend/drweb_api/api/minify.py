import random
import sys
import glob
import shutil
import os.path
import argparse
import time
import os
import os.path
from csscompressor import compress
from htmlmin import minify
from jsmin import jsmin
dictcss = {'old_size': [], 'new_size': [], 'percentage': [], 'css_comp': 0,'title':[]}
dictjs = {'old_size': [], 'new_size': [], 'percentage': [], 'js_comp': 0,'title':[]}
dicthtml = {'old_size': [], 'new_size': [], 'percentage': [], 'html_comp': 0,'title':[]}


def minify_css(file_name, root):
	oldsize = os.stat(os.path.join(root, file_name)).st_size
	fr = open(root+"/"+file_name, "r")
	contents = fr.read()
	fr.close()
	output = compress(contents)
	fw = open(root+"/"+file_name, "w")
	fw.write(output)
	fw.close()
	newsize = os.stat(os.path.join(root, file_name)).st_size
	percent = (oldsize-newsize)/float(oldsize)*100
	dictcss['old_size'].append(oldsize)
	dictcss['new_size'].append(newsize)
	dictcss['percentage'].append(percent)


def CssCompressor(project_path):
	tot = 0
	num = 0
	for root, dirs, files in os.walk(project_path):
		for file_name in files:
			if os.path.splitext(file_name)[1].lower() == '.css':
				dictcss['title'].append(file_name)
				num += 1
				minify_css(file_name,root)
				tot+=dictcss['percentage'][-1]
	try:
		dictcss['css_comp']=float(tot)/num
	except ZeroDivisionError:
		dictcss['css_comp']=0
	return dictcss
    

def minify_js(file_name,root):
	oldsize = os.stat(os.path.join(root, file_name)).st_size
	fr=open(root+"/"+file_name, "r")
	contents=fr.read()
	fr.close()
	output=jsmin(contents)
	fw=open(root+"/"+file_name, "w")
	fw.write(output)
	fw.close()
	newsize = os.stat(os.path.join(root, file_name)).st_size
	percent = (oldsize-newsize)/float(oldsize)*100
	dictjs['old_size'].append(oldsize)
	dictjs['new_size'].append(newsize)
	dictjs['percentage'].append(percent)
	
def JsCompressor(project_path):
	tot = 0
	num = 0
	for root, dirs, files in os.walk(project_path):
		for file_name in files:
			if os.path.splitext(file_name)[1].lower() == '.js':
				dictjs['title'].append(file_name)
				num += 1
				minify_js(file_name,root)
				tot+=dictjs['percentage'][-1]
	try:
		dictjs['js_comp']=float(tot)/num
	except ZeroDivisionError:
		dictjs['js_comp']=0
	return dictjs
def minify_html(file_name,root):
	oldsize = os.stat(os.path.join(root, file_name)).st_size
	fr=open(root+"/"+file_name, "r")
	contents=fr.read()
	fr.close()
	output=minify(contents,remove_comments=True)
	fw=open(root+"/"+file_name, "w")
	fw.write(output)
	fw.close()
	newsize = os.stat(os.path.join(root, file_name)).st_size
	percent = (oldsize-newsize)/float(oldsize)*100
	dicthtml['old_size'].append(oldsize)
	dicthtml['new_size'].append(newsize)
	dicthtml['percentage'].append(percent)
	
def HtmlCompressor(project_path):
	tot = 0
	num = 0
	for root, dirs, files in os.walk(project_path):
		for file_name in files:
			if os.path.splitext(file_name)[1].lower() == '.html':
				dicthtml['title'].append(file_name)
				num += 1
				minify_html(file_name,root)
				tot+=dicthtml['percentage'][-1]
	try:
		dicthtml['html_comp']=float(tot)/num
	except ZeroDivisionError:
		dicthtml['html_comp']=0
	return dicthtml
