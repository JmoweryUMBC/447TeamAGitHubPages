import requests

def vtSearch():
    hashNum = input("Hash Number: ")
    
    result = requests.get("http://localhost:5000/VTSearch/" + hashNum)
    
    return result


def dbSearch():
    hashNum = input("Hash Number: ")
    
    result = requests.get("http://localhost:5000/DBSearch/" + hashNum)
    
    return result


while(True):
    
    print("\nFlask Test Program")
    print("1. Database Search")
    print("2. Virus Total Search")

    option = input("\nOption Number: ")
    
    if(option == "quit" or option == "exit"):
        break
    elif (option == '1'):
        # Flask db search
        response = dbSearch()
        resInfo = response.json()
        if(response.status_code == 500):
            print("Error:", resInfo['error'])
        elif(response.status_code == 200):
            print("Result:", resInfo['md5'])
    elif (option == '2'):
        # Flask vt search
        response = vtSearch()
        resInfo = response.json()
        if(response.status_code == 500):
            print("Error:", resInfo['error'])
        elif(response.status_code == 200):
            print("\nResult:", resInfo['md5'], "-", str(resInfo['positives']) + "/" + str(resInfo['total']))