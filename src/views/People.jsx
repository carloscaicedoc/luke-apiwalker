import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './People.module.css'

const People = () =>{
    const { id } = useParams();
    const [people, setPeople] = useState();

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(resp =>{
                console.log(resp.data)
                setPeople(resp.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            {people ?
            <div className={styles.tabla}>
                <table className="table table-striped border-top">
                    <thead>
                        <tr>
                            <th scope="col">CHARACTER</th>
                            <th scope="col">{people.name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Birth Year:</th>
                            <td>{people.birth_year}</td>
                        </tr>
                        <tr>
                            <th scope="row">Gender:</th>
                            <td>{people.gender}</td>
                        </tr>
                        <tr>
                            <th scope="row">Eye Color:</th>
                            <td>{people.eye_color}</td>
                        </tr>
                        <tr>
                            <th scope="row">Hair Color</th>
                            <td>{people.hair_color}</td>
                        </tr>
                        <tr>
                            <th scope="row">Height</th>
                            <td>{people.height}</td>
                        </tr>
                        <tr>
                            <th scope="row">Planet</th>
                            <td><a href="#">home-world</a></td>
                        </tr>
                        
                    </tbody>
                </table>
                </div> :
                <h4>Mission Failed: We looked through out the whole galaxy and this subject was not found.</h4>
            }
        </>
    )   
}

export default People;