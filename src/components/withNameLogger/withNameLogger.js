import React, { Component } from 'react';
import './withNameLogger.css'

const EnhancedComponent = (OriginalComponent) => {
    return class NewComponent extends Component {
      state = {
        isLoading: true,
        data: [],
      };
  
      componentDidMount() {
        this.props.load().then((data) => {
          setTimeout(() => {
            this.setState({
              isLoading: false,
              data,
            });
          }, 2000);
        });
      }
  
      render() {
        return this.state.isLoading ? (
          <div className="loading"></div>
        ) : (
          <OriginalComponent
            posters={this.state.data}
            {...this.props.otherProps}
          />
        );
      }
    };
  };
  
  export default EnhancedComponent;