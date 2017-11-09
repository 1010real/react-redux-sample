import { store } from './store.js';

export function mapStateToProps(state) {
    return state;
}

export function mapDispatchToProps(dispatch) {
    return {
        postTweet: (text) => {
            dispatch({type:'POST_TWEET', text: text});
        },
        changeText: (text) => {
            dispatch({type:'CHANGE_TEXT', text: text});
        },
        searchHuman: () => {
            let f = function(dispatch) {
                return fetch('http://localhost:3000/test.json').then(
                    response => {
                        response.json().then(
                            json => dispatch({type: 'HUMAN', human: json})
                        ),
                        error => dispatch({type: 'HUMAN_ERROR', reason: error})
                    }
                )
            }

            store.dispatch(f).then( () => { console.log("Done!"); } );
        }

    };
}