import React from 'react';
import { Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Note extends React.Component {

  render() {

    return (

        // start feed
        <Feed.Event >

          <Feed.Content>
            <Feed.Date>{this.props.note.owner}:</Feed.Date>
            <Feed.Summary>
              <Feed.Date content={this.props.note.createdAt.toLocaleDateString('en-US')} />
            </Feed.Summary>
          </Feed.Content>

          <Feed.Content>
            <Feed.Summary>
              {this.props.note.note}
            </Feed.Summary>

          </Feed.Content>
        </Feed.Event>

    );
  }
}

/** Require a document to be passed to this component. */
Note.propTypes = {
  
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Note);
