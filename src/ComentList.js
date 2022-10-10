import React from 'react';

const ComentList = ({ comments }) => {
	const renderComments = comments.map((comment) => {
		let content;
		switch (comment.status) {
			case 'approved':
				content = comment.content;

				break;
			case 'pending':
				content = 'this comment is awaiting moderation';
				break;
			case 'rejected':
				content = 'the comment was rejected';
				break;
			default:
				content = 'this comment is awaiting moderation';
				break;
		}
		return <li key={comment.id}>{content}</li>;
	});

	return <ul>{renderComments}</ul>;
};

export default ComentList;
