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

## Authenticated Form Refactoring Workflow

1. Pull form out of page (readd as component)
2. Wrap form with conditional auth logic to display
3. Create 2 form field components (div level)
   - 1 for simple inputs
   - 1 for complex array inputs with edit functionality (use simple input in this component)
4. form refactor (store state at page or section wrapper level)
   - use custom components for each field
   - form logic is only focused on managing the submit and wrapping around the input fields needed --> Test twice, with our actual form and with a experimentation form with dummy data
   - database controller logic all in helper functions that are imported on form implementation
