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
	//Filter function that checks to see if the current book's status matches the selected filter value
	checkBookStatus = (book, index) => {
		if (book.status === this.props.selectedFilter) {
			return book.title;
			//On default filter value, display all books
		} else if (this.props.selectedFilter === 'All') {
			return this.props.fullBookList[index].title;
		}
	};

	//Map function that receives the titles of the books that match the filter and returns JSX element
	createBookItem = (book, index) => {
		return <BookItem title={book.title} key={index} />;
	};

	render() {
		//Iterate through library, filter and then map the books whose status matches the selected filter
		return <BookShelf>{this.props.fullBookList.filter(this.checkBookStatus).map(this.createBookItem)}</BookShelf>;
	}
}

export default BookList;
