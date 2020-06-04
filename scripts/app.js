function App() {
	return (
		<div>
			<RsrvHeader/>
			<RsrvFilters/>
			<article>
				<RsrvCard name="chechi"/>
				<RsrvCard name="chechi"/>
				<RsrvCard name="chechi"/>
				<RsrvCard name="chechi"/>
			</article>
		</div>
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);