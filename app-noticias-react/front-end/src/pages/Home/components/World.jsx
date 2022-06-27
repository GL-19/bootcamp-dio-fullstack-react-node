import React, { memo } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Row, Col } from "antd";
import { createMarkup } from "../../../utils";

function World({ values }) {
	const history = useHistory();

	function renderImg({ image, description }) {
		return <img src={image.url} alt={description} width="100% " />;
	}

	function openPost(id) {
		history.push(`/world/${id}`);
	}

	function renderPost(post, index) {
		const { title, image, description, id } = post;
		const isFirst = index === 0;
		const spanValue = isFirst ? 24 : 12;

		return (
			<Col span={spanValue} key={`World-${index}`}>
				<article onClick={() => openPost(id)}>
					<p>
						<strong dangerouslySetInnerHTML={createMarkup(title)} />
					</p>
					<p dangerouslySetInnerHTML={createMarkup(description)} />
					{isFirst && renderImg({ image, description })}
				</article>
			</Col>
		);
	}

	return <Row gutter={[16, 16]}>{values?.map(renderPost)}</Row>;
}

World.defaultProps = {
	values: [],
};

World.propTypes = {
	values: PropTypes.array.isRequired,
};
export default memo(World);
