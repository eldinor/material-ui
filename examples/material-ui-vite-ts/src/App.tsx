import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import DataTable from './MyDataTable';
import BabylonComponent from './ViewerCompTest';
import ViewerOnlyTest from './ViewerOnlyTest';
import CompImportTest from './CompImportTest';
import DZone from './DropZone';

function Copyright() {
  return (
    <Typography
      variant="body1"
      align="center"
      sx={{
        color: 'text.secondary', my: 4
      }}
    >
      {'Prepared by '}
      <Link color="inherit" href="https://babylonpress.org/">
       BabylonPress
      </Link>{' '}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Babylon Viewer v2 + React at Vite.js example in TypeScript
        </Typography>
        <ProTip />
      </Box>
  <ViewerOnlyTest/>
 
  <Copyright />
    </Container>
  );
}
