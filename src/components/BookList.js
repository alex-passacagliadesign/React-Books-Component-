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
	margin: 40px auto 0 auto;

	/* Media Queries */
	@media (max-width: 700px) {
		flex-direction: column;
		flex: 1;
	}
`;

const Booklist = () => {
	return (
		<BookShelf>
			<BookItem title={'Human Errors'} author={'Nathan H. Lents'} status={'reading'} />
			<BookItem title={'Radical Technologies: The Design of Everyday Life '} status={'reading'} />
			<BookItem title={'The Death and Life of Great American Cities'} status={'reading'} />
			<BookItem title={'Thinking, Fast and Slow'} status={'reading'} />
			<BookItem title={'The Design of Everyday Things'} status={'reading'} />
			<BookItem title={'Primate Change: How the World We Made is Remaking Us'} status={'read'} />
		</BookShelf>
	);
};

export default Booklist;
