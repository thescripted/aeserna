import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

//border-b-2 border-yikyak
const IndexPage = () => {
	return (
		<div className="flex justify-center bg-charcoal ">
			<div className={`bg-charcoal  h-full min-h-screen max-w-7xl w-full`}>
				<div className="mx-10 h-full min-h-screen flex flex-col justify-between">
					<div>
						<Menu />

						<div className="gap-6 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1">
							<img src="/gifs/social.gif" className="rounded  mx-auto" alt="Social Image Generator" />
							<img src="/gifs/companysearch.gif" className="rounded   mx-auto" alt="Company Search" />

							<img src="/gifs/newbalance.gif" className="rounded   mx-auto" alt="New Balance" />

							<img src="/gifs/db-dispersive.gif" className="rounded   mx-auto" alt="New Balance" />

							<img src="/gifs/studentresources.gif" className="rounded   mx-auto" alt="New Balance" />

							<img
								src="/gifs/dispersivetree.gif"
								className="rounded  mx-auto"
								alt="Dispersive Interactive Tree"
							/>
						</div>
					</div>

					<Footer />
				</div>
			</div>
		</div>
	);
};

export default IndexPage;
