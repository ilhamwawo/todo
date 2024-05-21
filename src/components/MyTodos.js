import React from 'react';
import {useState, useEffect} from 'react';
import Todo from './Todo';

const MyTodos = () => {
    const [todos, setTodos]  = useState([]);
    const [loading, setLoading]  = useState(false);
    const [error, setError]  = useState(null)

    useEffect(() => {
        const init = async () => {
            try {
                setLoading(true)
                const response = await fetch('https://6469d36d03bb12ac2093611c.mockapi.io/api/v1/todos')
                const data = await response.json()
                setTodos(data)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        init()
    }, [])

    if (loading) {
        return <div>Loading ....</div>
    }

    if (error) {
        return <div>Error ...</div>
    }

    
  return (
    <div>
        <div>
            <ul>
                 {todos && todos.length && todos.map((todo) => (
                 <li key={todo.id}>
                    Todo ID: {todo.id} - <Todo id={todo.id} />
                 </li>
                 ) )}
            </ul>
        </div>
    </div>
  )
}

export default MyTodos