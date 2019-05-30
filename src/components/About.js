import React, { Component } from 'react';

class About extends Component {
  
  showCover(fileName){
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
    	<section id="about">
        <div className="home">
          <div className="home_inner">
            <div id="about-banner" style={ this.showCover(this.props.cover) } className="parallax_background parallax-window" data-parallax="scroll" data-speed="0.8" />
            <div className="home_container">
              <div className="home_content text-center">
                <div className="home_subtitle">Just us</div>
                <div className="home_title">Discography</div>
              </div>
            </div>
          </div>
        </div>
        {/* Discs */}
        <div className="discs">
          <div className="container">
            <div className="row discs_row">
              {/* Disc */}
              <div className="col-xl-4 col-md-6">
                <div className="disc">
                  <a href="single.html">
                    <div className="disc_image"><img src="/assets/images/disc_1.jpg" alt="https://unsplash.com/@tanelah" /></div>
                    <div className="disc_container">
                      <div>
                        <div className="disc_content_1">
                          <div className="disc_title">Mixtape</div>
                          <div className="disc_subtitle">Music For the People</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* Disc */}
              <div className="col-xl-4 col-md-6">
                <div className="disc">
                  <a href="single.html">
                    <div className="disc_image"><img src="/assets/images/disc_2.jpg" alt="https://unsplash.com/@kasperrasmussen" /></div>
                    <div className="disc_container">
                      <div>
                        <div className="disc_content_2 d-flex flex-column align-items-center justify-content-center">
                          <div>
                            <div className="disc_title">Mixtape</div>
                            <div className="disc_subtitle">the world is ours</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* Disc */}
              <div className="col-xl-4 col-md-6">
                <div className="disc">
                  <a href="single.html">
                    <div className="disc_image"><img src="/assets/images/disc_3.jpg" alt="https://unsplash.com/@photones11" /></div>
                    <div className="disc_container">
                      <div>
                        <div className="disc_content_3">
                          <div>
                            <div className="disc_title">Mixtape</div>
                            <div className="disc_subtitle">Singles</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* Disc */}
              <div className="col-xl-4 col-md-6">
                <div className="disc">
                  <a href="single.html">
                    <div className="disc_image"><img src="/assets/images/disc_4.jpg" alt="https://unsplash.com/@rexcuando" /></div>
                    <div className="disc_container">
                      <div>
                        <div className="disc_content_4 d-flex flex-column align-items-start justify-content-end">
                          <div className="text-left">
                            <div className="disc_title">Mixtape</div>
                            <div className="disc_subtitle">1983</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* Disc */}
              <div className="col-xl-4 col-md-6">
                <div className="disc">
                  <a href="single.html">
                    <div className="disc_image"><img src="/assets/images/disc_5.jpg" alt="https://unsplash.com/@alicemoore" /></div>
                    <div className="disc_container">
                      <div>
                        <div className="disc_content_5">
                          <div className="disc_title">Mixtape</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* Disc */}
              <div className="col-xl-4 col-md-6">
                <div className="disc">
                  <a href="single.html">
                    <div className="disc_image"><img src="/assets/images/disc_6.jpg" alt="https://unsplash.com/@arstyy" /></div>
                    <div className="disc_container">
                      <div>
                        <div className="disc_content_6">
                          <div className="disc_title">Mixtape</div>
                          <div className="disc_subtitle">Music For the People</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Artist */}
        <div className="artist">
          <div className="parallax_background parallax-window" id="artist-background" data-parallax="scroll" data-speed="0.8" />
          <div className="container">
            <div className="row">
              {/* Artist Content */}
              <div className="col-lg-7 offset-lg-5">
                <div className="artist_content">
                  <div className="section_title_container">
                    <div className="section_subtitle">Events</div>
                    <div className="section_title"><h1>The Artist</h1></div>
                  </div>
                  <div className="artist_text">
                    <p> In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Nullam volutpat dui sem, ac congue purus luctus nec. Curabitur luctus luctus erat, sit amet facilisis quam congue quis. Quisque ornare luctus erat id dignissim. Nullam ac nunc quis ex porttitor luctus.</p>
                    <p>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feugiat ut.</p>
                  </div>
                  <div className="artist_sig"><img src="/assets/images/sig.png" alt="sig" /></div>
                  <div className="single_player_container d-flex flex-column align-items-start justify-content-center">
                    <div className="single_player">
                      <div id="jplayer_2" className="jp-jplayer" />
                      <div id="jp_container_2" className="jp-audio" role="application" aria-label="media player">
                        <div className="jp-type-single">
                          <div className="player_details d-flex flex-row align-items-center justify-content-start">
                            <div className="jp-details">
                              <div>playing</div>
                              <div className="jp-title" aria-label="title">&nbsp;</div>
                            </div>
                            <div className="jp-controls-holder ml-auto">
                              <button className="jp-play" tabIndex={0} />
                            </div>
                          </div>
                          <div className="player_controls">
                            <div className="jp-gui jp-interface d-flex flex-row align-items-center justify-content-start">
                              <div className="jp-controls-holder time_controls d-flex flex-row align-items-center justify-content-start">
                                <div><div className="jp-current-time" role="timer" aria-label="time">&nbsp;</div></div>
                                <div className="jp-progress">
                                  <div className="jp-seek-bar">
                                    <div className="jp-play-bar" />
                                  </div>
                                </div>
                                <div><div className="jp-duration ml-auto" role="timer" aria-label="duration">&nbsp;</div></div>
                              </div>
                              <div className="jp-volume-controls d-flex flex-row align-items-center justify-content-start ml-auto">
                                <button className="jp-mute" tabIndex={0} />
                                <div className="jp-volume-bar">
                                  <div className="jp-volume-bar-value" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="jp-no-solution">
                            <span>Update Required</span>
                            To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank" rel="noopener noreferrer">Flash plugin</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Milestones */}
        <div className="milestones">
          <div className="milestones_container">
            <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="/assets/images/milestones.jpg" data-speed="0.8" />
            <div className="container">
              <div className="row milestones_row">
                {/* Milestone */}
                <div className="col-xl-3 col-md-6 milestone_col">
                  <div className="milestone d-flex flex-row align-items-center justify-content-start">
                    <div className="milestone_icon"><img src="/assets/images/icon_1.svg" alt="https://www.flaticon.com/authors/smashicons" /></div>
                    <div className="milestone_content">
                      <div className="milestone_counter" data-end-value={298} data-sign-after="k">0</div>
                      <div className="milestone_text">Albums sold</div>
                    </div>
                  </div>
                </div>
                {/* Milestone */}
                <div className="col-xl-3 col-md-6 milestone_col">
                  <div className="milestone d-flex flex-row align-items-center justify-content-start">
                    <div className="milestone_icon"><img src="/assets/images/icon_2.svg" alt="https://www.flaticon.com/authors/smashicons" /></div>
                    <div className="milestone_content">
                      <div className="milestone_counter" data-end-value={183}>0</div>
                      <div className="milestone_text">Live Concerts</div>
                    </div>
                  </div>
                </div>
                {/* Milestone */}
                <div className="col-xl-3 col-md-6 milestone_col">
                  <div className="milestone d-flex flex-row align-items-center justify-content-start">
                    <div className="milestone_icon"><img src="/assets/images/icon_3.svg" alt="https://www.flaticon.com/authors/smashicons" /></div>
                    <div className="milestone_content">
                      <div className="milestone_counter" data-end-value={37}>0</div>
                      <div className="milestone_text">Awards won</div>
                    </div>
                  </div>
                </div>
                {/* Milestone */}
                <div className="col-xl-3 col-md-6 milestone_col">
                  <div className="milestone d-flex flex-row align-items-center justify-content-start">
                    <div className="milestone_icon"><img src="/assets/images/icon_4.svg" alt="https://www.flaticon.com/authors/smashicons" /></div>
                    <div className="milestone_content">
                      <div className="milestone_counter" data-end-value={14}>0</div>
                      <div className="milestone_text">New Singles</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About;
