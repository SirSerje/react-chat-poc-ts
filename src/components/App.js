import * as React from 'react';
import autobind from 'class-autobind';
import InteractButton from './InteractButton';
import '../styles/index.css';
import FormChat from './FormChat';
import { ConfigProvider } from 'react-avatar';

class App extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      online: true,
      collapsed: true,
    };
  }

  collapse() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  render() {
    return (
      <React.Fragment>
        <ConfigProvider colors={['#3F51B5', '#3F51B5', '#3F51B5']}>
          {this.state.collapsed ? (
            <InteractButton online={this.state.online} onClick={this.collapse} />
          ) : (
            <div className={'app-container'}>
              <FormChat online={this.state.online} collapse={this.collapse} />
            </div>
          )}
        </ConfigProvider>
      </React.Fragment>
    );
  }
}

export default App;
