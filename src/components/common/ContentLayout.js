import React from 'react'
import { Helmet } from 'react-helmet';
import { Box, Card, CardActions, CardHeader, CircularProgress, Container } from '@mui/material';

export default function ContentLayout({header,title,loading,TitleComponent,Component,Content}) {
  return (
    <>
      <Helmet>
        <title>{header}</title>
    </Helmet>
    <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth={false}>
            <Box>
              <Box sx={{ mt: 3 }}>
                <Card>
                  <CardHeader sx = {{display: 'inline-block'}}
                    title={title}
                  />
                  <CardActions style = {{display: 'inline-block', float: 'right'}} >
                    {TitleComponent}
                </CardActions>
                </Card>
              </Box>
            </Box>
            {Content}
            <Box sx={{ pt: 3 }}>
              {Component}
              {loading && (
                    <CircularProgress
                      size={100}
                      sx={{
                        color: 'primary',
                        position: 'fixed',
                        top: '50%',
                        left: '47%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                      }}
                    />
                  )}
            </Box>
          </Container>
        </Box>
    </>
  )
}
