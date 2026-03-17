# Firestore planning

- connect the db to the context or add a new context?
- import firestore where the app has been initialized
- create document helper function
- read data: access a specific document
- read data: access a collection of documents

## Security Rules from docs

```
// Allow read/write access to a document keyed by the user's UID
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```
