import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './HeaderForm.module.css'

const HeaderForm = () => {
    const [category, setCategory] = useState("")
    const [id, setId] = useState("")
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/${category}/${id}`)
    }

    return (
        <div className={styles.forma}>

            <div class="d-flex">
                <form onSubmit={handleSubmit} className="col-6 mx-auto">
                    <h2 className={styles.title}>STAR WARS API</h2>
                    <p>Search for:</p>
                    <select className="form-select" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option hidden>Select</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="films">Films</option>
                    </select>
                    <div className="input-group mt-3">
                        <span className="input-group-text ">Id</span>

                        <input type="text" name="id" value={id} onChange={e => setId(e.target.value)} />
                        <button className="btn btn-dark text-light">Explore</button>
                    </div>
                </form >
            </div >
        </div>
    )
}

export default HeaderForm