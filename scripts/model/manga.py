import pymongo

def create_manga_collection(mangapp_db: pymongo.database):

    try:
        mangapp_db.create_collection("manga")
    except Exception as e:
        print(e)

    manga_validator = {
        "$jsonSchema": {
            "bsonType": "object",
            "required": ["title", "genre", "rating", "author", "description", "status", "releaseDate", "coverImage", "views"],
            "properties": {
                "title": {
                    "bsonType": "string",
                    "description": "title must be a string and is required"
                },
                "genre": {
                    "bsonType": "string",
                    "description": "genre must be a string and is required"
                },
                "rating": {
                    "bsonType": "double",
                    "description": "rating must be a double and is required"
                },
                "author": {
                    "bsonType": "string",
                    "description": "author must be a string and is required"
                },
                "description": {
                    "bsonType": "string",
                    "description": "description must be a string and is required"
                },
                "status": {
                    "bsonType": "string",
                    "description": "status must be a string and is required"
                },
                "releaseDate": {
                    "bsonType": "string",
                    "pattern": "^\\d{4}-\\d{2}-\\d{2}$",
                    "description": "releaseDate must be a date in the format YYYY-MM-DD"
                },
                "coverImage": {
                    "bsonType": "string",
                    "description": "coverImage must be a string and is required"
                },
                "views": {
                    "bsonType": "int",
                    "description": "views must be an integer and is required"
                },
                "tag": {
                    "bsonType": "object",
                    "required": ["description", "weight"],
                    "properties": {
                        "description": {
                            "bsonType": "string",
                            "description": "description must be a string and is required"
                        },
                        "weight": {
                            "bsonType": "double",
                            "description": "weight must be a double and is required"
                        }
                    }
                },
                "chapter": {
                    "bsonType": "object",
                    "required": ["title", "releaseDate", "chapterNumber", "totalPages", "pages"],
                    "properties": {
                        "title": {
                            "bsonType": "string",
                            "description": "title must be a string and is required"
                        },
                        "releaseDate": {
                            "bsonType": "string",
                            "pattern": "^\\d{4}-\\d{2}-\\d{2}$",
                            "description": "releaseDate must be a date in the format YYYY-MM-DD"
                        },
                        "chapterNumber": {
                            "bsonType": "int",
                            "description": "chapterNumber must be an integer and is required"
                        },
                        "totalPages": {
                            "bsonType": "int",
                            "description": "totalPages must be an integer and is required"
                        },
                        "pages": {
                            "bsonType": "object",
                            "required": ["pageNumber", "imageSrc"],
                            "properties": {
                                "pageNumber": {
                                    "bsonType": "int",
                                    "description": "pageNumber must be an integer and is required"
                                },
                                "imageSrc": {
                                    "bsonType": "string",
                                    "description": "imageSrc must be a string and is required"
                                }
                            }
                        },
                        "reviews": {
                            "bsonType": "object",
                            "required": ["userId", "comment", "date", "visible"],
                            "properties": {
                                "userId": {
                                    "bsonType": "string",
                                    "description": "userId must be a string and is required"
                                },
                                "comment": {
                                    "bsonType": "string",
                                    "description": "comment must be a string and is required"
                                },
                                "date": {
                                    "bsonType": "string",
                                    "pattern": "^\\d{4}-\\d{2}-\\d{2}$",
                                    "description": "date must be a date in the format YYYY-MM-DD"
                                },
                                "visible": {
                                    "bsonType": "bool",
                                    "description": "visible must be a boolean and is required"
                                }
                            }
                        }
                    }
                }
            }
        }
    }



    mangapp_db.command("collMod", "manga", validator=manga_validator)