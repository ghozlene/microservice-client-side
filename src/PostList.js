import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import ComentList from './ComentList';

const PostList = () => {
	const [posts, setPosts] = useState({});

	const fetchPost = async () => {
		const res = await axios.get('http://localhost:4000/posts').catch((err) => {
			console.log(err);
		});

		setPosts(res.data);
	};
	useEffect(() => {
		fetchPost();
	}, []);

	const renderPost = Object.values(posts).map((post) => {
		return (
			<div
				className='card'
				style={{ width: '30%', marginBottom: '1.2rem' }}
				key={post.id}>
				<div className='card-body'>
					<h3>{post.title}</h3>
					<ComentList postId={post.id} />
					<CommentCreate postId={post.id} />
				</div>
			</div>
		);
	});

	return (
		<div className='d-flex flex-row flex-wrap justify-content-between'>
			{renderPost}
		</div>
	);
};

export default PostList;
