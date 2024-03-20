from pymongo import MongoClient

def insert_documents():
    client = MongoClient("mongodb://localhost:27017/")
    mangapp_db = client.mangapp_db

    user_collection = mangapp_db["user"]
    manga_collection = mangapp_db["manga"]
    history_collection = mangapp_db["history"]

    user_documents = [
        {
            "username": "user1",
            "password": "Password1!",
            "profilePicture": "profile1.jpg",
            "name": "John Doe"
        },
        {
            "username": "user2",
            "password": "SecurePass123!",
            "profilePicture": "profile2.jpg",
            "name": "Jane Smith"
        },
        {
            "username": "user3",
            "password": "StrongPassword123!",
            "profilePicture": "profile3.jpg",
            "name": "Alice Johnson"
        },
        {
            "username": "user4",
            "password": "P@ssw0rd2023",
            "profilePicture": "profile4.jpg",
            "name": "Bob Williams"
        },
        {
            "username": "user5",
            "password": "Passw0rd!",
            "profilePicture": "profile5.jpg",
            "name": "Eve Brown"
        }
    ]

    manga_documents = [
        {
            "title": "Adventure Manga",
            "genre": "Adventure",
            "rating": 4.2,
            "author": "Jane Smith",
            "description": "Exciting adventure awaits!",
            "status": "Completed",
            "releaseDate": "2020-07-15",
            "coverImage": "adventure_cover.jpg",
            "views": 5000,
            "tag": {
                "description": "Exciting",
                "weight": 0.8
            },
            "chapter": {
                "title": "Chapter 1",
                "releaseDate": "2020-07-15",
                "chapterNumber": 1,
                "totalPages": 25,
                "pages": {
                    "pageNumber": 1,
                    "imageSrc": "adventure_page1.jpg"
                },
                "reviews": {
                    "userId": "user456",
                    "comment": "Amazing!",
                    "date": "2020-07-15",
                    "visible": True
                }
            }
        },
        {
            "title": "Fantasy Manga",
            "genre": "Fantasy",
            "rating": 4.6,
            "author": "Alice Johnson",
            "description": "Enter a world of magic and wonder.",
            "status": "Ongoing",
            "releaseDate": "2022-03-10",
            "coverImage": "fantasy_cover.jpg",
            "views": 8000,
            "tag": {
                "description": "Magical",
                "weight": 0.9
            },
            "chapter": {
                "title": "Chapter 1",
                "releaseDate": "2022-03-10",
                "chapterNumber": 1,
                "totalPages": 40,
                "pages": {
                    "pageNumber": 1,
                    "imageSrc": "fantasy_page1.jpg"
                },
                "reviews": {
                    "userId": "user789",
                    "comment": "Spellbinding!",
                    "date": "2022-03-10",
                    "visible": True
                }
            }
        }
    ]

    history_documents = [
        {
            "lastReadTimestamp": "2024-03-19 15:30",
            "chapterId": "chapter_id_123",
            "mangaId": "manga_id_456",
            "userId": "user_id_789"
        },
        {
            "lastReadTimestamp": "2024-03-18 10:45",
            "chapterId": "chapter_id_456",
            "mangaId": "manga_id_789",
            "userId": "user_id_123"
        }
    ]

    result_user = user_collection.insert_many(user_documents)
    result_manga = manga_collection.insert_many(manga_documents)
    result_history = history_collection.insert_many(history_documents)

    print("User documents inserted:", result_user.inserted_ids)
    print("Manga documents inserted:", result_manga.inserted_ids)
    print("History documents inserted:", result_history.inserted_ids)

if __name__ == "__main__":
    insert_documents()
    print("Documents inserted successfully!")
