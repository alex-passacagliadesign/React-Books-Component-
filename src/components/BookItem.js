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

class BookItem extends React.Component {
	state = { bookCover: null, bookAuthor: null };
	//When the component mounts, call the api function with the title prop
	componentDidMount() {
		this.loadBookCover(this.props.title);
	}

	loadBookCover = async (title) => {
		const response = await GoogleBooks.get('/books/v1/volumes/', {
			params: {
				q: title
			}
		});

		this.setState({
			bookCover: response.data.items[0].volumeInfo.imageLinks.smallThumbnail,
			bookAuthor: response.data.items[0].volumeInfo.authors
		});
	};

	//If the content has loaded, display it
	//If content is loading, display a loading variation of the BookCard

	renderContent() {
		if (this.state.bookCover == null || this.state.bookAuthor == null) {
			return (
				<BookCard>
					<BookLoader />
				</BookCard>
			);
		}
		return (
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
