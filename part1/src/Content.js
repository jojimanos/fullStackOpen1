import Part from "./Part.js"

const Content = (props) => {
	return (
		<>
			{props.parts.map(part => { return <Part part={part.name} exercise={part.exercise} /> })}
		</>
	)
}

export default Content
