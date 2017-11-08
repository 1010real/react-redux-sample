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

    };
}