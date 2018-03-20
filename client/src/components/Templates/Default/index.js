import React, { Component } from 'react';
import loadPage from '../../loadPage';

import './Default.css';

class Default extends Component {

	render() {

		let slug = this.props.match.path.replace('/', '');

		if (this.props.data) {

			let data = this.props.data;

			return (
				<article className={`${slug} default-template`}>
					<h1>{data.title.rendered}</h1>
					<div>
						{data.content.rendered}
					</div>
				</article>
			);

		} else {
			return <div></div>
		}
	}
}

export default loadPage(Default);