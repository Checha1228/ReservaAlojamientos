class RsrvCard extends React.Component {
	render () {
		return (
			<div className="card-item-result">
				<div className="header-card">
					<figure className="content-gallery-item">
						<img className="img-gallery-item" src="../../../assets/images/alto-atacama.jpg" alt=""/>
					</figure>
				</div>
				<RsrvInfoItem/>
				<div className="footer-card">
					<RsrvButton/>
				</div>
			</div>
		);
	}
};
