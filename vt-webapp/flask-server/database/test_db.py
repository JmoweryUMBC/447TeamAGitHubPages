import dbInteraction

while(True):
    print("1. Search Database")
    print("2. Add to Database")
    print("3. Delete from Database")
    
    option = input("Option Number: ")
    
    if(option == '1'):
        param = input("Partial/Complete Hash to Search For: ")
        resList = dbInteraction.search(param)
        resListSize = 0
        
        for res in resList:
            print("Found:", res[0])
            resListSize+=1
        print("Found a total of", resListSize, "results.")
        
    elif(option == '2'):
        param = input("Complete Hash to Add: ")
        dbInteraction.add(param)
    elif(option == '3'):
        param = input("Complete Hash to Remove: ")
        dbInteraction.delete(param)