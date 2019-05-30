import React, { Component } from 'react';
import SingerDetail from './layouts/music/SingerDetail';
import SingerPicker from './layouts/music/SingerPicker';
class Music extends Component {
  
  constructor(props){
    super(props);
    this.state = {
          singer :{
            "id" : 1,
            "name" : "DSK",
            "real_name" : "Trần Đức Minh",
            "date_of_birth" : "23.11.1987",
            "contact" : "trungkien@gmail.com",
            "detail" : "DSK được cho là thần tượng của các thần tượng trong Rap Việt nhờ chất giọng và khả năng viết lyric tuyệt hảo. Anh được khán giả yêu mến qua những bản Rap chất ngầu như: Lớn Rồi, Chưa Bao Giờ, Đôi Bờ, Tự Xử, Thế Hệ Tao,... Cho đến bây giờ anh đã trở thành huyền thoại bất tử trong lòng người hâm mộ với những cống hiến to lớn cho nền Rap Việt Nam.",
            "image" : "dsk.png",
            "cover" : "dsk_cover.jpg",
            "type" : "Diss, Live",
            "songlist" : [
              {
                "id" : 1,
                "name" : "Chưa Bao Giờ",
                "file_name" : "chuabaogio.mp3"
              }, {
                "id" : 2,
                "name" : "Lớn Rồi",
                "file_name" : "lonroi.mp3",
              },{
                "id" : 3,
                "name" : "Biết Rõ Vẫn Khó Đi",
                "file_name" : "bietrovankhodi.mp3"
              }
            ]
          }
        }
    this.setActiveSinger =  this.setActiveSinger.bind(this);
    }
  setActiveSinger(singerObj){
    this.setState({singer : singerObj});
  }
  showCover(fileName){
    // console.log(fileName);
    var coverImg = "/assets/images/" + fileName;
    return {
      backgroundImage: "url(" + coverImg + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
  }

  render() {
    return (
      <section id="music">
      <div className="home">
          <div className="home_inner">

            <div id="music-banner" className="parallax_background parallax-window" style={ this.showCover(this.state.singer.cover) } /*data-image-src={"/assets/images/" + this.state.singer.cover}*/ data-parallax="scroll" data-speed="0.8" />

          </div>
        </div>
        {/* Single */}
        <div className="single">
          <div className="container">
            <SingerPicker getActiveSinger={ this.setActiveSinger } />
            <SingerDetail activeSinger={this.state.singer}/>
          </div>
        </div>
       
      </section>
    )
  }
}

export default Music;
