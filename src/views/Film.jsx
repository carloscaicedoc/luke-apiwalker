import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './Film.module.css'

const Film = () => {
    const { id } = useParams();
    const [film, setFilm] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/films/${id}`)
            .then(resp => {
                console.log(resp.data)
                setFilm(resp.data)
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            {film ?
                <div className={styles.data}>
                    <table className="table table-striped border-top">
                        <thead>
                            <tr>
                                <th scope="col">Film Title</th>
                                <th scope="col">{film.title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Director</th>
                                <td>{film.director}</td>
                            </tr>
                            <tr>
                                <th scope="row">Episode Id</th>
                                <td>{film.episode_id}</td>
                            </tr>
                            <tr>
                                <th scope="row">Release Date</th>
                                <td>{film.release_date}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h6 className="font-monospace fw-bolder ms-2">Opening Crawl:</h6>
                    <p className="font-monospace ms-2">{film.opening_crawl}</p>
                </div>:
                <h4>Film not found in the whole Galaxy.</h4>
            }
        </>
    )
}

export default Film;

