// import React, { Component } from 'react';
// import Posts from '../Blog/Posts/Posts'
// import NewPost from '../Blog/NewPost/NewPost'
// import {Route,NavLink,Switch} from 'react-router-dom'
// import FullPost from '../Blog/FullPost/FullPost'
// import './Blog.css';




// class Blog extends Component {




//     render () {





//         return (
//             <div className="Blog">

//                  <header>
//                      <nav>
//                          <ul>
//                              <li><NavLink 
//                                   to="/" 
//                                   exact
//                                   activeClassName="my-active"  //bydefault NavLink has class name active we can create our own class and assign like this
//                                   activeStyle={{
//                                       color:'blue'     //we can also make an inline style with activeStyle object of NavLink
//                                   }} 
//                                    >Home
//                                    </NavLink></li>

//                              <li><NavLink to="/new-post">New Post</NavLink></li>

//                          </ul>
//                      </nav>
//                  </header>

//               {/* <Route path="/" render={()=> <h1>Home</h1>} />
//               <Route path="/" exact render={()=> <h1>Home2</h1>} /> */}



//                <Route path="/"   component={Posts} />

//                 <Route path="/new-post" exact  component={NewPost} />







//             </div>
//         );
//     }
// }

// export default Blog;


import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {


    render() {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>
                                Posts
                                </NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/" component={Posts} />
                    {/* <Route render={()=><h1>not founds</h1>} /> */}
                    {/* <Route path="/" component={Posts} /> */}
                    {/* <Redirect from="/" to="/posts"/> */}

                </Switch>
            </div>
        );
    }
}

export default Blog;