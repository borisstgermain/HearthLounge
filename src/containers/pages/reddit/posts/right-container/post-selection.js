import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import Loader from '../../../../../components/loader';
import {wrapDate} from '../../../../../utils/wrap-date';
import {checkIfStickied, checkIfBlizzardPost, stripDomains, checkTopbarIconFilters, checkDomain} from '../../../../../utils/reddit/posts';
import Icon from "../../../../../components/icon";

const PostSelection = ({location, posts, handlePostClick}) => {

  const {all, loading} = posts;

  const mapPosts = () =>{
      return all.map(post => (
          <tr id={post.id}
              className={`${checkIfStickied(post)} ${checkIfBlizzardPost(post)} ${stripDomains(post)} ${checkTopbarIconFilters(location, post)}`}
              key={post.id}
              onClick={() => handlePostClick(post.id)}>
            <td className="upvotes"><Link to={checkDomain(post)}><span>{post.ups}</span></Link></td>
            <td className="domain"><Link to={checkDomain(post)}>{<Icon type="reddit" domain={post.domain} linkFlairText={post.link_flair_text}/>}</Link></td>
            <td className="comments"><Link to={checkDomain(post)}><span>{post.num_comments}</span></Link></td>
            <td className="title"><Link to={checkDomain(post)}>{post.title.replace('&amp;', '&').replace('&gt;', '>')}</Link></td>
            <td className="created"><Link to={checkDomain(post)}>{wrapDate(post.created, post.edited)}</Link></td>
          </tr>
      ))
  };

  return (
      <div className="content scrollable" style={(loading) ? {overflow: "hidden"} : {overflow: "inherit"}}>
          <div className="table-scroll">
            <table>
              <thead>
              <tr>
                <th className="upvotes">Upvotes</th>
                <th className="domain">Domain</th>
                <th className="comments">Comments</th>
                <th className="title"><div>Title</div></th>
                <th className="created"><div>Created</div></th>
              </tr>
              </thead>
              {
                loading
                  ? <Loader />
                  : <tbody>
                      {mapPosts()}
                    </tbody>
              }
            </table>
          </div>
      </div>
  )
};

export default PostSelection;

PostSelection.propTypes = {
  handleRedditPostClick: PropTypes.func,
  posts: PropTypes.shape({
    all: PropTypes.array,
    loading: PropTypes.bool
  })
};