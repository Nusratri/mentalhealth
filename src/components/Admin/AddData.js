import React from 'react'
import therapistData from '../../mockData/therapistData';
import storyData from '../../mockData/storyData';
import blogData from '../../mockData/blogData'
import session from '../../mockData/eventData'
function AddData() {
    const addHandle =() =>{fetch('https://guarded-inlet-22236.herokuapp.com/therapistLoad',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(therapistData)

    })
}
const addStory =() =>{fetch('https://guarded-inlet-22236.herokuapp.com/storyLoad',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(storyData)

    })
}
const addEvent =() =>{fetch('https://guarded-inlet-22236.herokuapp.com/sessionLoad',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(session)

    })
}
const addBlog =() =>{fetch('https://guarded-inlet-22236.herokuapp.com/blogLoad',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(blogData)

    })
}


    return (
        <div>
            <button onClick= {addHandle}>add</button>
            <button onClick= {addStory}>add</button>
            <button onClick= {addBlog}>add</button>
            <button onClick= {addEvent}>add</button>
    

        </div>
    );
};

export default AddData;
