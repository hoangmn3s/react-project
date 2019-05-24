import React, { Component } from 'react';

class News extends Component {
  render() {
    return (
      <section id="news">
        <div className="home">
          <div className="home_inner">
            {/* Image artist: https://unsplash.com/@yoannboyer */}
            <div className="parallax_background parallax-window" data-parallax="scroll" data-image-src="/assets/images/blog.jpg" data-speed="0.8" />
            <div className="home_container">
              <div className="home_content text-center">
                <div className="home_subtitle">Just us</div>
                <div className="home_title">The Blog</div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog */}
        <div className="blog">
          <div className="container">
            <div className="row">
              {/* Blog Posts */}
              <div className="col-lg-9">
                <div className="blog_posts">
                  {/* Blog Post */}
                  <div className="blog_post">
                    <div className="blog_post_date d-flex flex-column align-items-center justify-content-center">
                      <div>July</div>
                      <div>26</div>
                      <div>2018</div>
                    </div>
                    <div className="blog_post_image"><img src="/assets/images/blog_1.jpg" alt="https://unsplash.com/@stevenerixon" /></div>
                    <div className="blog_post_title"><h2><a href="/#">How to get the best playlist</a></h2></div>
                    <div className="blog_post_info">
                      <ul className="d-flex flex-row align-items-start justify-content-start">
                        <li>by <a href="/#">Admin</a></li>
                        <li><a href="/#">2 Comments</a></li>
                      </ul>
                    </div>
                    <div className="blog_post_text">
                      <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Nullam volutpat dui sem, ac congue purus luctus nec. Curabitur luctus luctus erat, sit amet facilisis quam congue quis. Quisque ornare luctus erat id dignissim. Nullam ac nunc quis ex porttitor luctus.</p>
                    </div>
                  </div>
                  {/* Blog Post */}
                  <div className="blog_post blog_post_audio">
                    <div className="blog_post_date d-flex flex-column align-items-center justify-content-center">
                      <div>July</div>
                      <div>26</div>
                      <div>2018</div>
                    </div>
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
                    <div className="blog_post_title"><h2><a href="/#">Our song of the month</a></h2></div>
                    <div className="blog_post_info">
                      <ul className="d-flex flex-row align-items-start justify-content-start">
                        <li>by <a href="/#">Admin</a></li>
                        <li><a href="/#">2 Comments</a></li>
                      </ul>
                    </div>
                    <div className="blog_post_text">
                      <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Nullam volutpat dui sem, ac congue purus luctus nec. Curabitur luctus luctus erat, sit amet facilisis quam congue quis. Quisque ornare luctus erat id dignissim. Nullam ac nunc quis ex porttitor luctus.</p>
                    </div>
                  </div>
                  {/* Blog Post */}
                  <div className="blog_post">
                    <div className="blog_post_date d-flex flex-column align-items-center justify-content-center">
                      <div>July</div>
                      <div>26</div>
                      <div>2018</div>
                    </div>
                    <div className="blog_post_image"><img src="/assets/images/blog_2.jpg" alt="https://unsplash.com/@clesulie" /></div>
                    <div className="blog_post_title"><h2><a href="/#">The best sound of 2018</a></h2></div>
                    <div className="blog_post_info">
                      <ul className="d-flex flex-row align-items-start justify-content-start">
                        <li>by <a href="/#">Admin</a></li>
                        <li><a href="/#">2 Comments</a></li>
                      </ul>
                    </div>
                    <div className="blog_post_text">
                      <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui fermentum eros hendrerit, id lobortis leo volutpat. Maecenas sollicitudin est in libero pretium interdum. Nullam volutpat dui sem, ac congue purus luctus nec. Curabitur luctus luctus erat, sit amet facilisis quam congue quis. Quisque ornare luctus erat id dignissim. Nullam ac nunc quis ex porttitor luctus.</p>
                    </div>
                  </div>
                </div>
                <div className="load_more">
                  <div className="button"><a href="/#">Load More</a></div>
                </div>
              </div>
              {/* Sidebar */}
              <div className="col-lg-3">
                <div className="sidebar">
                  <div className="sidebar_section">
                    <div className="sidebar_title">Archive</div>
                    <div className="sidebar_list">
                      <ul>
                        <li><a href="/#">February 2017</a></li>
                        <li><a href="/#">September 2017</a></li>
                        <li><a href="/#">May 2018</a></li>
                        <li><a href="/#">June 2018</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar_section">
                    <div className="sidebar_title">Categories</div>
                    <div className="sidebar_list">
                      <ul>
                        <li><a href="/#">Audio</a></li>
                        <li><a href="/#">News</a></li>
                        <li><a href="/#">Photos</a></li>
                        <li><a href="/#">Releases</a></li>
                        <li><a href="/#">Uncategorized</a></li>
                        <li><a href="/#">Video</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar_section">
                    <div className="sidebar_title">Latest News</div>
                    <div className="latest_news_list">
                      {/* Latest News */}
                      <div className="latest_news d-flex flex-row align-items-start justify-content-start">
                        <div className="latest_news_image"><img src="/assets/images/latest_1.jpg" alt="https://unsplash.com/@dannykekspro" /></div>
                        <div className="latest_news_content">
                          <div className="latest_news_date"><a href="/#">July 26, 2018</a></div>
                          <div className="latest_news_title"><a href="/#">How to get the best playlist</a></div>
                        </div>
                      </div>
                      {/* Latest News */}
                      <div className="latest_news d-flex flex-row align-items-start justify-content-start">
                        <div className="latest_news_image"><img src="/assets/images/latest_2.jpg" alt="https://unsplash.com/@rexcuando" /></div>
                        <div className="latest_news_content">
                          <div className="latest_news_date"><a href="/#">July 26, 2018</a></div>
                          <div className="latest_news_title"><a href="/#">How to get the best playlist</a></div>
                        </div>
                      </div>
                      {/* Latest News */}
                      <div className="latest_news d-flex flex-row align-items-start justify-content-start">
                        <div className="latest_news_image"><img src="/assets/images/latest_3.jpg" alt="https://unsplash.com/@arstyy" /></div>
                        <div className="latest_news_content">
                          <div className="latest_news_date"><a href="/#">July 26, 2018</a></div>
                          <div className="latest_news_title"><a href="/#">How to get the best playlist</a></div>
                        </div>
                      </div>
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

export default News;
