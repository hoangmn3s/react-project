import React, { Component } from 'react';

class SingerDetail extends Component {

  render() {
 console.log(this.props.activeSinger.name);
    return (

      <div className="row">
              <div className="col-lg-5">
                <div className="single_info">
                  <div className="single_image"><img src={"/assets/images/" + this.props.activeSinger.image} alt="single-img" /></div>
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
                    <h1>{this.props.activeSinger.name}</h1>
                    <p>{this.props.activeSinger.detail}</p>
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
    )
  }
}

export default SingerDetail;
