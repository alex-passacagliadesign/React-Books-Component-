import React from 'react';
import BookList from './BookList';
import BookFilter from './BookFilter';
import BookShelf from './BookList';

class App extends React.Component {
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
		selectedFilter: 'All',
		filteredBooks: []
	};

	onSelectFilter = (Filter) => {
		this.setState({ selectedFilter: Filter });
	};

	render() {
		return (
			<div>
				<BookFilter onSelectFilter={this.onSelectFilter} selectedFilter={this.state.selectedFilter} />
				<BookList selectedFilter={this.state.selectedFilter} />
			</div>
		);
	}
}

export default App;
