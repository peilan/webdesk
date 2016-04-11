import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.getPhotos(+e.target.textContent);
  }

  render() {
    const { year, photos, fetching } = this.props;

    return (
      <div>
        <div>
          <button onClick={this.onYearBtnClick.bind(this)}>2016</button>
          <button onClick={this.onYearBtnClick.bind(this)}>2015</button>
          <button onClick={this.onYearBtnClick.bind(this)}>2014</button>
        </div>
        <h3>{year}</h3>
        {
          fetching
            ? <div>Загрузка...</div>
            : <div>У тебя { photos.length } фоток.</div>
        }
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired
}
