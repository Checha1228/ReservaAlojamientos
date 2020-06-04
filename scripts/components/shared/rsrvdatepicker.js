class RsrvDatepicker extends React.Component {
	render () {
		return (
			<div className="content-datepicker">
				<div className="group-form">
					<i className="zwicon-calendar-day"></i>
					<input className="custom-input" type="date" name="" id="startDate"/>
				</div>
				<div className="group-form">
					<i className="zwicon-calendar-week"></i>
					<input className="custom-input" type="date" name="" id="endDate"/>
				</div>
			</div>
		);
	}
};
