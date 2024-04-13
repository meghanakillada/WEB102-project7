import React,{ useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'

const EditPost = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({id: null, name: "", speed: "", color: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    // UPDATE post
    const updatePost = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('Posts')
        .update({ name: post.name, speed: post.speed, color: post.color})
        .eq('id', id);
    
        window.location = "/";
    }

    // UPDATE post
    const deletePost = async (event) => {
        event.preventDefault();
    
        await supabase
        .from('Posts')
        .delete()
        .eq('id', id); 
    
        window.location = "http://localhost:3000/";
    }

    return (
        <div>
            <form>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} /><br />
                <br/>

                <label for="speed">Speed</label><br />
                <input type="number" id="speed" name="speed" value={post.speed} onChange={handleChange} /><br />
                <br/>

                <label for="color">Color</label><br />
                <input type="text" id="color" name="color" value={post.color} onChange={handleChange} /><br />
                <br/>

                <input type="submit" value="Submit" onClick={updatePost} />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost