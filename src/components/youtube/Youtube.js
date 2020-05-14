import React from 'react';

const Youtube = () => {
  return (
    <div className='ytb-backg'>
      <div className='youtube'>
        <br />
        <a href="https://www.youtube.com"><img src="https://zupimages.net/up/20/19/tvqq.png" alt="YouTube" width="20%"/></a>
        <br/>
        <br/>
        <div class="content">
          <div class="row">
            <div class="col s6">
              <form id="channel-form">
                <div class="input-field">
                  <input type="text" placeholder="Enter Channel Name. . . ." id="channel-input"/>
                  <input type="submit" value="Get Channel's Videos" class="btn-danger"/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <div className="Row" id="video-container">
          <iframe width="80%" height="400vh" src="https://www.youtube.com/embed/2iUnKZ4J7EQ"></iframe>

          <div className="video-list">
                <article>
                  <img src="https://zupimages.net/up/20/19/kt8i.png" alt="" class="thumb"/>
                  <div className="details">
                    <h4>Title</h4>
                    <p>This is a description</p>
                  </div>
                </article>
                <article>
                  <img src="https://zupimages.net/up/20/19/kt8i.png" alt="" class="thumb"/>
                  <div className="details">
                    <h4>Title</h4>
                    <p>This is a description</p>
                  </div>
                </article>
                <article>
                  <img src="https://zupimages.net/up/20/19/kt8i.png" alt="" class="thumb"/>
                  <div className="details">
                    <h4>Title</h4>
                    <p>This is a description</p>
                  </div>
                </article>
                <article>
                  <img src="https://zupimages.net/up/20/19/kt8i.png" alt="" class="thumb"/>
                  <div className="details">
                    <h4>Title</h4>
                    <p>This is a description</p>
                  </div>
                </article>
              </div>
        </div>
      </div>
    </div>
  )
}
export default Youtube;
