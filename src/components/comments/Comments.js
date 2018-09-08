import React, { Component } from 'react'

import Disqus from 'disqus-react'

class Comments extends Component{
  render(){
    const disqusShortname = 'azn-dev';
    const disqusConfig = {
      url: this.props,
      identifier: this.props,
      title: this.props,
  };

  return (
      <div>
          <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
          </Disqus.CommentCount >
          <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </div>
    );
  }
}

export default Comments
