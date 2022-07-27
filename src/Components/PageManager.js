import {Toolbar,Box} from '@mui/material'
import {Route, Routes} from 'react-router-dom'

const drawerWidth = 240;

export default function PageManager(){
    return(
        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
            <Toolbar/>
          <Routes>  
          <Route exact path = '/wwroboftc/'>
            
          </Route>
          <Route exact path='/wwroboftc/about/' element={<div className="About">About</div>}/>
          </Routes>
        </Box>
    )
}