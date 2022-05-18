import dbInteraction

dbInteraction.initDatabase('sqlite:///database.db')

while(True):
    print("\n1. Search Database")
    print("2. Add to Database")
    print("3. Delete from Database")
    
    option = input("Option Number: ")
    
    if(option == '1'):
        done = False
        while(not done):
            param = input("Hash to Search For: ")
            
            try:
                resList = dbInteraction.search(param)
                print("Found:", resList['md5'])
                done = True
            except ValueError as error:
                print(type(error).__name__ + ":", error)
        
    elif(option == '2'):
        param = input("Complete Hash to Add: ")
        positives = input("Number of positive Detects: ")
        total = input("Number of total provider searches: ")
        error = dbInteraction.add(param, positives, total)
        
        if(error):
            print(type(error).__name__ + ":", error)
    elif(option == '3'):
        param = input("Complete Hash to Remove: ")
        error = dbInteraction.delete(param)
        
        if(error):
            print(type(error).__name__ + ":", error)