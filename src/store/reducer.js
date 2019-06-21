const initialState = {
    postDetails: {
        title: "This is the default title",
        Type: "",
        content: [
            "Curabitur volutpat bibendum molestie. Vestibulum ornare gravida semper. Aliquam a dui suscipit, fringilla metus id, maximus leo. Vivamus sapien arcu, mollis eu pharetra vitae, condimentum in orci. Integer eu sodales dolor. Maecenas elementum arcu eu convallis rhoncus. Donec tortor sapien, euismod a faucibus eget, porttitor quis libero.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu pharetra pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus. Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. Donec ac purus id sapien condimentum feugiat.",
        ],
        imgURL: "images/blog-list-01.jpg",
        tages: ["Books", "Testing", "Technology"],
        author: "Shivraj Rana",
        date: '20/07/1997'
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_POST_DETAILS": {
            state = {
                ...state,
                postDetails: action.payload
            }
        }
    }
    return state
}

export default reducer;