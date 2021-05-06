// import React, { Component } from 'react';
// import axios from '../../../Axios'
// import Post from '../../../components/Post/Post'
// import './Posts.css'
// import {Link,Route} from 'react-router-dom'
// import FullPost from '../FullPost/FullPost'


// class Posts extends Component {
//     state = {
//         posts: [],
//         error:false
//     }


//     componentDidMount = () => {
//         console.log(this.props)
//         axios.get("/posts")
//             .then((response) => {
//                 this.setState({
//                     posts: response.data.slice(0, 4).map((post) => {
//                         return (
//                             {
//                                 ...post,
//                                 author: "junaid"
//                             }
//                         )
//                     })
//                 })

//             })
//             .catch((error) => {
//                 this.setState({ error: true })
//             })
//     }


//     postSelectedHandler = (id) => {

//     //    this.props.history.push({pathname:'/' + id})    //both approches are good this is an alternative for cod line no 53 Link way
//        this.props.history.push('/' + id)   //this is similar to above
//     }

//     render() {

//         let posts = "Some thing Wrong"

//         if (!this.state.error) {

//             posts = this.state.posts.map(post => {
                   
//                 //we can also do like thi by linking component to specified path
//                 return (
//                 // <Link to={'/'+ post.id} key={post.id}>   
                     
                    
//                     <Post
//                         key={post.id}
//                         title={post.title}
//                         author={post.author}
//                         clicked={() => this.postSelectedHandler(post.id)}
//                     />
                
//                 // </Link>
//                 )
//             })

//         }


        
//         return(
//            <div>
//               <section className="Posts">
//                {posts}
             
//                </section>
                  
//               <Route path='/:id' exact component={FullPost} />
//            </div>


            
//         )


//     }

// }

// export default Posts;




import React, { Component } from 'react';
import axios from '../../../Axios'
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        console.log( this.props );
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice( 0, 4 );
                const updatedPosts = posts.map( post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                } );
                this.setState( { posts: updatedPosts } );
                // console.log( response );
            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }

    postSelectedHandler = ( id ) => {
        // this.props.history.push({pathname: '/posts/' + id});
        this.props.history.push( this.props.match.url + id );
    }

    render () {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
        if ( !this.state.error ) {
            posts = this.state.posts.map( post => {
                return (
                    // <Link to={'/posts/' + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler( post.id )} />
                    // </Link>
                );
            } );
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + ':id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;