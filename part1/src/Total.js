const Total = (props) => {

	let sum = 0

	function total() {
		props.parts.forEach(part => {
			sum = sum + part.exercises
		})
	}

	total()

	return (
		<>
			<p>Number of exercises {sum}</p>
		</>
	)
}

export default Total;
