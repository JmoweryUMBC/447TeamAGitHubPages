import json
import requests

def hashLookup(hashNum):
    
    url = 'https://www.virustotal.com/vtapi/v2/file/report'
    params = {'apikey': '7ba999463319a51e15cbfe4846390cd84ab90b1759c8a6cacdab689c143d4b29', 'resource': hashNum}
    
    response = requests.get(url, params=params)
    
    return response