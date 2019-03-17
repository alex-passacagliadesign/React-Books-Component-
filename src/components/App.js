import React from 'react';
import BookFilter from './BookFilter';
import BookList from './BookList';

class App extends React.Component {
	state = { selectedFilter: 'All', FilteredBookList: [] };

	createFilteredBookList = (filteredBooks) => {
		this.setState({ FilteredBookList: filteredBooks });
	};

	onSelectFilter = (Filter) => {
		console.log(Filter);
		this.setState({ selectedFilter: Filter });
	};

	render() {
		return (
			<div>
				<BookFilter onSelectFilter={this.onSelectFilter} />
				<BookList
					createFilteredBookList={this.createFilteredBookList}
					selectedFilter={this.state.selectedFilter}
				/>
			</div>
		);
	}
}

export default App;
