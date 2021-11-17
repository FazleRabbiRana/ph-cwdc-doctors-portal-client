import React from 'react';
import {
	AppBar,
	Box,
	Button,
	CssBaseline,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';

const drawerWidth = 200;

const Dashboard = props => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	let { path, url } = useRouteMatch();
	const { admin } = useAuth();

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<Link to="/appointment" style={{ textDecoration: 'none' }}>
				<Button variant="text" color="inherit">
					Appointment
				</Button>
			</Link>
			<Link to={`${url}`} style={{ textDecoration: 'none' }}>
				<Button variant="text" color="inherit">
					Dashboard
				</Button>
			</Link>
			{admin && (
				<>
					<Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }}>
						<Button variant="text" color="inherit">
							Make Admin
						</Button>
					</Link>
					<Link to={`${url}/addDoctor`} style={{ textDecoration: 'none' }}>
						<Button variant="text" color="inherit">
							Add Doctor
						</Button>
					</Link>
				</>
			)}
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Appointments
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				<Switch>
					<Route exact path={path}>
						<DashboardHome />
					</Route>
					<Route path={`${path}/payment/:appointmentId`}>
						<Payment />
					</Route>
					<AdminRoute path={`${path}/makeAdmin`}>
						<MakeAdmin />
					</AdminRoute>
					<AdminRoute path={`${path}/addDoctor`}>
						<AddDoctor />
					</AdminRoute>
				</Switch>
			</Box>
		</Box>
	);
};

export default Dashboard;
