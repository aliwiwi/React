import propTypes from "prop-types";
import React from "react";

const CardComponent = (props) => {
	return (
		<div className="col ">
			<div className="card h-100">
				<img src={props.Image} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title ">{props.Tittle}</h5>
					<p className="card-text">{props.Text}</p>
				</div>
				<div className="card-footer  mx-auto">
					<small>
						<button type="button" class="btn btn-primary ">
							{props.Button}
						</button>
					</small>
				</div>
			</div>
		</div>
	);
};

CardComponent.propTypes = {
	Tittle: propTypes.string,
	Text: propTypes.string,
	Button: propTypes.string,
	Image: propTypes.string,
};
export default CardComponent;