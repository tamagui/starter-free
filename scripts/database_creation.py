from pymongo import MongoClient
from model.user import create_user_collection
from model.history import create_history_collection
from model.manga import create_manga_collection

# Create a connection to the MongoDB server
client = MongoClient("mongodb://localhost:27017/")

# Creating a new database
mangapp_db = client.mangapp_db

if __name__ == "__main__":
    create_manga_collection(mangapp_db)
    create_user_collection(mangapp_db)
    create_history_collection(mangapp_db)
    print("Database and collections created successfully!")

