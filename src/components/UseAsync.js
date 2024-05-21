import React, { useCallback, useEffect, useState } from 'react'

const UseAsync = (asyncFunction, immediate = true) => {
    const [status, setStatus] = useState('idle')
    const [value, setValue] = useState(null)
    const [error, setError] = useState(null)

    const execute = useCallback(() => {
        setStatus('Pending');
        setValue(null);
        setError(null)
        return asyncFunction()
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setValue(data)
                setStatus('Sukses')
            })
            .catch((error) => {
                setError(error)
                setStatus('Error')
            })
    }, [asyncFunction])
    useEffect(() => {
        if (immediate) {
            execute()
        }
    }, [execute, immediate])
  return {execute, status, value, error}
}

export default UseAsync