import React from "react";

const JumboTron = (props) => {
	return (
		<div className="container p-1 bg-light">
			<div className="jumbotron">
				<h1 className="display-5">A Warm Welcome!!</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facere itaque rerum? Distinctio quod ullam quia expedita adipisci,
                    enim est consequatur soluta assumenda modi temporibus, laboriosam dolor quos sequi pariatur!
				</p>
				<hr className="my-4" />
				<p>
					Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Laborum eum, a explicabo
                    recusandae doloremque quaerat asperiores ducimus dolor culpa sed!
                    Officia culpa enim, dolorem dignissimos recusandae atque aperiam dolores a?
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg "
						href="#"
						role="button d-inline-flex p-2 bd-highlight">
						Learn more
					</a>
				</p>
			</div>
		</div>
	);
};
export default JumboTron;