import os

def remove_special_chars(name, delimiter):
    camel_case = name
    if name.find(delimiter)>=1:
        chunks = name.split(delimiter)
        for i in range(len(chunks)):
            if i == 0:
                camel_case = chunks[i].lower()
            else:
                camel_case += chunks[i][0].upper() + chunks[i][1:]
    if name.find(delimiter) == 0:
        camel_case = name[1:]
    return camel_case

def to_camel_case(name):
    while name.find("_")!=-1 or name.find(".")!=-1 or name.find("-")!=-1:
        name = remove_special_chars(name, "_")
        name = remove_special_chars(name, ".")
        name = remove_special_chars(name, "-")
        
    return name

def to_ajv_type(_type):
    if _type[-2:] == '[]':
        return 'array'
    
    elif _type[:3].lower() in ['int', 'sma', 'big']:
        return 'integer'
    
    elif _type[:3].lower() in ['dou', 'num']:
        return 'number'
   
    elif _type[:4].lower() == 'bool':
        return 'boolean'
    
    else:
        return 'string'

def remove_dict(d, key, values):
    for value in values:
        if d.get(key) == value:
            return False
    return True

def set_difference(set1:set, set2:set):
    return set1.difference(set2)

def delete_files_from_directory(directory):
    for file in os.listdir(directory):
        file_path = os.path.join(directory, file)
        try:
            if os.path.isfile(file_path):
                os.unlink(file_path)
        except Exception as e:
            print(e)
