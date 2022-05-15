import json
import sqlalchemy as session
import string



def initDatabase(dbPath):
    engine = session.create_engine(dbPath, connect_args={'check_same_thread':False})
    global conn 
    conn = engine.connect()
    meta = session.MetaData(bind=None)
    global viruses
    viruses = session.Table('viruses', meta, autoload = True, autoload_with = engine)
    

def search(hashNum):
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
    
    sResults = conn.execute(session.select(viruses.columns.fileHash).where(viruses.columns.fileHash.contains(hashNum)))
    results = sResults.fetchall()
    
    # Returns an error if the hash is not found by the VT API
    if(len(results) == 0):
        raise ValueError("Hash not found in local database")
    
    return {"md5": str(results[0][0])}


def add(hashNum):
    hashNum = hashNum.replace(" ", "").strip().lower()
    
    # Ensure the hash tuple does not exists in local database
    try:
        s = search(hashNum)
        if(s[0][0] == hashNum):
            raise ValueError("Hash already in local database")
    except ValueError as error:
        if(error.args[0] == "Hash not found in local database"):
            conn.execute(viruses.insert().values(fileHash = hashNum))
        else:
            raise error
    
def delete(hashNum):
    global conn
    hashNum = hashNum.replace(" ", "").strip().lower()
    
    # Ensure the hash tuple exists in local database
    try:
        search(hashNum)
    except ValueError as error:
        raise error
    
    conn.execute(viruses.delete().where(viruses.columns.fileHash == hashNum))