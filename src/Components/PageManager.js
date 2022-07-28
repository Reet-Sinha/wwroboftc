import {Toolbar,Box} from '@mui/material'
import {Route, Routes} from 'react-router-dom'
import React from 'react'
import Markdown from 'markdown-to-jsx';
import '../CSS/PageManager.css'

const drawerWidth = 240;

const header = ({children,id},...props) =>{
    console.log(id)
    return(<h1 {...props}>{children}&nbsp;<a href={"#"+id}>#</a></h1>)
}

export default function PageManager(){
    const [post, setPost] = React.useState('');
    React.useEffect(()=>{
        import('../Test.md')
            .then(res=>{
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
            })
    },[])

    return(
        <Box
            component='main'
            align="left"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar/>
            <div className="pageContainer">
                <Routes>
                
                    <Route exact path="/" element={<h1>Hi</h1>}/>  
                    <Route exact path='/about' element={
                        <Markdown
                            options={{
                                overrides:{
                                    h1:{
                                        component:header,
                                    }
                                }
                            }}>
                            {post}
                        </Markdown>
                    }/>
                </Routes>
            </div>
        </Box>
    )
}