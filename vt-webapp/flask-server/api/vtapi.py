import json
import string
import requests

def hashLookup(hashNum):
    # Removes all the spaces in the input hashNum & converts to lowercase
    hashNum = hashNum.replace(" ", "").strip().lower()
    
    # Returns an error if the hash number contains any char other than a-z or 0-9
    if(not hashNum.isalnum()):
        raise ValueError("Hash number contains invalid chars (req: a-z, 0-9)")
    
    # Returns an error if the hash number is too long or too short
    if(len(hashNum) > 32):
        raise ValueError("Hash number length is too long (req: 32 chars)")
    elif(len(hashNum) < 32):
        raise ValueError("Hash number length is too short (req: 32 chars)")
    
    url = 'https://www.virustotal.com/vtapi/v2/file/report'
    params = {'apikey': '7ba999463319a51e15cbfe4846390cd84ab90b1759c8a6cacdab689c143d4b29', 'resource': hashNum}
    response = requests.get(url, params=params)
    
    # Returns an error if the request limit has been met or the hash number is invalid (on API side)
    if(response.status_code == 204):
        raise ValueError("API request rate limit exceeded")
    elif(response.status_code == 400):
        raise ValueError("Invalid hash number")
        
    result = response.json()

    # Returns an error if the hash is not found by the VT API
    if(result['response_code'] == 0):
        raise ValueError("Hash not found by VirusTotal API")
    return result