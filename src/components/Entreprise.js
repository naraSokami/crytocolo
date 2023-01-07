import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';

export default function ({data}) {
	return (
    <div className='entreprise'>
			<Box sx={{ minWidth: 275 }}>
				<Card variant="outlined">
					<CardContent>
						<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
							Word of the Day
						</Typography>
						<Typography variant="h5" component="div">
							{data.name}
						</Typography>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							adjective
						</Typography>
						<Typography variant="body2">
							{data.description}
							<br />
							{'"a benevolent smile"'}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Learn More</Button>
					</CardActions>
				</Card>
			</Box>
			
		</div>
	)
}