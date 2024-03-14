import { Hono } from 'hono';
import { renderer } from './renderer';

const app = new Hono();

app.use(renderer);

app.get('/', (c) => {
	fetch('https://ntfy.sh/occasion-martial-finite-awoken', {
		method: 'POST', // PUT works too
		body: 'Penguin is inviting you to a meet! 🐧🎉',
		headers: {
			Title: 'Penguin Meet',
			Priority: 'urgent',
			Tags: 'computer',
		},
	});

	return c.redirect('https://meet.google.com/mre-oats-wgd?pli=1');
});

export default app;
