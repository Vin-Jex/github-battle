import React from 'react'

// Welcome class
class Welcome extends React.Component {
    render() { 
        return (
            <div>
                <h3>Welcome 👋 {this.props.welcome.name} </h3>
            </div>
        );
    }
}

// Avater class
class Avater extends React.Component {
    render() { 
        return (
            <div> 
                <img src={this.props.img.img} alt="Profile" />
            </div>
        );
    }
}

// Label Class
class Label extends React.Component {
    render() { 
        return (
            <div>
                <h1>Name: {this.props.name.name}</h1>
            </div>
        );
    }
}

// ScreeName Class
class ScreenName extends React.Component {
    render() { 
        return (
            <div>
                <h3>Username: {this.props.username.username} </h3>
            </div>
        );
    }
}

export default class Props extends React.Component {
    render() {
        return (
            <div>
                <Welcome welcome={this.props.user} />
                <Avater img={this.props.user} />
                <Label name={this.props.user} />
                <ScreenName username={this.props.user} />
            </div>
        )
        
        // return (
        //     <h2>
        //         {/* Props! Is your name {this.props.first} {this.props.last}? */}
        //         {this.props.header} {this.props.username}
        //         <br />
        //         {this.props.authed === true ? <button>Logout</button> : <button>Login</button>
        //         }
        //     </h2>
        // )

                
        // // More Examples on props
        // return (
        //     //  <Props 
        //     //     name='John Doe'
        //     //     username='johndoe'
        //     //     img='../asset/img-2.jpg'
        //     //     Img1={Img1 }
        //     // />
        //     <Props user={{
        //         name: 'Okereke Vincent',
        //         username: 'okerekevincent0209',
        //         img: '../asset/img-1.jpg'
        //     }} />
        // )

        // Props
        // let first, last;
        // return <Props
        //             first={first = 'Ifeanyi '}
        //             last={last = 'Okereke'}
        //             username={first + last}
        //             authed={!true}
        //             logout={ () => alert('Logged out')}
        //             header={<h1>👋</h1>}
        //         />

        // const name = 'Vincent';
        // return (
        //     <React.Fragment>
        //         <h1>Props, {name}</h1>
        //         <p>Today's date is {new Date().toLocaleDateString()}</p>
        //         <p>What is 2 + 2 ? {2 + 2}</p>
        //     </React.Fragment>
        // ) 
    }
}


 


