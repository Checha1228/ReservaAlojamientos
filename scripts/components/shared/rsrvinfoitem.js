class RsrvInfoItem extends React.Component {
	render () {
		return (
			<div className="body-card">
				<div className="content-info-item">
					<h2 className="title-name-hotel">Sainte Jeanne Boutique & Spa</h2>
					<p className="text-ubication-hotel"><span>Argentina</span>, Mar del Plata</p>
					<div className="content-subinfo-item">
						<div className="content-info-rooms">
							<h3 className="title-name-info">Habitaciones</h3>
							<p className="text-number-rooms">23</p>
						</div>
						<div className="content-info-price">
						<h3 className="title-name-info">Precio</h3>
						</div>
					</div>
				</div>
				<div className="content-description-item">
					<h3 className="title-name-info">Descripción</h3>
					<p className="text-description-item">
						Sainte Jeanne Hotel Boutique & Spa está ubicado en el corazón de Los Troncos, un barrio residencial y elegante de Mar del Plata. El lujo, el confort y la pasión por los detalles dan personalidad a esta cálida propuesta.
					</p>
				</div>
			</div>
		);
	}
};
