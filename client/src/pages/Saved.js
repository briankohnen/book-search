import React, { Component } from "react";
import Header from '../components/Header';
import BooksContainer from '../components/BooksContainer';
import BookInfo from "../components/BookInfo";
import API from "../utils/API";

class SavedBooks extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  };

  loadBooks = () => {
    API.getBooks().then(res => {
        this.setState({books: res.data});
        console.log(this.state.books);
    }).catch(err => {
       console.log(err)
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
    <>
    <Header />
    <BooksContainer containerHead='Saved'>
        {this.state.books.map(book=> (
            <BookInfo 
            key={book._id} 
            title={book.title} 
            author={book.authors} 
            image={book.image}
            summary={book.description} 
            link={book.link} 
            // onClick={this.handleSave} 
            />
        ))}
    </BooksContainer>
    </>
    );
  };
};

export default SavedBooks;