
function Counter() {


    let [count, setCount] = React.useState(0)

    return (


        <div>
            <h1>{count}</h1>

            <button onClick={() => { setCount(count + 1) }}>click</button>
        </div>
    )
}


function App() {


    return (
        <div className='sad'>
            <h1>hello 1</h1>
            <Counter />
            <h1>hello 1</h1>

        </div>
    )

}


let root = document.getElementById('root')
ReactDOM.createRoot(root).render(<App />)