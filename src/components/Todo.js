import React from 'react'
import UseAsync from './UseAsync'

const Todo = ({id}) => {

    const myFunction = () => {
        return Promise.resolve(fetch(`https://6469d36d03bb12ac2093611c.mockapi.io/api/v1/todos/${id}`))
    }

    const {execute, status, value, error} = UseAsync(myFunction, false)

  return (
    <>
        { status === "Sukses" && 
        (
            <div>
                <p>Title: {value.title}</p>
                <p>Created At: {value.createdAt}</p>
            </div>
        )
        }
        {status === 'Error' && 
        (
            <div>
                {error}
            </div>
        ) 
        }
        <button onClick={execute}>
           {status !== 'Pending' ? 'Get Detail' : 'Loading' } 
        </button>
    </>
  )
}

export default Todo