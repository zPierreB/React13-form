import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class FormEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: 0,
          title: '',
          poster: '',
          textarea: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
      const url = 'https://post-a-form.herokuapp.com/api/movies/';
      e.preventDefault();
      axios
        .post(url, this.state)
        .then(res => res.data)
        .then(res => {
          alert(`Employé ajouté avec l'ID ${res.id} !`);
        })
        .catch(e => {
          console.error(e);
        alert(`Erreur lors de l'ajout d'un film : ${e.message}`);
      });
    }

    render() {
      return (
      <div className="FormEmployee">
        <h1>Saisie d'un film</h1>

          <form onSubmit={this.submitForm}>
            <fieldset>
              <legend>Informations</legend>
                <div className="form-data">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="movie's title"
                    onChange={this.onChange}
                    value={this.state.title}
                  />
                </div>

                <div className="form-data">
                  <label htmlFor="poster">Poster</label>
                  <input
                    type="text"
                    id="poster"
                    name="poster"
                    placeholder="Put the link of the poster's pic"
                    onChange={this.onChange}
                    value={this.state.poster}
                  />
                </div>

                <div className="form-data">
                  <label htmlFor="comment">Comments</label>
                  <input
                    type="text"
                    id="comment"
                    name="comment"
                    placeholder="Your opinion about the movie?"
                    onChange={this.onChange}
                    value={this.state.comment}
                  />
                </div>
                <hr />
                <div className="form-data">
                  <input type="submit" value="Envoyer" />
                </div>
              </fieldset>
            </form>
      </div>
    );
  }
}

export default FormEmployee;