import React, { Component } from "react";


class RefSample extends Component {

    submitAction = () => {
        console.log("submit action");
        // console.log(this.firstName.value);
    }

    onKeyupHandle = (target, event) => {
        // console.log(event.keyCode);
        // console.log(target);

        if (event.keyCode === 13) {
            switch (target) {
                case 'firstName':
                    this.lastName.focus();
                    break;
                case 'lastName':
                    this.submit.focus();
                    break;
                case 'submit':
                    this.submitAction();
                    break;
                default:
                    this.firstName.focus();
                    break;
            }
        }
    }

    render() {
        return (
            <div className="App">
                <div>
                    <span>First Name:</span>
                    <input type="text" 
                        ref={(input) => {this.firstName = input}}
                        onKeyUp={this.onKeyupHandle.bind(this, "firstName")} />
                </div>
                <div>
                    <span>Last Name:</span>
                    <input type="text"
                        ref={(input) => {this.lastName = input}}
                        onKeyUp={this.onKeyupHandle.bind(this, "lastName")} />
                </div>
                <div>
                    <input type="submit"
                        ref={(input) => {this.submit = input}}
                        value="Submit Form" onClick={this.submitAction}
                        onKeyUp={this.onKeyupHandle(this, "submit")} />
                </div>
            </div>
        )
    }
}

export default RefSample