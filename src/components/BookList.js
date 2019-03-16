import React from 'react';
import BookItem from './BookItem';
import styled from '@emotion/styled';

const BookShelf = styled.div`
	/* Flex */
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	/* Container */
	max-width: 900px;
	margin: 1rem auto 0 auto;

	/* Media Queries */
	@media (max-width: 700px) {
		flex-direction: column;
		flex: 1;
	}
`;

class BookList extends React.Component {
	state = {
		books: [
			{ title: 'Human Errors', status: 'Completed' },
			{ title: 'Radical Technologies: The Design of Everyday Life', status: 'In progress' },
			{ title: 'The Death and Life of Great American Cities', status: 'In progress' },
			{ title: 'Primate Change', status: 'Completed' },
			{ title: 'Usable Usability', status: 'Queued' },
			{ title: 'Thinking, Fast and Slow', status: 'Completed' },
			{ title: 'The Design of Everyday Objects', status: 'In progress' }
		],

		filteredBooks: []
	};

	createBookItem = (book, index) => {
		return <BookItem title={book.title} key={index} />;
	};

	checkBookStatus = (book, index) => {
		if (book.status === this.props.selectedFilter) {
			return book.title;
		} else if (this.props.selectedFilter === 'All') {
			return this.state.books[index].title;
		}
	};

	render() {
		return <BookShelf>{this.state.books.filter(this.checkBookStatus).map(this.createBookItem)}</BookShelf>;
	}
}

export default BookList;
