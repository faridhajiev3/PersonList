import React, { useState } from 'react'
import { people } from './List'

export default function Listitem() {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState(people)
    const [fire, setFire] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [every, setEvery] = useState("")

    function sortAge() {
        setData([...data].sort((a, b) => (a.age - b.age)))
    }
    function sortSalary() {
        setData([...data].sort((a, b) => a.salary - b.salary))
    }

    function everySalary() {
        setEvery(data.reduce((acc, rec) => acc + rec.salary, 0))
    }

    function handleSearch(e) {
        setSearchTerm(e.target.value)
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setData(filteredData)
    }
    function handleDelete(id) {
        const sil = data.filter((item, index) => index !== id)
        setData(sil)
    }

    function handleFire(id) {
        const firedPerson = [...data].find((item, index) => index === id);

        setFire((prev) =>
            prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
        );
    }

    const [name, setName] = useState("")
    function handleWordChange(e) {
        setName(e.target.value)
    }

    const [age, setAge] = useState("")
    function handleNumChange(e) {
        setAge(e.target.value)
    }

    const [salary, setSalary] = useState("")
    function handleSalaryChange(e) {
        setSalary(Number(e.target.value))
    }

    function handleClick() {
        setData([...data, { name, age, salary }])
        setName("")
        setAge("")
        setSalary("")
    }
    function sad() {
        setOpen(!open)
    }

    function handleEdit(id) {
        const edit = [...data].find((item, index) => index == id)
        console.log(edit)
        setName(edit.name)
        setAge(edit.age)
        setSalary(edit.salary)
    }
    return (
        <div className='port'>
            <div>
                <input value={searchTerm} onChange={handleSearch} type="text" />
                <button onClick={sad}>add</button>
                <button onClick={sortSalary}>Sort by salary</button>
                <button onClick={sortAge}>Sort by age</button>
                <button onClick={everySalary}>Avarage salary</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Salary</th>
                        <th scope='col'>Fire</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td
                                    style={{
                                        color: fire.includes(index) ? 'red' : 'black'
                                    }}
                                >
                                    {item.name}
                                </td>
                                <td
                                    style={{
                                        color: fire.includes(index) ? 'red' : 'black'
                                    }}
                                >
                                    {item.age}
                                </td>
                                <td
                                    style={{
                                        color: fire.includes(index) ? 'red' : 'black' // Change salary color
                                    }}
                                >
                                    {item.salary}
                                </td>
                                <td>
                                    <button onClick={() => handleFire(index)}>Fire</button>
                                </td>
                                <td><button onClick={() => handleEdit(index)}>Edit</button></td>
                                <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className={`form ${open ? "sunny" : null} `}>
                <input onChange={handleWordChange} value={name} type="text" />
                <input onChange={handleNumChange} value={age} type="number" />
                <input onChange={handleSalaryChange} value={salary} type="number" />
                <button onClick={handleClick} >confirm</button>
                <button onClick={sad}>cancel</button>
            </div>
            <div>
                <h1>{every}</h1>
            </div>
        </div>
    )
}
