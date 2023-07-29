const Stats = ({good, neutral, bad}) => {
    
    const total = good + neutral + bad;
    const average = good*1 + bad*(-1)
    const goodPercentage = (good/total)*100

    return (
        <>
            <h1>Statistics</h1>
            <p>Godd {good}</p>
            <p>Neutral {neutral}</p>
            <p>Bad {bad}</p>
            <p>Total {total}</p>
            <p>Average {average}</p>
            <p>Good percentage {goodPercentage} %</p>
        </>
    )
}

export default Stats;