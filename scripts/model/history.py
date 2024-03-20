import pymongo

def create_history_collection(mangapp_db: pymongo.database):

    try:
        mangapp_db.create_collection("history")
    except Exception as e:
        print(e)

    history_validator = {
        "$jsonSchema": {
            "bsonType": "object",
            "required": ["lastReadTimestamp", "chapterId", "mangaId", "userId"],
            "properties": {
                "lastReadTimestamp": {
                    "bsonType": "string",
                    "pattern": "^\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}$",
                    "description": "lastReadTimestamp must be a date in the format YYYY-MM-DD HH:MM"
                },
                "chapterId": {
                    "bsonType": "string",
                    "description": "chapterId must be a string representing a chapter"
                },
                "mangaId": {
                    "bsonType": "string",
                    "description": "mangaId must be a string representing a manga"
                },
                "userId": {
                    "bsonType": "string",
                    "description": "userId must be a string representing a user"
                }
            }
        }
    }



    mangapp_db.command("collMod", "history", validator=history_validator)