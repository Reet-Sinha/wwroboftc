import {Toolbar,Box} from '@mui/material'
import {Route, Routes} from 'react-router-dom'
import React from 'react'
import Markdown from 'markdown-to-jsx';
import '../CSS/PageManager.css'
import {HashLink} from 'react-router-hash-link'

const drawerWidth = 240;

const HeaderReplacement = ({children,id},...props) =>{
    React.useEffect(()=>{
        if (window.location.hash) {
          const hashid = window.location.hash.replace("#", "");
          if(hashid){
          const element = document.getElementById(hashid);
          element.scrollIntoView({block:'start',behavior:'smooth'});
          }
        }
      },[])
    return(
        <div>
            <section id={id}>
                <h1 {...props}>{children}</h1>
                <HashLink smooth to={'#'+id}>&nbsp; #</HashLink>
            </section>
        </div>
 
    )
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
                                        component:HeaderReplacement,
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