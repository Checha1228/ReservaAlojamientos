class RsrvFilters extends React.Component {
	render () {
		return (
			<section className="content-search-hotel">
				<article>
					<h2 className="title-name-country">¿A dónde vamos?</h2>
					<p className="text-date-reservation">Nos vamos el <span>lunes, 28 de Diciembre 2020</span> hasta el <span>jueves, 4 de Marzo 2021</span> </p>
					<div className="content-filters-hotel">
						<form className="filters-hotel" action="">
							<RsrvDatepicker/>
							<RsrvSelect/>
							<RsrvSelect/>
							<RsrvSelect/>
						</form>
					</div>
				</article>
			</section>
		);
	}
};
