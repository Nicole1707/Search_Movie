import React, { Component } from 'react';
import { Tittle } from '../components/tittle';
import { SearchForm } from '../components/SearchForm';
import { MoviesList } from '../components/moviesList';
export class Home extends Component{

    state = { usedSearch:false,results: [] }


  _handleResults = (results) => {
    this.setState({ results, usedSearch:true })
  }
  _renderResults(){
   return  this.state.results.length === 0
          ? <p>Sorry! 😣😪Results not found</p>
          : <MoviesList movies={this.state.results}/>
  }

    render(){
        return(
            <div>
                <Tittle> Search Movies</Tittle>
        <div className="SearchForm-wapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch
        ?this._renderResults()
      :<small> Use the form to search a movie</small>
      }
            </div>
        )
    }
}