
import React from 'react';

const withLocalStorage = (WrappedComponent) => {
  class HOC extends React.Component {
    state = {
      localStorageAvailable: true,
    };

    componentDidMount() {
      this.checkLocalStorageExists();
    }

    checkLocalStorageExists() {
      const testKey = 'test';

      try {
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        this.setState({ localStorageAvailable: true });
      } catch(e) {
        this.setState({ localStorageAvailable: false });
      }
    }

    load = (key) => {
      if (this.state.localStorageAvailable) {
        return localStorage.getItem(key);
      }

      return null;
    }

    save = (key, data) => {
      if (this.state.localStorageAvailable) {
        localStorage.setItem(key, data);
      }
    }

    render() {
      return (
        <WrappedComponent
          load={this.load}
          save={this.save}
          {...this.props}
        />
      );
    }
  }

  return HOC;
};

export default withLocalStorage;