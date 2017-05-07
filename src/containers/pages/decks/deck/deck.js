import React, { Component } from 'react';
import Comment from './view/comment';
export class Deck extends Component {
  render() {
    return (
        <div className="container__page container__page--twoSided decks">
          <div className="container__page--inner container__page--left">
            <h3 className="sidebar__header"></h3>
            <div className="sidebar__body"></div>
          </div>
          <div className="container__page--inner container__page--right">
            <div className="topbar"></div>
            <div className="content">
              <div className="container__details">
                <div className="container__details--section container__details--description">
                  <div className="section__header">
                    <div className="line"></div>
                    <h1>Rank 1 Legend Renocancerlock by Joeeeeeeeeeeeee</h1>
                  </div>
                  <div className="section__body">
                    <div className="section__body--background">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                      autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
                      illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                      totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                      autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
                      illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </div>
                  </div>
                </div>
                <div className="container__details--section container__details--comments">
                  <div className="section__header">
                    <div className="line"></div>
                    <h1>104 Komentarzy</h1>
                  </div>
                  <div className="section__body">
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}