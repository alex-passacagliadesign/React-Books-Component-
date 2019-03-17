import React from 'react';

const books = [
	{ title: 'Human Errors', status: 'Completed' },
	{ title: 'Radical Technologies: The Design of Everyday Life', status: 'In progress' },
	{ title: 'The Death and Life of Great American Cities', status: 'In progress' },
	{ title: 'Primate Change', status: 'Completed' },
	{ title: 'Usable Usability', status: 'Queued' },
	{ title: 'Thinking, Fast and Slow', status: 'Completed' },
	{ title: 'The Design of Everyday Objects', status: 'In progress' }
];

class BookList extends React.Component {
	checkBookStatus(book, index) {
		if (book === this.props.selectedFilter) {
			console.log(book.title);
		}
	}

	render() {
		return <div>{books.filter(this.checkBookStatus)}</div>;
	}
}

export default BookList;
