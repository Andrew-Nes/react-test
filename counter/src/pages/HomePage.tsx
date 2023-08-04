import React from 'react'
import Counter from '../components/counter/counter'
import Timer from '../components/timer/timer'

const HomePage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '2em' }}>Click buttons to count</h1>
            <Counter></Counter>
            <h2 style={{ fontSize: '2em' }}>Timer</h2>
            <Timer></Timer>
        </div>
    )
}

export default HomePage
