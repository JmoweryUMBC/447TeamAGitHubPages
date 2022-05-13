import json
import vtapi

while(True):
    error = False

    hashNum = input("\nEnter hash for VirusTotal search: ")

    if(hashNum == "exit" or hashNum == "quit"):
        break

    try:
        result = vtapi.hashLookup(hashNum)
        print("\nFile Hash: " + result['md5'])
        print("VirusTotal Feedback: " + str(result['positives']) + "/" + str(result['total']) + " anti-viruses detected a virus.")
    except ValueError as error:
        print(type(error).__name__ + ":", error)
        