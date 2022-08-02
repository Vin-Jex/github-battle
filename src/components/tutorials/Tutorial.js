import React, {Component} from "react";
// import List from "./List";
// import Props from "./Props";
import Proptypes from "./Proptypes";
// import State from "./State";
import IMG1 from '../../asset/img-1.jpg'
import Form from './Controlled Component' 
import Routers from "./Router";

// SEPARATION OF CONCERNS
export default class Tutorial extends Component {
    render() {

        return (
            <div>
                {/* <Props user={this.props.user} /> */}
                {/* <List friends={[
                    {id: 754, name: 'Vincent'},
                    {id: 342, name: 'Jane'},
                    {id: 236, name: 'John'},                    
                    {id: 468, name: 'Steve'},
                    {id: 596, name: 'Mike'},
                ]} />  
                <State />*/}
                <Proptypes 
                    name='John Doe'
                    handle='johndoe'
                    /* img='https//avertars0.githubusercontent.com/u/2933430?v=3&s=460' */
                    img={IMG1}
                    authed={true}
                    style={{
                        width: 300,
                        margin: '0 auto',
                        border: '.2rem solid #000',
                        padding: 10,
                        borderRadius: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                    addFriend={() => alert('Added!')}
                />
                <Form />
                <Routers />
            </div>
        )
    }
}

{/* <Tutorial user={{ name: 'Jane Doe', username: 'janedoe', img: IMG }} /> */}