import React from 'react';
import autobind from 'class-autobind';
import { withStyles } from '@material-ui/core/styles';
import Container from '../Container';
import Header from '../Header';
import styles from './styles';
//responds should come from BE, temporary solution
import { offlineWelcome, onlineWelcome } from './mock';
import Message from '../Message';
import InputForm from './InputForm';

let talkingMessages = [];

class Index extends React.Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({behavior: 'smooth'});
  };

  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      input: '',
      submitted: false,
      userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
      },
    };
  }

  handleInputChange(event) {
    this.setState({input: event.target.value});
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  addMessage(event, text) {
    if (this.state.input.length > 2) {
      talkingMessages.push(<Message answer>{this.state.input}</Message>);
      this.setState({input: ''});
    }
    if (text) {
      talkingMessages.push(<Message answer>{text}</Message>);
      this.setState({input: ''});
    }
  }

  validateInput() {
    const {...userInfo} = this.state.userInfo;
    return (
      userInfo.firstName !== '' &&
      userInfo.lastName !== '' &&
      userInfo.email !== '' &&
      userInfo.phone !== ''
    );
  }

  handleChange(propertyName, event) {
    const contact = this.state.userInfo;
    contact[propertyName] = event.target.value;
    this.setState({userInfo: contact});
  }

  handleClick(event) {
    if (this.validateInput()) {
      this.setState({submitted: true})
    }
  }

  render() {
    const {classes, online} = this.props;
    const {...userInfo} = this.state.userInfo;
    const {input, submitted} = this.state;

    const currentWelcome = online ? onlineWelcome : offlineWelcome;


    return (
      <div className={'chat-form'}>
        <Header online={this.props.online} collapse={this.props.collapse} hide={false}/>
        <Container>

          {/*temporary solution for mocking data, which should come from BE side*/}
          {currentWelcome(
            userInfo,
            input,
            classes,
            online,
            submitted,
            this.handleClick,
            this.handleChange,
            this.addMessage
          )
            .map(i => i)}

          {talkingMessages.map(i => i)}
          
          {/*anchor for scrolling*/}
          <div style={{float: 'left', clear: 'both'}}
               ref={(el) => {
                 this.messagesEnd = el;
               }}>
          </div>

        </Container>

        <InputForm
          input={this.state.input}
          addMessage={this.addMessage}
          classes={classes}
          onChange={this.handleInputChange}/>

      </div>
    );
  }
}

export default withStyles(styles)(Index);
