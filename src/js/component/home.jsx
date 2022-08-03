import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
import image from "../../img/rigo-baby.jpg";
import Card from "./CardComponent.jsx";
import JumboTron from "./jumbo.jsx";
import NavBar from "./Nav.jsx";
import Footer from "./footer.jsx"

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<JumboTron />
			<div className="container-fluid mt-5">
				<div className="row">
					<div className="col">
						<Card
							Tittle="Card Tittle"
							Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec tortor enim. Suspendisse in rhoncus elit. Ut quam sapien, vestibulum ut ornare sed, congue ut risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula vitae tortor et condimentum. Phasellus feugiat ligula ut ligula imperdiet, sit amet vestibulum augue semper. Vivamus orci sapien, mattis sit amet mollis in, faucibus posuere eros. Integer eu convallis tortor. Maecenas dignissim tellus erat, vel rhoncus orci lacinia iaculis."
							Button="Find out more!"
							Image={image}
						/>
					</div>
					<div className="col">
						<Card
							Tittle="Card Tittle"
							Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec tortor enim. Suspendisse in rhoncus elit. Ut quam sapien, vestibulum ut ornare sed, congue ut risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula vitae tortor et condimentum. Phasellus feugiat ligula ut ligula imperdiet, sit amet vestibulum augue semper. Vivamus orci sapien, mattis sit amet mollis in, faucibus posuere eros. Integer eu convallis tortor. Maecenas dignissim tellus erat, vel rhoncus orci lacinia iaculis."
							Button="Find out more!"
							Image={image}
						/>
					</div>
					<div className="col">
						<Card
							Tittle="Card Tittle"
							Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec tortor enim. Suspendisse in rhoncus elit. Ut quam sapien, vestibulum ut ornare sed, congue ut risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula vitae tortor et condimentum. Phasellus feugiat ligula ut ligula imperdiet, sit amet vestibulum augue semper. Vivamus orci sapien, mattis sit amet mollis in, faucibus posuere eros. Integer eu convallis tortor. Maecenas dignissim tellus erat, vel rhoncus orci lacinia iaculis."
							Button="Find out more!"
							Image={image}
						/>
					</div>
					<div className="col">
						<Card
							Tittle="Card Tittle"
							Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec tortor enim. Suspendisse in rhoncus elit. Ut quam sapien, vestibulum ut ornare sed, congue ut risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula vitae tortor et condimentum. Phasellus feugiat ligula ut ligula imperdiet, sit amet vestibulum augue semper. Vivamus orci sapien, mattis sit amet mollis in, faucibus posuere eros. Integer eu convallis tortor. Maecenas dignissim tellus erat, vel rhoncus orci lacinia iaculis."
							Button="Find out more!"
							Image={image}
						/>
					</div>
				</div>
			</div>
			<Footer/>
		</>
	);
	}


export default Home;