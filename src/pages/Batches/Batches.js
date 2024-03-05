import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import "./Batches.css"


const Batches=()=>{
    return(
        <div className="list">
            <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        <List>
        <ol>
          <ListItem disablePadding>
            <ListItemButton>
                <li>          
              <ListItemText primary="KKEM March CSA"/>
              </li>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
            <li>    
              <ListItemText primary="KKEM March DSA" />
              </li>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
            <li>    
              <ListItemText primary="KKEM March MLAI" />
              </li>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
            <li>    
              <ListItemText primary="KKEM March FSD" />
              </li>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
            <li>    
              <ListItemText primary="KKEM March ST" />
              </li>
            </ListItemButton>
          </ListItem>
        </ol>
        </List>
    </Box>
</div>
    )
}

export default Batches