import React from 'react';
import BookList from './BookList';
import BookFilter from './BookFilter';

class App extends React.Component {
	state = {
		//Set book library as App State
		//Don't actually think that this needs to be in state as the values won't ever change
		books: [
			{ title: 'Human Errors', status: 'Completed' },
			{ title: 'Radical Technologies: The Design of Everyday Life', status: 'In progress' },
			{ title: 'The Death and Life of Great American Cities', status: 'In progress' },
			{ title: 'Primate Change', status: 'Completed' },
			{ title: 'Usable Usability', status: 'Queued' },
			{ title: 'Thinking, Fast and Slow', status: 'Completed' },
			{ title: 'The Design of Everyday Objects', status: 'In progress' }
		],

		//Default book list filter is set to 'All' to display all books in library
		selectedFilter: 'All',

		//The plan is to update this array to hold the list of filtered books and then make batch api call
		filteredBooks: []
	};

	//Callback function to fetch value of filter from UI <select/> element
	onSelectFilter = (Filter) => {
		//setState variable to be the received filter value
		this.setState({ selectedFilter: Filter });
	};

	render() {
		return (
			<div>
				{/* assign callback method as props and give filter the default 'All' value */}
				<BookFilter onSelectFilter={this.onSelectFilter} selectedFilter={this.state.selectedFilter} />
				{/* assign default filter value and complete library as props */}
				<BookList selectedFilter={this.state.selectedFilter} fullBookList={this.state.books} />
			</div>
		);
	}
}

export default App;
