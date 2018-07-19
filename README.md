# Webinar book react

This project is used during the book react webinar.
The project is built progressively with commit referencing each step.

A preview of the project is available [here](https://stackblitz.com/github/kedevked/webinar-book-react)
## Dependencies

* [NodeJs](https://nodejs.org/en/) latest
* [NPM](https://www.npmjs.com/)

## Launch the project

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

Here are the following requests used to get the books or update them:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Contributing

This project is as part of the react webinar for the book app. 
So feel free to clone it and use it as the starter of your own project.