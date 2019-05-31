import React, { Component } from 'react';

class SingerPicker extends Component {

   selectSinger(singer){
      this.props.getActiveSinger(singer);
    }

  render() {
    var singerImg = this.props.singerList.map((singer,index) => {
      return (
        <div className="col-lg-2 col-md-3 col-sm-3 col-3" key={index}>
          <img 
            src={"/assets/images/" + singer.image} 
            alt="single-img" 
            onClick={ () => this.selectSinger(singer) }
            />
        </div>
      )
    })
   
    return (
       <div className="row singer-list">
          {<div className="col-lg-2 col-md-2 col-sm-0 col-0"></div>}
          { singerImg }
          {<div className="col-lg-2 col-md-2 col-sm-0 col-0"></div>}
        </div>
    )
  }
}

export default SingerPicker;
