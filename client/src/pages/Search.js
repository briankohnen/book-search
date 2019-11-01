import React, { Component } from "react";
import Header from '../components/Header';
import Search from '../components/Search';
import BooksContainer from '../components/BooksContainer';
import BookInfo from "../components/BookInfo";
import API from "../utils/API";
import axios from 'axios';

class SearchBooks extends Component {
  state = {
    books: [],
    searching: '',
    title: '',
    authors: '',
    description: '',
    image: '',
    link: ''
  };

  // componentDidMount() {
  //   this.loadBooks();
  // };

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, searching: '' })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearch = event => {
    event.preventDefault();
    if (this.state.searching) {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.searching)
        .then(res => {
            this.setState({books: res.data.items, searching: ''})
            console.log(res.data.items);
          })
          .catch(err => console.log(err));
    };
  };

  handleSave = event => {
      event.preventDefault();
      event.target.parentNode.parentNode.parentNode.style.display = 'none';
      this.setState({
        title: event.target.parentNode.parentNode.children[0].innerHTML,
        authors: event.target.parentNode.parentNode.children[1].innerHTML,
        description: event.target.parentNode.parentNode.parentNode.children[1].children[1].innerHTML,
        image: event.target.parentNode.parentNode.parentNode.children[1].children[0].src,
        link: event.target.parentNode.children[0].href
      });
      API.saveBook({
        title: this.state.title,
        authors: this.state.authors,
        description: this.state.description,
        image: this.state.image,
        link: this.state.link
      }).then(res => console.log('swhip'))
        .catch(err => console.log(err));
  }

  render() {
    return (
    <>
    <Header />
    <Search value={this.state.searching} name='searching' onChange={this.handleInputChange} onClick={this.handleSearch} />
    <BooksContainer containerHead='Results'>
        {this.state.books.map(book=> (
            (book.volumeInfo.description) ?
            <BookInfo 
            key={book.id} 
            title={book.volumeInfo.title} 
            author={book.volumeInfo.authors} 
            image={book.volumeInfo.imageLinks.smallThumbnail}
            summary={book.volumeInfo.description} 
            link={book.volumeInfo.previewLink} 
            onClick={this.handleSave} /> 
            :
            <></>
        ))}
    </BooksContainer>
    </>
    );
  };
};

export default SearchBooks;
