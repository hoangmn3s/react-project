import React, { Component } from 'react';

class SingerPicker extends Component {
  constructor(props){
    super(props);
    this.state = {
      singerList :[
        {
            "id" : 1,
            "name" : "Trịnh Trung Kiên",
            "date_of_birth" : "1995",
            "contact" : "trungkien@gmail.com",
            "detail" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "image" : "single_image.jpg",
            "cover" : "single.jpg",
            "songlist" : [
              'TBEKB','CG','TK21B'
            ]
          },{
            "id" : 2,
            "name" : "Đen Vâu",
            "date_of_birth" : "198X",
            "contact" : "mytam@gmail.com",
            "detail" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "image" : "den_vau.png",
            "songlist" : [
              'TBEKB','CG','TK21B'
            ]
          },{
            "id" : 3,
            "name" : "Dat Maniac",
            "date_of_birth" : "19XX",
            "contact" : "dathazaclique@gmail.com",
            "detail" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "image" : "datmaniac.jpg",
            "songlist" : [
              'TBEKB','CG','TK21B'
            ]
          },{
            "id" : 4,
            "name" : "B Ray",
            "date_of_birth" : "1992",
            "contact" : "brayniac@gmail.com",
            "detail" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "image" : "disc_3.jpg",
            "cover" : "datmaniac.jpg",
            "songlist" : [
              'TBEKB','CG','TK21B'
            ]
          }
      ]
    }
  }
   selectSinger(singer){
      this.props.getActiveSinger(singer);
    }

  render() {
    var singerImg = this.state.singerList.map((singer,index) => {
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
