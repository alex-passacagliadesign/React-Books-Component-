import React from 'react';
import styled from '@emotion/styled';

const FlexContainer = styled.div`display: flex;`;

const FilterType = styled.div`margin: 1rem auto;`;

class BookFilter extends React.Component {
	render() {
		return (
			<FlexContainer>
				<FilterType>
					<select
						value={this.props.selectedFilter}
						// onChange={(e) => this.setState({ selectedFilter: e.target.value })}
						onChange={(e) => this.props.onSelectFilter(e.target.value)}
					>
						<option value="All">All</option>
						<option value="In progress">In progress</option>
						<option value="Completed">Completed</option>
						<option value="Queued">Queued</option>
					</select>
				</FilterType>
			</FlexContainer>
		);
	}
}

export default BookFilter;
