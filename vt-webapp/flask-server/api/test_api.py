import json
import vtapi

while(True):
    error = False

    hashNum = input("\nEnter hash for VirusTotal search: ")
    response = vtapi.hashLookup(hashNum)

    try:
        result = response.json()
    except:
        apierror = True
        print("Error: Invalid API Key")
        
    if (not error):
        if (result['response_code'] == 0):
            print("\nCould not find hash in VirusTotal Database")
        elif (result['response_code'] == 1):
            print("\nFile Hash: " + hashNum)
            print("VirusTotal Feedback: " + str(result['positives']) + "/" + str(result['total']) + " anti-viruses detected a virus.")