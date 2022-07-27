import {Toolbar,Box} from '@mui/material'
import {Route, Routes} from 'react-router-dom'
import React from 'react'
import Markdown from 'markdown-to-jsx';

const drawerWidth = 240;

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
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar/>
          <Routes>  
          <Route exact path = '/wwroboftc/' element={<h1>Hi</h1>}/>
            
          <Route exact path='/wwroboftc/about/' element={<Markdown>{post}</Markdown>}/>
          </Routes>
        </Box>
    )
}