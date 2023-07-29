import StatisticLine from "./StatisticLine";

const Stats = ({good, neutral, bad, total, average, goodPercentage}) => {
    

    if (total === 0)
    {return (
        <h2>There are no statistics to display.</h2>
    )} else {
    return (
        <>
            <h1>Statistics</h1>
            <StatisticLine text={"Good"} value={good}/>
            <StatisticLine text={"Neutral"} value={neutral}/>
            <StatisticLine text={"Bad"} value={bad}/>
            <StatisticLine text={"Total Feedback"} value={total}/>
            <StatisticLine text={"Average"} value={average}/>
            <StatisticLine text={"Percentage of Good"} value={goodPercentage}/>
        </>
    )
    }
}

export default Stats;