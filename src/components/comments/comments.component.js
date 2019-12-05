import React, { Component } from 'react';
import withLocalStorage from '../../highOrderComponents/withLocalStorage/withLocalStorage.component';
class Comments extends Component {
  state = {
    inputValue: '',
    comments: [],
  };

  componentDidMount() {
    const { load, postId } = this.props;
    this.setState({
      comments: JSON.parse(load(postId))
    });
  };

  handleChange = (e) => this.setState({inputValue: e.target.value});

  handleSubmit = (e) => {
    const { comments, inputValue } = this.state;
    const { save, postId } = this.props;
    comments.push(inputValue);

    save(postId, JSON.stringify(comments));
    this.setState({
      comments: comments,
      inputValue: '',
    });

    e.preventDefault();
  };

  renderComments = () => this.state.comments.map((comment, index) => (
    <div key={index}>{comment}</div>
  ));

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        Komentarze:
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={(e) => this.handleChange(e)} value={inputValue} />
          <input type="submit" value="Dodaj"/>
        </form>
        <hr/>
        {this.renderComments()}
      </div>
    )
  }
}

export default withLocalStorage(Comments);