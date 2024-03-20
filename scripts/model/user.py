import pymongo

def create_user_collection(mangapp_db: pymongo.database):

    try:
        mangapp_db.create_collection("user")
    except Exception as e:
        print(e)

    user_validator = {
        "$jsonSchema": {
            "bsonType": "object",
            "required": ["username", "password", "profilePicture", "name"],
            "properties": {
                "username": {
                    "bsonType": "string",
                    "description": "username must be a string and is required"
                },
                "password": {
                    "bsonType": "string",
                    "description": "password must be a string and is required",
                    "minLength": 8,
                    "pattern": "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
                },
                "profilePicture": {
                    "bsonType": "string",
                    "description": "profilePicture must be a string and is required"
                },
                "name": {
                    "bsonType": "string",
                    "description": "name must be a string and is required"
                },
                "favorites": {
                    "bsonType": "array",
                    "description": "Array of favorite manga IDs",
                    "items": {
                        "bsonType": "string",
                        "description": "mangaId must be a string"
                    }
                }
            }
        }
    }


    mangapp_db.command("collMod", "user", validator=user_validator)