import os
import sys
from PIL import Image
dict={'old_size':[],'new_size':[],'percentage':[],'average_compression':0}
dict1={'avg_comp':0}
def compressMe(file,filepath, verbose=False):
	filepath = os.path.join(filepath, file)
	oldsize = os.stat(filepath).st_size
	picture = Image.open(filepath)
	dim = picture.size
	#set quality= to the preferred quality. 
	#I found that 85 has no difference in my 6-10mb files and that 65 is the lowest reasonable number
	if dim[0]>1080 and dim[1]>920:
		picture.save("Compressed_"+file,"JPEG",optimize=True,quality=20) 
	else:	#for smaller image less compression rate
		picture.save("Compressed_"+file,"JPEG",optimize=True,quality=65)
	newsize = os.stat(os.path.join(os.getcwd(),"Compressed_"+file)).st_size
	if(int(oldsize)<int(newsize)):
		os.remove("Compressed_"+file)
		picture.save("Compressed_"+file,"JPEG",optimize=False)
		newsize=oldsize
	percent = (oldsize-newsize)/float(oldsize)*100
	if (verbose):
		dict['old_size'].append(oldsize)
		dict['new_size'].append(newsize)
		dict['percentage'].append(percent)
	

def ImageCompressor(project_path):
    #finds present working dir
    tot = 0
    num = 0
    for root, dirs, files in os.walk(project_path):
        for file in files:
            if os.path.splitext(file)[1].lower() in ('.jpg', '.jpeg'):
                num += 1
                compressMe(file,root, True)
                tot+=dict['percentage'][-1]
    dict1['avg_comp']=float(tot)/num
    return [dict1,dict]


