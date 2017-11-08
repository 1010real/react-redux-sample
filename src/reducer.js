const initialState = {
    timeline: [],
    text: ""
};

// actionの内容によりstateの中身を更新する
// state の内容を更新したい場合、 state を更新するのではなく、必ず新たに生成した state を返す

export default function reducer(state = initialState, action) {
    switch(action.type) {

        case 'POST_TWEET':
            return {
                ...state,
                text: "",
                timeline: [action.text, ...state.timeline]
            }

        case 'CHANGE_TEXT':
            return {
                ...state,
                text:action.text
            };

        default:
            return state;
    }
}