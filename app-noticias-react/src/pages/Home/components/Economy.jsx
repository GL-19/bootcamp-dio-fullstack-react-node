import React, { memo } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Row, Col } from "antd";
import { createMarkup } from "../../../utils";

function Economy({ values }) {
	const history = useHistory();

	function renderImg({ image, description }) {
		return (
			<div>
				<img src={image.url} alt={description} width="100%" />
			</div>
		);
	}

	function renderDescription(description) {
		return <p dangerouslySetInnerHTML={createMarkup(description)} />;
	}

	function openPost(id) {
		history.push(`/economy/${id}`);
	}

	function renderPost(post, index) {
		const { title, image, description, id } = post;
		return (
			<Col span={24} md={12} key={`post-${index}`}>
				<article onClick={() => openPost(id)}>
					<p>
						<strong dangerouslySetInnerHTML={createMarkup(title)} />
					</p>
					{image?.url
						? renderImg({ image, description })
						: renderDescription(description)}
				</article>
			</Col>
		);
	}

	return <Row gutter={[16, 16]}>{values?.map(renderPost)}</Row>;
}

Economy.defaultProps = {
	values: [],
};

Economy.propTypes = {
	values: PropTypes.array.isRequired,
};
export default memo(Economy);
