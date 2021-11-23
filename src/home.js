import {useState} from 'react'

const Home = () => {
    const [name, setName] = useState('soumik');
    const n = name;

    const clikButton = () => {

        setName('Roy');
    }
    return (

        <div className="home">

            <h2>Home</h2>
            <h2>{n}</h2>
            <h3>my name is {name}</h3>
            <button onClick={clikButton}>click me</button>
            <button>click me again</button>
        </div>
    );
}

export default Home;