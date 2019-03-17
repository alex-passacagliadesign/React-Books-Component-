import React from 'react';
import styled from '@emotion/styled';
import GoogleBooks from '../api/GoogleBooks';
import BookLoader from './BookLoader';

const BookCard = styled.div`
	/* Flex */
	display: flex;
	flex-basis: 45%;
	flex-wrap: no-wrap;

	/* Border Radius */
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;

	/* Box Shadow */
	-webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
	-moz-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);
	box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.25);

	/* Padding */
	padding: 1rem;
	margin: 1rem 0;
`;

const BookInfo = styled.div`
	/* Flex */
	padding-left: 1rem;
	margin: auto 0;
`;

//This component contains too much logic, I want to remove the api call (Which I believe is causing the book covers to render incorrectly) and make the component as 'dumb' as possible
class BookItem extends React.Component {
	state = { bookCover: null, bookAuthor: null };
	//When each book component mounts, call the api function with the title prop
	componentDidMount() {
		this.loadBookCover(this.props.title);
	}

	//make api call with the the received book title prop
	loadBookCover = async (title) => {
		const response = await GoogleBooks.get('/books/v1/volumes/', {
			params: {
				q: title
			}
		});

		//assign the state variables to the api response values
		this.setState({
			bookCover: response.data.items[0].volumeInfo.imageLinks.smallThumbnail,
			bookAuthor: response.data.items[0].volumeInfo.authors
		});
	};

	renderContent() {
		//If content is loading, or not present display a loading card
		if (this.state.bookCover == null || this.state.bookAuthor == null) {
			return (
				<BookCard>
					<BookLoader />
				</BookCard>
			);
		}
		return (
			//If the state variables have been updated with api response create a new book component with api response data
			<BookCard>
				<div className="book-cover">
					<img src={this.state.bookCover} alt={this.props.title + ' book cover'} />
				</div>
				<BookInfo>
					<h3 className="book-title">{this.props.title}</h3>
					<div className="author">{this.state.bookAuthor}</div>
				</BookInfo>
			</BookCard>
		);
	}

	render() {
		return this.renderContent();
	}
}

export default BookItem;
