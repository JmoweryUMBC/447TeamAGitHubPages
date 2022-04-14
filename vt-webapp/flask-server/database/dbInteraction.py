import sqlalchemy as session

engine = session.create_engine('sqlite:///database.db')
conn = engine.connect()
meta = session.MetaData(bind=None)

viruses = session.Table('viruses', meta, autoload = True, autoload_with = engine)

def search(hashNum):
    sResults = conn.execute(session.select(viruses.columns.fileHash).where(viruses.columns.fileHash.contains(hashNum)))
    
    return sResults.fetchall()


def add(hashNum):
    conn.execute(viruses.insert().values(fileHash = hashNum))
    
def delete(hashNum):
    conn.execute(viruses.delete().where(viruses.columns.fileHash == hashNum))