import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBook from "./ListBook"
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from "./Book";

class BooksApp extends React.Component {
  state = {
    books: [],
    query: '',
    showingBooks: []
  }

  // get all the books before loading the component
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  // managing the input state
  updateQuery = (query) => {
    this.setState({query: query})
    let showingBooks = []
    if (query) {
      BooksAPI.search(query).then(response => {
        if (response.length) {
          showingBooks = response.map(b => {
            const index = this.state.books.findIndex(c => c.id === b.id)
            if( index >= 0 ) {
              return this.state.books[index]
            } else {
              return b
            }
          })
        }
        this.setState({showingBooks})
      })
    }
    else {
      this.setState({showingBooks})
    }
  }

  render() {
    const {query} = this.state
    return (
      <div className="app">

          <Route exact path="/search" render={() => (
            <div className="search-books">
              <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                  <input type="text"
                         placeholder="Search by title or author"
                         value={query}
                         onChange={(event) => this.updateQuery(event.target.value)}
                  />

                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                  {this.state.showingBooks.map((book, i) => (
                    <Book key={i} book={book}/>
                  ))}
                </ol>
              </div>
            </div>
          )} />
          <Route exact path="/" render={() => (
            <ListBook/>
          )}/>

      </div>
    )
  }
}

export default BooksApp
