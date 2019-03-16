import React from 'react';
import BookList from './BookList';
import BookFilter from './BookFilter';
// import axios from 'axios';
// import GoogleBooks from '../api/GoogleBooks';

class App extends React.Component {
	state = { selectedFilter: 'All', FilteredBooks: [] };

	// onApplyFilter = async (Filter) => {
	// 	//Receive array of filtered books
	// 	//loop through array items and fetch book title
	// 	//make api call with book titles (one multiple api call should be quicker than 5+ individual calls)
	// 	const response = await GoogleBooks.get('/books/v1/volumes/', {
	// 		params: {
	// 			q: title
	// 		}
	// 	});
	// };

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
