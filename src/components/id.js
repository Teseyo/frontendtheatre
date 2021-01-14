import { useState } from 'react'

const Idcom=(() => {
    const [id, setId] = useState(0)

    setId(id + 1)
    console.log(id)
})

export default Idcom;