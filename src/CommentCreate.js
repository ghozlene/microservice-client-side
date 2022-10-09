import axios from 'axios';
import React, { useState } from 'react';

const CommentCreate = ({ postId }) => {
	const [text, setText] = useState('');

	const onSubmit = async (event) => {
		event.preventDefault();

		await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
			content: text,
		});

		setText('');
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label>New Comment</label>
					<input
						className='form-control'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<button className='btn btn-alert'>Submit</button>
			</form>
		</div>
	);
};

export default CommentCreate;
