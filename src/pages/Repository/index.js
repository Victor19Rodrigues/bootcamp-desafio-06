import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {WebView} from 'react-native-webview';

import {Loading} from './styles';

export default class Repository extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('repository').full_name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    loading: true,
  };

  hideSpinner() {
    this.setState({loading: false});
  }

  render() {
    const {navigation} = this.props;
    const {loading} = this.state;

    const uri = navigation.getParam('repository').html_url;

    return (
      <>
        <WebView
          onLoad={() => this.hideSpinner()}
          source={{uri}}
          style={{flex: 1}}
        />
        {loading && <Loading />}
      </>
    );
  }
}
