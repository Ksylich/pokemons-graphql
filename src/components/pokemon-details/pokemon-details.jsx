import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import './movie-details.css';

import { DecktopNav, DecktopMovieInformation } from '../movie-details-desktop';
import { MobNav, MobMovieInformation } from '../movie-details-mb';
import NoPoster from '../../assets/icons/NoPoster.jpg';


class MovieDetails extends Component {
  
  addToFavorites = () => {
   
  };

  render() {
    const {
      movie, history, isFavorite, onHandleNext,
    } = this.props;
    const style = classNames({ hidden: !isFavorite });
    const poster = movie.posterPath || NoPoster;
    const sectionStyle = {
      backgroundImage: `url(${poster})`,
    };

    return (
      <div className="wrapper">
        <div className="section" style={sectionStyle} />
        <div className="content">
          <MobNav onHandleBack={history.goBack} onHandleNext={onHandleNext} />
          <MobMovieInformation
            movie={movie}
            btnStyle={style}
            addToFavorites={this.addToFavorites}
          />
          <DecktopNav onHandleBack={history.goBack} onHandleNext={onHandleNext} />
          <DecktopMovieInformation
            movie={movie}
            btnStyle={style}
            addToFavorites={this.addToFavorites}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(
    connect(
      null,
      mapDispatchToProps,
    )(MovieDetails),
  );