import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxilliary/Auxilliary';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {

        state = {
            error: null
        }

        constructor(props) {       //not using componentDidMount here as we want the interceptors to be set                                  before child component's i.e WrappedComponent's lifecycle methods
          super(props);
          this.reqInterceptor = axios.interceptors.request.use(request => {
              this.setState({error: null});
              return request;
          })
          this.resInterceptor = axios.interceptors.response.use(res => res, error => {
            this.setState({error: error});
          });
        }

        componentWillUnmount() {
            console.log('Will unmount', this.reqInterceptor, this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render() {
            return (
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
           );
        }
      
    }
}

export default withErrorHandler;