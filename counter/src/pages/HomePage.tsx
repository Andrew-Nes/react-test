import React from 'react'
import Counter from '../components/counter/counter'
const HomePage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Click buttons to count</h1>
            <Counter></Counter>
        </div>
    )
}

export default HomePage
