import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Planet.module.css'

const Planet = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(resp => {
                console.log(resp.data)
                setPlanet(resp.data)
            })
            .catch(err => console.log(err))
    }, [id])
    return (
        <>
            {planet ?
            <div className={styles.data}>
                <table className="table table-striped border-top">
                    <thead>
                        <tr>
                            <th scope="col">PLANET</th>
                            <th scope="col">{planet.name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Rotation Period:</th>
                            <td>{planet.rotation_period} h</td>
                        </tr>
                        <tr>
                            <th scope="row">Orbital Period:</th>
                            <td>{planet.orbital_period} years</td>
                        </tr>
                        <tr>
                            <th scope="row">Gravity</th>
                            <td>{planet.gravity}</td>
                        </tr>
                        <tr>
                            <th scope="row">Terrain</th>
                            <td>{planet.terrain}</td>
                        </tr>
                        <tr>
                            <th scope="row">Climate</th>
                            <td>{planet.climate}</td>
                        </tr>
                        <tr>
                            <th scope="row">Surface Water</th>
                            <td>{planet.surface_water}</td>
                        </tr>
                        <tr>
                            <th scope="row">Population</th>
                            <td>{planet.population}</td>
                        </tr>
                        <tr>
                            <th scope="row">Diameter</th>
                            <td>{planet.diameter}</td>
                        </tr>
                    </tbody>
                </table>
                </div> :
                <h4>Mission Failed: We looked through out the whole galaxy and this subject was not found.</h4>
            }
        </>
    )
}

export default Planet;

