import React, { Component } from "react";
import { ButtonBackToHome } from "../components/buttonBackToHome";
import PropTypes from 'prop-types'


const API_KEY = '29e89ffd'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })

    }
    state = {
        movie: {}

    }
    _fetchMovie({ id }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                // const {Search = [], totalResults = "0"} = results
                console.log({ movie })
                this.setState({ movie })
            })

    }
    _goBack() {
        window.history.back()
    }
    componentDidMount() {
        const { id } = this.props.match.params
        this._fetchMovie({ id })
    }
    render() {
        const { Title, Poster, Actors, Metascore, Plot } =
            this.state.movie
        return (
            
            
            <div className="card-container">
                <ButtonBackToHome/>
                <br/>
                <div className="card-image">
                   
                        <center>
                        <img className="image "
                            alt={Title}
                            src={Poster} />
                            </center>
                   
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{Actors}</p>
                            <p className="subtitle is-6">Puntuacion: {Metascore}</p>
                        </div>
                    </div>

                    <div className="content">
                        <p className="subtitle is-6">{Plot}</p>
                    </div>
                </div>
            </div>
        )
    }
}