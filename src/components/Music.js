import React, { Component } from 'react';

class Music extends Component {
  render() {
    return (
      <section id="music">
      <div className="home">
          <div className="home_inner">
            {/* Image artist: https://unsplash.com/@yoannboyer */}
            <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="/assets/images/single.jpg" data-speed="0.8" />
            <div className="home_container">
              <div className="home_content text-center">
                <div className="home_subtitle">Just us</div>
                <div className="home_title">The Single/Album</div>
              </div>
            </div>
          </div>
        </div>
        {/* Single */}
        <div className="single">
          <div className="container">
            <div className="row">
              {/* Single Info */}
              <div className="col-lg-5">
                <div className="single_info">
                  <div className="single_image"><img src="/assets/images/single_image.jpg" alt="single-img" /></div>
                  <div className="single_info_list">
                    <ul>
                      <li><span>Release date: </span>25 August, 2017</li>
                      <li><span>Tags: </span>chill, techno, electronic</li>
                      <li><span>Producers: </span>Michael Smith, Jenna Williams</li>
                      <li><span>No of songs: </span>12</li>
                    </ul>
                  </div>
                  <div className="logo_list d-flex flex-row align-items-center justify-content-start flex-wrap">
                    <div><a href="/#"><img src="/assets/images/logo_1.png" alt="single-img" /></a></div>
                    <div><a href="/#"><img src="/assets/images/logo_2.png" alt="single-img" /></a></div>
                    <div><a href="/#"><img src="/assets/images/logo_3.png" alt="single-img" /></a></div>
                    <div><a href="/#"><img src="/assets/images/logo_4.png" alt="single-img" /></a></div>
                  </div>
                </div>
              </div>
              {/* Single Content */}
              <div className="col-lg-7 single_content_col">
                <div className="single_content">
                  <div className="single_text">
                    <p> In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Nullam volutpat dui sem, ac congue purus luctus nec. Curabitur luctus luctus erat, sit amet facilisis quam congue quis. Quisque ornare luctus erat id dignissim. Nullam ac nunc quis ex porttitor luctus.</p>
                    <p>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feugiat ut.</p>
                    <p>Nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Nullam volutpat dui sem, ac congue purus luctus nec. Curabitur luctus luctus erat, sit amet facilisis quam congue quis. Quisque ornare luctus erat id dignissim. Nullam ac nunc quis ex porttitor luctus.</p>
                  </div>
                  <div className="single_players">
                    {/* Single Player */}
                    <div className="single_player_container d-flex flex-column align-items-start justify-content-center">
                      <div className="single_player">
                        <div id="jplayer_1" className="jp-jplayer" />
                        <div id="jp_container_1" className="jp-audio" role="application" aria-label="media player">
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
                    {/* Single Player */}
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
                    {/* Single Player */}
                    <div className="single_player_container d-flex flex-column align-items-start justify-content-center">
                      <div className="single_player">
                        <div id="jplayer_3" className="jp-jplayer" />
                        <div id="jp_container_3" className="jp-audio" role="application" aria-label="media player">
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
        </div>
        {/* Video */}
        <div className="video">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="video_container">
                  <iframe title="youtube iframe" width={560} height={315} src="https://www.youtube.com/embed/OsKLytDnKGA?rel=0&showinfo=0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Music;
